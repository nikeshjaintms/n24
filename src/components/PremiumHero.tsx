"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Variants, motion, MotionValue } from "framer-motion";
import { ArrowRight, Star, Users, User, Activity } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export function PremiumHero({
  heroY,
  heroOpacity,
  heroScale,
}: {
  heroY: MotionValue<string>;
  heroOpacity: MotionValue<number>;
  heroScale: MotionValue<number>;
}) {
  return (
    <div className="w-full flex flex-col">
      {/* =======================
          HERO SECTION
          ======================= */}
      <section className="relative w-full min-h-screen flex flex-col justify-center bg-[#071321] overflow-hidden pt-[120px] lg:pt-[160px] pb-32 lg:pb-48">
        {/* CINEMATIC BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Mobile Image (Portrait) */}
          <Image 
            src="/pilates_hero_mobile.png" 
            alt="N24 Pilates Studio" 
            fill 
            className="object-cover object-center md:hidden" 
            priority
          />
          {/* Desktop Image (Landscape) */}
          <Image 
            src="/Copilot_20260710_105525.png" 
            alt="N24 Pilates Studio" 
            fill 
            className="object-cover object-center hidden md:block" 
            priority
          />
          {/* Top gradient for Navbar visibility */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#071321]/90 via-[#071321]/60 to-transparent" />
          
          {/* Overall overlay to keep hero text readable but image bright */}
          <div className="absolute inset-0 bg-[#071321]/40" />
          
          {/* Bottom gradient to blend smoothly into the next section */}
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#071321] to-transparent" />
        </div>

        {/* Floating Orbs / Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#16D9F5]/10 rounded-full blur-[120px] pointer-events-none z-0"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-[#0082c8]/10 rounded-full blur-[140px] pointer-events-none z-0"
        />

        {/* Noise Texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay z-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* =======================
            CONTENT OVERLAY
            ======================= */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center lg:items-start justify-center h-full"
        >
          {/* TYPOGRAPHY */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="w-full flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8 lg:mb-12">
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#16D9F5] to-transparent rounded-full hidden lg:block" />
              <div className="h-[2px] w-12 bg-gradient-to-l from-[#16D9F5] to-transparent rounded-full lg:hidden" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#16D9F5] drop-shadow-[0_0_8px_rgba(22,217,245,0.4)]">
                Perth&apos;s Premier Digital Reformer &amp; Sauna Sanctuary
              </span>
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#16D9F5] to-transparent rounded-full lg:hidden" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-[4.5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem] leading-[0.9] text-white tracking-tight mb-8 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
            >
              Intelligent{" "}
              <span className="italic relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-[#16D9F5] to-[#7EE8FA] bg-clip-text text-transparent blur-[20px] opacity-40 animate-pulse-slow">
                  Pilates.
                </span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#16D9F5] via-[#7EE8FA] to-[#16D9F5] bg-[length:200%_auto] animate-shimmer">
                  Pilates.
                </span>
              </span>
              <br />
              Elevated{" "}
              <span className="italic relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-[#16D9F5] to-[#7EE8FA] bg-clip-text text-transparent blur-[20px] opacity-40 animate-pulse-slow delay-150">
                  Movement.
                </span>
                <span
                  className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#16D9F5] via-[#7EE8FA] to-[#16D9F5] bg-[length:200%_auto] animate-shimmer"
                  style={{ animationDelay: "1s" }}
                >
                  Movement.
                </span>
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={fadeUp}
              className="text-[1.1rem] sm:text-[1.25rem] leading-relaxed text-white font-light max-w-xl mb-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              Welcome to a new era of movement in Applecross. Experience Australia&apos;s most
              advanced self-guided Digital Reformer Pilates studio and restorative Infrared Sauna
              therapy. Enjoy 800+ on-demand masterclasses, complete privacy, and a schedule tailored
              to your life—open 5:00 AM to 10:00 PM daily.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              <Link
                href="/schedule"
                className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#00C8D7] px-10 py-5 text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[#0A0F1E] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-5px_rgba(0,200,215,0.4)] w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Your Class
                  <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>

              <Link
                href="/about#complimentary-pass"
                className="group flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-10 py-5 text-[0.85rem] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:-translate-y-1.5 hover:border-white/50 hover:bg-white/10 hover:shadow-[0_15px_35px_-5px_rgba(255,255,255,0.1)] backdrop-blur-md w-full sm:w-auto"
              >
                Claim Your Complimentary Pass
              </Link>
            </motion.div>


          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
