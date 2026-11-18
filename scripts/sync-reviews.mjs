#!/usr/bin/env node

/**
 * ============================================================================
 * Google Reviews Sync Script for N24 Pilates & Wellness Studio
 * ============================================================================
 *
 * This script fetches the latest verified Google reviews from the Google Places
 * API, filters out duplicates, and automatically appends new 5-star reviews to:
 *   src/data/reviews.json
 *
 * Usage:
 *   npm run sync-reviews
 *   npm run sync-reviews -- --dry-run
 *   npm run sync-reviews -- --min-rating=4
 * ============================================================================
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const REVIEWS_FILE = path.join(ROOT_DIR, "src", "data", "reviews.json");

// Default studio details
const DEFAULT_STUDIO_NAME = "N24 Pilates & Wellness Studio Unit G3/3 Kintail Rd Perth";

// ----------------------------------------------------------------------------
// 1. Load Environment Variables from .env.local or .env
// ----------------------------------------------------------------------------
function loadEnv() {
  const envFiles = [".env.local", ".env"];
  for (const file of envFiles) {
    const fullPath = path.join(ROOT_DIR, file);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, "utf-8");
      for (const line of content.split("\n")) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const eqIdx = trimmed.indexOf("=");
        if (eqIdx !== -1) {
          const key = trimmed.slice(0, eqIdx).trim();
          let val = trimmed.slice(eqIdx + 1).trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
          }
          if (!process.env[key]) {
            process.env[key] = val;
          }
        }
      }
    }
  }
}

loadEnv();

// Parse CLI flags
const args = process.argv.slice(2);
const isDryRun = args.includes("--dry-run");
const isMock = args.includes("--mock");
const minRatingArg = args.find((a) => a.startsWith("--min-rating="));
const MIN_RATING = minRatingArg ? parseInt(minRatingArg.split("=")[1], 10) : 5;

// ----------------------------------------------------------------------------
// 2. Helper: Normalize text for duplicate detection
// ----------------------------------------------------------------------------
function normalizeString(str) {
  return (str || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 60);
}

function getInitial(name) {
  if (!name) return "M";
  const clean = name.trim().replace(/^[^a-zA-Z0-9]+/, "");
  return clean ? clean.charAt(0).toUpperCase() : "M";
}

// ----------------------------------------------------------------------------
// 3. Find Place ID if not provided
// ----------------------------------------------------------------------------
async function resolvePlaceId(apiKey, placeId) {
  if (placeId) return placeId;

  console.log(`🔎 Searching Google Places for "${DEFAULT_STUDIO_NAME}"...`);
  const searchUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
    DEFAULT_STUDIO_NAME
  )}&inputtype=textquery&fields=place_id,name&key=${apiKey}`;

  const res = await fetch(searchUrl);
  const data = await res.json();

  if (data.status === "OK" && data.candidates && data.candidates.length > 0) {
    const foundId = data.candidates[0].place_id;
    console.log(`📍 Found Place ID: ${foundId} (${data.candidates[0].name})`);
    return foundId;
  }

  throw new Error(`Could not automatically find Place ID: ${data.error_message || data.status}`);
}

// ----------------------------------------------------------------------------
// 4. Fetch Reviews from Google Places API
// ----------------------------------------------------------------------------
async function fetchGoogleReviews(apiKey, placeId) {
  console.log(`⭐ Fetching latest Google reviews...`);
  const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&reviews_sort=newest&key=${apiKey}`;

  const res = await fetch(detailsUrl);
  const data = await res.json();

  if (data.status !== "OK") {
    throw new Error(`Google Places API returned status "${data.status}": ${data.error_message || "Unknown error"}`);
  }

  const result = data.result || {};
  return {
    businessName: result.name,
    overallRating: result.rating,
    totalReviews: result.user_ratings_total,
    reviews: result.reviews || [],
  };
}

// ----------------------------------------------------------------------------
// 5. Main Execution
// ----------------------------------------------------------------------------
async function main() {
  console.log("========================================================");
  console.log("   N24 Pilates & Wellness — Google Reviews Sync");
  console.log("========================================================\n");

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  let placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey && !isMock) {
    console.error("❌ Missing GOOGLE_PLACES_API_KEY in environment or .env.local\n");
    console.log("To enable automatic Google Review syncing:");
    console.log("1. Get an API key from Google Cloud Console:");
    console.log("   https://console.cloud.google.com/apis/credentials");
    console.log("   (Enable 'Places API' under Enabled APIs & Services)\n");
    console.log("2. Create or open '.env.local' in your project root and add:");
    console.log("   GOOGLE_PLACES_API_KEY=your_api_key_here");
    console.log("   GOOGLE_PLACE_ID=optional_place_id_here\n");
    console.log("3. Run this command again:");
    console.log("   npm run sync-reviews\n");
    console.log("💡 (Tip: Test without an API key using: npm run sync-reviews -- --mock --dry-run)\n");
    process.exit(1);
  }

  // Read existing reviews
  let existingReviews = [];
  if (fs.existsSync(REVIEWS_FILE)) {
    try {
      existingReviews = JSON.parse(fs.readFileSync(REVIEWS_FILE, "utf-8"));
    } catch (e) {
      console.error(`⚠️ Could not parse ${REVIEWS_FILE}:`, e.message);
      existingReviews = [];
    }
  }
  console.log(`📂 Current stored reviews: ${existingReviews.length}`);

  // Fetch from Google or use Mock
  let googleData;
  if (isMock) {
    console.log("🧪 Running in --mock mode (simulating Google Places API response)...");
    googleData = {
      businessName: "N24 Pilates & Wellness Studio (Simulated)",
      overallRating: 5.0,
      totalReviews: 48,
      reviews: [
        {
          author_name: "Rebecca Boehm",
          rating: 5,
          text: "Best Pilates studio ever! Sia is amazing and the environment is very clean and beautiful.",
          relative_time_description: "a day ago",
        },
        {
          author_name: "Jessica Taylor",
          rating: 5,
          text: "Incredible reformer classes and peaceful atmosphere! The instructors are attentive and the sauna after class is heavenly.",
          relative_time_description: "2 days ago",
        },
        {
          author_name: "Anonymous User",
          rating: 3,
          text: "Classes are fine.",
          relative_time_description: "3 weeks ago",
        },
      ],
    };
  } else {
    try {
      const resolvedId = await resolvePlaceId(apiKey, placeId);
      googleData = await fetchGoogleReviews(apiKey, resolvedId);
    } catch (err) {
      console.error("\n❌ Error fetching from Google:", err.message);
      process.exit(1);
    }
  }

  console.log(`\n🏢 Business: ${googleData.businessName}`);
  console.log(`⭐ Google Rating: ${googleData.overallRating} (${googleData.totalReviews} total reviews)`);
  console.log(`📥 Received ${googleData.reviews.length} reviews from Google Places API.`);

  // Filter & Deduplicate
  const existingNormalizedTexts = new Set(existingReviews.map((r) => normalizeString(r.text)));
  const existingNames = new Set(existingReviews.map((r) => (r.name || "").toLowerCase().trim()));

  const newReviewsToAdd = [];

  for (const gr of googleData.reviews) {
    const rating = gr.rating || 5;
    const authorName = (gr.author_name || "Verified Member").trim();
    const text = (gr.text || "").trim();

    // Check minimum rating filter
    if (rating < MIN_RATING) {
      console.log(`⏩ Skipping review from "${authorName}" (Rating: ${rating}★ is below threshold ${MIN_RATING}★)`);
      continue;
    }

    // Skip empty reviews
    if (!text) {
      console.log(`⏩ Skipping review from "${authorName}" (No written comment text)`);
      continue;
    }

    // Check if already exists
    const normText = normalizeString(text);
    if (existingNormalizedTexts.has(normText) || existingNames.has(authorName.toLowerCase())) {
      console.log(`✔ Already present: "${authorName}"`);
      continue;
    }

    // New review found!
    const formatted = {
      id: `google-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: authorName,
      date: gr.relative_time_description || "Verified Member · Applecross",
      text: text,
      initial: getInitial(authorName),
      rating: rating,
      source: "google",
    };

    newReviewsToAdd.push(formatted);
    // Add to sets to avoid internal duplicates within the batch
    existingNormalizedTexts.add(normText);
    existingNames.add(authorName.toLowerCase());
  }

  console.log("\n--------------------------------------------------------");
  if (newReviewsToAdd.length === 0) {
    console.log("✨ All Google reviews are already up to date on your website!");
    console.log("   No new reviews to add.");
    console.log("--------------------------------------------------------\n");
    return;
  }

  console.log(`🎉 Found ${newReviewsToAdd.length} NEW review(s) to add:`);
  newReviewsToAdd.forEach((r, idx) => {
    console.log(`   ${idx + 1}. [${r.rating}★] ${r.name}: "${r.text.slice(0, 80)}..."`);
  });

  if (isDryRun) {
    console.log("\n[DRY RUN] No files were modified. Run without --dry-run to save changes.");
    return;
  }

  // Prepend new reviews to the top of the array
  const updatedReviews = [...newReviewsToAdd, ...existingReviews];
  fs.writeFileSync(REVIEWS_FILE, JSON.stringify(updatedReviews, null, 2) + "\n", "utf-8");

  console.log(`\n💾 Saved updated reviews to: ${path.relative(ROOT_DIR, REVIEWS_FILE)}`);
  console.log(`✅ Total reviews on website is now: ${updatedReviews.length}`);
  console.log("========================================================\n");
}

main().catch((e) => {
  console.error("Unhandled error:", e);
  process.exit(1);
});
