"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { pillars } from "@/data/studio";

export function CommunitySection() {
  return (
    <section className="bg-[#040812] py-0 overflow-hidden border-y border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#071321] via-[#040812] to-[#0A1324] z-0 pointer-events-none" />

      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px", amount: 0.1 }}
        transition={{ duration: 1 }}
        className="flex flex-col lg:flex-row"
      >
        <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-[700px] overflow-hidden group z-10">
          <m.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/n241.png"
              alt="N24 Community"
              fill
              className="object-cover opacity-90 contrast-125 saturate-50 transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </m.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#040812] via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#040812] opacity-0 lg:opacity-90" />
        </div>

        <div className="lg:w-1/2 relative flex flex-col justify-center p-8 sm:p-12 lg:p-24 z-10">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00C8D7]/15 to-transparent blur-[120px] pointer-events-none mix-blend-screen translate-z-0" />

          <div className="relative z-10">
            <p className="eyebrow text-[#00C8D7] mb-6 tracking-[0.2em] uppercase">
              N24 is Designed for Your Lifestyle
            </p>
            <h2 className="font-display text-[2rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 sm:mb-8">
              A Practice That <em className="text-[#00C8D7] font-light">Moves With You</em>
            </h2>
            <p className="text-[1.1rem] leading-relaxed text-[#A0B0B5] font-light max-w-lg mb-12">
              Whether you are a busy professional craving a 6:00 AM workout, a parent needing midday
              stress relief, an athlete seeking core conditioning, or a beginner looking for
              low-impact rehabilitation—N24 Pilates adapts seamlessly to your lifestyle.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {pillars.map((p) => (
                <span
                  key={p.title}
                  className="rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10 hover:border-[#00C8D7]/50"
                >
                  {p.title}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 rounded-full bg-[#00C8D7]/10 border border-[#00C8D7]/30 px-10 py-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#00C8D7] transition-all duration-300 hover:bg-[#00C8D7] hover:text-white"
            >
              Discover Our Story
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </m.div>
    </section>
  );
}
