import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { BrandButton } from "@/components/BrandButton";
import { Flame, Droplets, HeartPulse, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Private Infrared Saunas | N24 Digital Pilates Studio Applecross",
  description:
    "Experience private 2-capacity infrared saunas in Applecross, Perth. Full-spectrum heat therapy, medical-grade chromotherapy, and deep cellular muscle recovery.",
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

const pricing = [
  {
    title: "30 Minute Session",
    price: "$35",
    features: [
      "Private suite for up to 2 guests",
      "Full-spectrum infrared therapy",
      "Complimentary luxury shower towel",
      "Access to premium sanctuary amenities",
    ],
  },
  {
    title: "45 Minute Session",
    price: "$45",
    features: [
      "Private suite for up to 2 guests",
      "Full-spectrum infrared therapy",
      "Complimentary luxury shower towel",
      "Medical-grade chromotherapy lighting",
      "Access to premium sanctuary amenities",
    ],
    popular: true,
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
                Our private 2-capacity infrared sauna suites offer an immersive sanctuary designed
                to rejuvenate mind and body. Whether you are accelerating recovery after a 6:00 AM
                digital reformer session or seeking quiet solace from daily stress, full-spectrum
                heat and medical-grade chromotherapy leave you profoundly restored.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                {benefits.map((b, i) => (
                  <div
                    key={b.title}
                    className="animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <div className="flex size-14 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-[#00C8D7]/10 to-transparent border border-[#00C8D7]/20 shadow-inner text-[#00C8D7] mb-6 transition-transform duration-500 hover:scale-110 hover:rotate-3">
                      <b.icon className="size-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-2xl text-[#0A0F1E] mb-3">{b.title}</h3>
                    <p className="text-[0.9rem] text-[#5B6B70] leading-relaxed font-light">
                      {b.desc}
                    </p>
                  </div>
                ))}
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

      {/* ── Pricing Section ─────────────────────────────────── */}
      <section className="bg-[#0A0F1E] py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00C8D7]/10 blur-[150px] pointer-events-none mix-blend-screen" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both">
            <p className="eyebrow text-[#00C8D7] tracking-[0.3em] mb-6">Sauna Pricing</p>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
              Single &amp; Dual <em className="text-[#00C8D7] font-light">Sessions</em>
            </h2>
            <p className="text-white/60 font-light leading-relaxed text-[1.05rem]">
              All sauna sessions include private suite access for up to two guests—unwind in
              solitude or share your recovery journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {pricing.map((p, i) => (
              <div
                key={p.title}
                className={`relative rounded-[28px] glass-dark p-10 lg:p-12 border flex flex-col transition-transform duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both shadow-premium-dark ${p.popular ? "border-[#00C8D7]/40" : "border-white/10"
                  }`}
                style={{ animationDelay: `${i * 200}ms` }}
              >
                {p.popular && (
                  <div className="absolute -top-4 right-10 bg-gradient-to-r from-[#00C8D7] to-[#00AFC2] text-[#0A0F1E] text-[0.7rem] font-bold uppercase tracking-[0.2em] py-2 px-6 rounded-full shadow-[0_4px_20px_rgba(0,200,215,0.4)]">
                    Most Popular
                  </div>
                )}

                <h3 className="font-display text-3xl text-white mb-6">{p.title}</h3>
                <div className="flex items-baseline gap-2 mb-10 pb-10 border-b border-white/10">
                  <span className="font-display text-6xl text-[#00C8D7]">{p.price}</span>
                  <span className="text-white/50 text-[0.9rem] font-light uppercase tracking-widest">
                    / session
                  </span>
                </div>

                <ul className="space-y-5 flex-1 mb-12">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#00C8D7]/10 border border-[#00C8D7]/30">
                        <Check className="size-3.5 text-[#00C8D7]" strokeWidth={2.5} />
                      </div>
                      <span className="text-[0.95rem] text-white/70 leading-relaxed font-light">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://n24pilatesstudio.gymmasteronline.com/portal/book/service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-3 rounded-full py-5 px-8 text-[0.75rem] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:scale-[1.02] ${p.popular
                      ? "bg-[#00C8D7] text-[#0A0F1E] shadow-[0_10px_30px_rgba(0,200,215,0.3)] hover:bg-[#00b5c4]"
                      : "bg-white/5 border border-white/20 text-white hover:bg-[#00C8D7] hover:text-[#0A0F1E] hover:border-[#00C8D7]"
                    }`}
                >
                  Book Now
                  <ArrowRight
                    className={`size-4 ${p.popular ? "text-[#0A0F1E]" : "text-[#00C8D7] group-hover:text-[#0A0F1E]"}`}
                  />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center animate-in fade-in duration-1000 fill-mode-both delay-500">
            <p className="text-[0.75rem] uppercase font-bold tracking-[0.2em] text-white/50 mb-4">
              Interested in multi-session sauna passes or memberships?
            </p>
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 text-[#00C8D7] hover:text-white transition-colors duration-300 text-[0.85rem] font-bold tracking-widest uppercase"
            >
              <span className="relative">
                Explore Sauna Passes &amp; Memberships
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00C8D7] transition-all duration-300 group-hover:w-full group-hover:bg-white" />
              </span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
