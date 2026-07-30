"use client";

import * as React from "react";
import { useState } from "react";
import Script from "next/script";
import {
  specialOffers,
  weeklyMemberships,
  pilatesSessionPacks,
  infraredSaunaPacks,
  type PricingPlan,
} from "@/data/studio";
import { PricingCard } from "@/components/PricingCard";
import { PricingModal } from "@/components/PricingModal";

/* ── Section wrapper — alternating white / very-light-teal ── */
function Section({
  title,
  subtitle,
  children,
  alt = false,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <div className={alt ? "py-24 bg-[#F1FAFB]" : "py-24 bg-white"}>
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] mb-3 text-[#00AFC2]">
              Pricing
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-[#0C1A2E]">
              {title}
            </h2>
          </div>
          <p className="text-[0.95rem] font-light max-w-xs text-right hidden sm:block text-[#4A606A]">
            {subtitle}
          </p>
        </div>
        {children}
      </section>
    </div>
  );
}

export function PricingContent() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPlan = (plan: PricingPlan) => {
    if (plan.comingSoon || !plan.iframeUrl) return;
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <>
      <Script
        src="https://n24pilatesstudio.gymmasteronline.com/portal/static/js/hostpage.js"
        strategy="afterInteractive"
      />

      <Section title="Special Offers" subtitle="Limited-time deals to kickstart your journey.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialOffers.map((p, i) => (
            <PricingCard key={p.name} plan={p} index={i} onSelect={handleSelectPlan} />
          ))}
        </div>
      </Section>

      <Section
        title="Weekly Memberships"
        subtitle="Commit to your wellness with a flexible weekly plan."
        alt
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {weeklyMemberships.map((p, i) => (
            <PricingCard key={p.name} plan={p} index={i} onSelect={handleSelectPlan} />
          ))}
        </div>
      </Section>

      <Section title="Pilates Session Packs" subtitle="Flexibility without a weekly commitment.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pilatesSessionPacks.map((p, i) => (
            <PricingCard key={p.name} plan={p} index={i} onSelect={handleSelectPlan} />
          ))}
        </div>
      </Section>

      <Section
        title="Infrared Sauna Packs"
        subtitle="Relax, recover, and rejuvenate with heat therapy."
        alt
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {infraredSaunaPacks.map((p, i) => (
            <PricingCard key={p.name} plan={p} index={i} onSelect={handleSelectPlan} />
          ))}
        </div>
      </Section>

      <PricingModal
        key={selectedPlan?.name || "modal"}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPlan(null);
        }}
        plan={selectedPlan}
      />
    </>
  );
}
