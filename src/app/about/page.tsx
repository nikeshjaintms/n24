"use client";

import Link from "next/link";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { ContactForm } from "@/components/ContactForm";
import { pillars } from "@/data/studio";
import { Sparkles, Waves, Leaf, Heart, ArrowRight, Phone, FileText } from "lucide-react";
import Image from "next/image";
import { m } from "framer-motion";

// ── Studio / Personal Phone Contact (Easily change to personal number, e.g. "tel:0412345678") ──
const TRAINER_PHONE_TEL = "tel:0478336630";

const icons = [Sparkles, Waves, Leaf, Heart];
const accentColors = ["#00C8D7", "#7EE8FA", "#00AFC2", "#00C8D7"];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About N24 Pilates Studio"
        title="Freedom in movement,"
        accent="strength for life."
        subtitle="N24 is Australia's premier self-guided Digital Reformer Pilates and Infrared Sauna studio in Applecross—where cutting-edge technology meets a warm, uncrowded sanctuary."
      />

      {/* ── Story ─────────────────────────────────── */}
      <section className="bg-white py-32 relative overflow-hidden border-b border-[#00C8D7]/10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00C8D7]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image */}
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px", amount: 0.1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[24px] shadow-soft aspect-[4/5] lg:aspect-auto lg:h-[700px]"
            >
              <Image
                src="/shared image.jpg"
                alt="N24 Pilates Studio interior"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/80 via-transparent to-transparent opacity-80" />
            </m.div>

            {/* Text */}
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px", amount: 0.1 }}
              variants={stagger}
              className="lg:pl-8"
            >
              <m.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-6 tracking-[0.3em]">
                Who We Are
              </m.p>
              <m.h2
                variants={fadeUp}
                className="font-display text-4xl md:text-5xl text-[#0A0F1E] leading-[1.2] mb-6"
              >
                Our Story
              </m.h2>
              <m.div
                variants={fadeUp}
                className="space-y-4 text-[1.05rem] leading-[1.8] text-[#5B6B70] font-light mb-10"
              >
                <p>
                  Our studio was born from a desire to create a wellness space that truly puts
                  people first. After years of witnessing the drawbacks of traditional fitness
                  environments where the focus is often on crowded classes and one-size-fits-all
                  routines, we knew there had to be a better way. We envisioned a place where the
                  journey to health is personal, supportive, and focused on genuine mind-body
                  connection.
                </p>
              </m.div>

              <m.h2
                variants={fadeUp}
                className="font-display text-4xl md:text-5xl text-[#0A0F1E] leading-[1.2] mb-6"
              >
                Our Studio
              </m.h2>
              <m.div
                variants={fadeUp}
                className="space-y-4 text-[1.05rem] leading-[1.8] text-[#5B6B70] font-light mb-10"
              >
                <p>
                  We built this studio to give you a space where you can move at your own pace and
                  choose the workout your body needs. Our extensive Digital Library offers over 800
                  expert-designed programs in Reformer, Mat Pilates, Yoga, HIIT Hybrid, Stretch +
                  Strength and much more. You'll find more than 20 different styles, from beginner
                  fundamentals and expert-level challenges to specialized clinical Pilates and
                  physiotherapy-focused routines. Every program is carefully created to be safe and
                  effective and our onsite instructors are here to help you during the staff hours 6
                  days a week.
                </p>
              </m.div>

              <m.h2
                variants={fadeUp}
                className="font-display text-4xl md:text-5xl text-[#0A0F1E] leading-[1.2] mb-6"
              >
                Our Vision
              </m.h2>
              <m.div
                variants={fadeUp}
                className="space-y-4 text-[1.05rem] leading-[1.8] text-[#5B6B70] font-light mb-12"
              >
                <p>
                  We believe wellness means movement and recovery, so our studio includes infrared
                  sauna facilities. After your workout, you can relax and enjoy benefits like muscle
                  recovery, detoxification and healthier skin. Our goal is for you to leave each
                  session feeling stronger, more centered and confident you're getting real value.
                  It's a complete wellness experience from building strength to restoring your body,
                  all in one place.
                </p>
              </m.div>
              <m.div variants={fadeUp}>
                <Link
                  href="/pricing"
                  className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-[#00C8D7] px-10 py-5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#0A0F1E] shadow-[0_10px_30px_rgba(0,200,215,0.3)] transition-all duration-500 hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Discover Our Memberships{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
              </m.div>
            </m.div>
          </div>
        </div>
      </section>

      {/* ── Philosophy / Values ───────────────────── */}
      <section className="py-32 relative overflow-hidden bg-[#0A0F1E]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00C8D7]/10 blur-[150px] pointer-events-none mix-blend-screen" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            variants={stagger}
            className="text-center mb-24"
          >
            <m.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-6 tracking-[0.3em]">
              Our Guiding Philosophy
            </m.p>
            <m.h2 variants={fadeUp} className="font-display text-5xl md:text-7xl text-white">
              Why our approach <em className="text-[#00C8D7] font-light">feels different</em>
            </m.h2>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            variants={stagger}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {pillars.map((p, i) => {
              const Icon = icons[i];
              const color = accentColors[i];
              return (
                <m.div
                  key={p.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 p-10 text-center glass-dark shadow-premium-dark transition-all duration-500 hover:-translate-y-2 hover:border-[#00C8D7]/30"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00C8D7]/10 to-transparent rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div
                    className="mx-auto flex size-16 items-center justify-center rounded-2xl mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner"
                    style={{
                      background: `linear-gradient(135deg, ${color}20, transparent)`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    <Icon className="size-6" style={{ color }} />
                  </div>
                  <h3 className="relative z-10 font-display text-2xl text-white mb-4">{p.title}</h3>
                  <p className="relative z-10 text-[0.95rem] leading-relaxed text-white/60 font-light">
                    {p.desc}
                  </p>
                </m.div>
              );
            })}
          </m.div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────── */}
      <section id="complimentary-pass" className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 1 }}
            className="group relative overflow-hidden rounded-[24px] shadow-soft"
          >
            <Image
              src="/shared image.jpg"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E]/90 via-[#0A0F1E]/60 to-[#0A0F1E]/30" />
            <div className="absolute top-1/2 left-1/4 w-96 h-96 -translate-y-1/2 rounded-full bg-[#00C8D7]/20 blur-[100px] pointer-events-none mix-blend-screen" />

            <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center min-h-[400px]">
              <p className="eyebrow text-[#00C8D7] mb-6 tracking-[0.4em] drop-shadow-md">
                Begin Your Transformation
              </p>
              <h2 className="font-display text-5xl md:text-7xl text-white mb-6 drop-shadow-lg">
                Claim Your Complimentary Pass
              </h2>

              <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-8 leading-relaxed">
                Join our Applecross community with an exclusive complimentary pass. Experience our
                premium self-guided Digital Reformer Pilates or restorative Infrared Sauna sessions
                and start your transformation on us today.
              </p>

              {/* Highlight Offer Badge */}
              <div className="mb-10">
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                  <span className="text-xl">✨</span>
                  <span className="text-white font-medium text-sm">
                    Claim Your Free Studio Pass Today
                  </span>
                </div>
              </div>

              {/* Buttons Container */}
              <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 w-full">
                {/* Button 1: Call Studio Team (Direct call) */}
                <a
                  href={TRAINER_PHONE_TEL}
                  className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-[#00C8D7] px-12 py-5 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#0A0F1E] shadow-[0_10px_30px_rgba(0,200,215,0.4)] transition-all duration-500 hover:scale-[1.03]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Phone className="size-4 transition-transform group-hover:scale-110" />
                    Call Studio Team
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>

                {/* Button 2: WhatsApp */}
                <a
                  href="https://wa.me/61478336630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full border border-[#00C8D7] bg-transparent px-12 py-5 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#00C8D7] shadow-[0_10px_30px_rgba(0,200,215,0.1)] transition-all duration-500 hover:bg-[#00C8D7] hover:text-[#0A0F1E] hover:scale-[1.03]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                    WhatsApp Our Team
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>

                {/* Button 3: Fill Form */}
                <a
                  href="#complimentary-pass-form"
                  className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full border border-white bg-transparent px-12 py-5 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all duration-500 hover:bg-white hover:text-[#0A0F1E] hover:scale-[1.03]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <FileText className="size-4 transition-transform group-hover:scale-110" />
                    Claim via Form
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>

                
              </div>
            </div>
          </m.div>
        </div>
      </section>
      {/* ── Enquiry Form Section ─────────────────── */}
      <section className="relative bg-[#F5FAFB] py-24 border-t border-[#00C8D7]/10" id="complimentary-pass-form">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-[#0A0F1E] mb-4">
              Claim Your Complimentary Pass
            </h2>
            <p className="text-[#5B6B70] text-lg font-light max-w-2xl mx-auto">
              Ready to experience N24 Pilates? Complete the form below and our team will help you take the next step.
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-[28px] border border-[#00C8D7]/15 shadow-soft">
            <ContactForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
