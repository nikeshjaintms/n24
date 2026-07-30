import type { Metadata } from "next";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { PricingContent } from "@/components/PricingContent";

export const metadata: Metadata = {
  title: "Pricing & Memberships — N24 Pilates Studio",
  description:
    "Flexible class packs and memberships at N24 Pilates Studio. Explore our special offers, weekly memberships, session packs, and infrared sauna options.",
};

/* ── Page ── */
export default function Pricing() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Pricing & Memberships"
        title="Invest in"
        accent="yourself."
        subtitle="Flexible options to suit your rhythm — whether you're dropping in, committing to a weekly routine, or relaxing in our infrared sauna."
      />
      <PricingContent />
    </SiteLayout>
  );
}
