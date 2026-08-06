"use client";

import Link from "next/link";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { classes } from "@/data/studio";
import { Clock, Signal, ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function Classes() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Self-Guided Digital Classes"
        title="800+ On-Demand"
        accent="Masterclasses."
        subtitle="From gentle beginner rehabilitation to athletic core conditioning, access our complete library of technology-enhanced reformer sessions on your individual touchscreen."
      />

      {/* ── Class list — Premium editorial alternating layout ──────── */}
      <section className="bg-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00C8D7]/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00AFC2]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-32">
          {classes.map((c, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={c.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
                className={`flex flex-col items-center gap-12 lg:gap-24 ${
                  !isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Image with Parallax */}
                <motion.div
                  variants={fadeUp}
                  className="group relative w-full lg:w-1/2 aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-[28px] shadow-premium"
                >
                  {c.video ? (
                    <video
                      src={c.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 filter grayscale-[15%] group-hover:grayscale-0"
                    />
                  ) : (
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 filter grayscale-[15%] group-hover:grayscale-0"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

                  {/* Premium Number badge */}
                  <div className="absolute top-8 left-8 glass-dark rounded-[1.5rem] px-5 py-3 border border-white/20 shadow-premium-dark backdrop-blur-md">
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#00C8D7]">
                      0{i + 1}
                    </span>
                  </div>
                </motion.div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 lg:px-8">
                  <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
                    <div className="h-px w-12 bg-gradient-to-r from-[#00C8D7] to-transparent" />
                    <p className="eyebrow text-[#00C8D7] tracking-[0.3em]">Class 0{i + 1}</p>
                  </motion.div>

                  <motion.h2
                    variants={fadeUp}
                    className="font-display text-4xl md:text-6xl text-[#0A0F1E] leading-tight mb-8"
                  >
                    {c.name}
                  </motion.h2>

                  <motion.p
                    variants={fadeUp}
                    className="text-[1.05rem] leading-[1.8] text-[#5B6B70] font-light max-w-lg mb-10"
                  >
                    {c.long}
                  </motion.p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CTA Banner (Adapted for Classes) ─────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="group relative overflow-hidden rounded-[24px] shadow-soft"
          >
            <Image
              src="/shared image.jpg"
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E]/90 via-[#0A0F1E]/60 to-[#0A0F1E]/30" />
            <div className="absolute top-1/2 left-1/4 w-96 h-96 -translate-y-1/2 rounded-full bg-[#00C8D7]/20 blur-[100px] pointer-events-none mix-blend-screen" />

            <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center min-h-[400px]">
              <p className="eyebrow text-[#00C8D7] mb-6 tracking-[0.4em] drop-shadow-md">
                Beginner Reassurance
              </p>
              <h2 className="font-display text-5xl md:text-7xl text-white mb-6 drop-shadow-lg">
                Claim Your Complimentary Pass
              </h2>

              <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-8 leading-relaxed">
                Never used a reformer before? Our digital format is designed to be completely welcoming and unintimidating. Claim your complimentary pass to experience a guided studio tour and your first session on us.
              </p>

              {/* Highlight Offer Badge */}
              <div className="mb-10">
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                  <span className="text-xl">✨</span>
                  <span className="text-white font-medium text-sm">
                    Try Your First Session Free
                  </span>
                </div>
              </div>

              {/* Buttons Container */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                {/* Button 1: Call Studio Team (Direct call) */}
                <a
                  href="tel:0478336630"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
