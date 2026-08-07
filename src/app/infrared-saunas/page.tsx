import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { BrandButton } from "@/components/BrandButton";
import { Flame, Droplets, HeartPulse, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Private Infrared Saunas | N24 Digital Pilates Studio Applecross",
  description:
    "Experience private infrared saunas in Applecross, Perth. Full-spectrum heat therapy, medical-grade chromotherapy, and deep cellular muscle recovery.",
};

const benefits = [
  {
    icon: Droplets,
    title: "Deep Detoxification",
    desc: "Penetrating wavelengths warm deep muscle tissue directly, accelerating cellular toxin elimination and flushing heavy metals without oppressive ambient heat.",
  },
  {
    icon: Flame,
    title: "Muscle Recovery",
    desc: "The ultimate complement to Reformer Pilates. Relieve joint stiffness, melt post-workout muscle soreness, and stimulate circulation for rapid recovery.",
  },
  {
    icon: HeartPulse,
    title: "Cortisol & Stress Balance",
    desc: "Quiet your nervous system in a dedicated sanctuary. Regular sessions help regulate cortisol, lower blood pressure, and restore deep sleep cycles.",
  },
];


export default function InfraredSaunas() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Private Sauna Suites"
        title="Restore and"
        accent="recover."
        subtitle="Unwind, detoxify, and accelerate cellular repair in our private full-spectrum infrared saunas, designed to complement your reformer practice."
      />

      {/* ── Experience Section ─────────────────────────────────── */}
      <section className="bg-white py-32 relative overflow-hidden border-b border-[#00C8D7]/10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00C8D7]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-[#00C8D7] to-transparent" />
                <p className="eyebrow text-[#00C8D7] tracking-[0.3em]">The Experience</p>
              </div>
              <h2 className="font-display text-5xl md:text-6xl leading-[1.05] text-[#0A0F1E] mb-8">
                Melt away
                <br />
                <em className="text-[#00C8D7] font-light">stress and tension.</em>
              </h2>
              <p className="text-[#5B6B70] leading-[1.8] text-[1.1rem] font-light mb-12">
                Our private infrared sauna suites offer an immersive sanctuary designed
                to rejuvenate mind and body. Whether you are accelerating recovery after a 6:00 AM
                digital reformer session or seeking quiet solace from daily stress, full-spectrum
                heat and medical-grade chromotherapy leave you profoundly restored.
              </p>

              <div className="flex flex-col gap-y-10 mb-12">
                {benefits.map((b, i) => (
                  <div
                    key={b.title}
                    className="animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <div className="flex size-14 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-[#00C8D7]/10 to-transparent border border-[#00C8D7]/20 shadow-inner text-[#00C8D7] mb-5 transition-transform duration-500 hover:scale-110 hover:rotate-3">
                      <b.icon className="size-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-2xl text-[#0A0F1E] mb-2">{b.title}</h3>
                    <p className="text-[0.9rem] text-[#5B6B70] leading-relaxed font-light">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both" style={{ animationDelay: "500ms" }}>
                <BrandButton asChild size="lg" className="w-full sm:w-auto px-10">
                  <a 
                    href="https://n24pilatesstudio.gymmasteronline.com/portal/book/service"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Your Session
                    <ArrowRight className="size-4 ml-2" />
                  </a>
                </BrandButton>
              </div>
            </div>

            {/* Video */}
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] shadow-soft animate-in fade-in slide-in-from-right-10 duration-1000 fill-mode-both delay-300 group">
              <video
                src="/sauna.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/60 via-transparent to-transparent opacity-80 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>


    </SiteLayout>
  );
}
