"use client";

import * as React from "react";
import { useState } from "react";
import Script from "next/script";
import Image from "next/image";
import communityImg from "@/assets/community.jpg";
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

      <Section
        title="Introductory &amp; Private Offers"
        subtitle="Exclusive opportunities to experience Australia's premier digital reformer sanctuary."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialOffers.map((p, i) => (
            <PricingCard key={p.name} plan={p} index={i} onSelect={handleSelectPlan} />
          ))}
        </div>
      </Section>

      <Section
        title="Weekly Memberships"
        subtitle="Unrestricted self-guided access from 5:00 AM to 10:00 PM."
        alt
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {weeklyMemberships.map((p, i) => (
            <PricingCard key={p.name} plan={p} index={i} onSelect={handleSelectPlan} />
          ))}
        </div>
      </Section>

      <Section
        title="Reformer Class Passes"
        subtitle="Complete scheduling freedom without weekly recurring commitments."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pilatesSessionPacks.map((p, i) => (
            <PricingCard key={p.name} plan={p} index={i} onSelect={handleSelectPlan} />
          ))}
        </div>
      </Section>

      <Section
        title="Private Infrared Sauna Suites"
        subtitle="Deep tissue cellular recovery in private 2-capacity sauna suites."
        alt
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {infraredSaunaPacks.map((p, i) => (
            <PricingCard key={p.name} plan={p} index={i} onSelect={handleSelectPlan} />
          ))}
        </div>
      </Section>

      {/* Events and Groups Custom Section */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-3xl bg-[#0A0F1E] overflow-hidden shadow-2xl p-8 lg:p-12 text-white">
            <h2 className="font-display text-4xl md:text-5xl mb-12">Events and Groups</h2>
            
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
              
              {/* Left Side */}
              <div className="flex flex-col gap-8">
                <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden relative shadow-lg">
                  <Image 
                    src={communityImg}
                    alt="Group Pilates Events"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <ul className="list-disc pl-5 space-y-3 text-white/80 text-[1.05rem] font-light">
                  <li>Private group classes</li>
                  <li>Corporate wellness events</li>
                  <li>Birthdays and Hens parties</li>
                </ul>

                <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl italic text-white/80 text-[0.95rem] leading-relaxed relative shadow-inner mt-4">
                  <span className="absolute -top-4 -left-2 text-5xl text-[#00C8D7] opacity-40 font-display">"</span>
                  Fantastic studio with top-tier Balance Body equipment. As a complete beginner, I was nervous, but Instructor made me feel so welcome and they provided plenty of modifications to suit my level. The sessions are intense and fun. I love that the classes are small enough for the instructor to give one-on-one help with form. Reformer Pilates truly helped in toning my body increase strength giving quick results. I definitely recommend it!
                  <p className="mt-4 font-bold text-[#00C8D7] not-italic">— Sonali</p>
                </div>
              </div>

              {/* Right Side Card */}
              <div className="bg-white text-[#0A0F1E] p-8 md:p-10 rounded-3xl shadow-xl flex flex-col justify-center lg:sticky lg:top-24">
                <h3 className="font-display text-2xl md:text-3xl mb-6 leading-snug">
                  Private Group bookings &amp; Corporate Wellness Events
                </h3>
                <p className="text-[#4A606A] text-[0.95rem] font-light leading-relaxed mb-10">
                  Group bookings for the team, squad or special occasions. We offer tailored wellness
                  experiences that combine the transformative power of Pilates with the benefits of infrared
                  sauna sessions, creating a unique and rejuvenating experience for your team or group.
                </p>
                
                <a
                  href="/contact"
                  className="group relative overflow-hidden flex items-center justify-center gap-3 rounded-full border-2 border-[#0A0F1E] px-8 py-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#0A0F1E] transition-all duration-500 hover:bg-[#0A0F1E] hover:text-white text-center w-full"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Request a Quote
                  </span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

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
