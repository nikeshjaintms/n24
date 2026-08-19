"use client";

import { m } from "framer-motion";
import { Laptop, Flame, Clock, Users } from "lucide-react";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};
const stagger: Variants = { visible: { transition: { staggerChildren: 0.15 } } };

export function FeaturesSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00C8D7]/20 to-transparent" />
      {/* Ambient background glows for glassmorphism (Optimized) */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,200,215,0.04)_0%,transparent_60%)] pointer-events-none -translate-x-1/2 -translate-y-1/2 translate-z-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,175,194,0.05)_0%,transparent_60%)] pointer-events-none translate-x-1/3 translate-y-1/3 translate-z-0" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          variants={stagger}
          className="text-center mb-16"
        >
          <m.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-4 tracking-[0.3em]">
            The N24 Standard
          </m.p>
          <m.h2
            variants={fadeUp}
            className="font-display text-[2rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl text-[#0A0F1E] mb-4"
          >
            A modern approach to <em className="text-[#00C8D7]">holistic wellness</em>
          </m.h2>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          variants={stagger}
          className="grid gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {[
            {
              title: "Digital Reformer System",
              desc: 'Classes are self-guided using interactive touchscreen displays attached to Premium "Your Reformer" beds. Members can select from a library of over 800 instructor-led programs ranging from 15 to 50 minutes, spanning beginner fundamentals, HIIT hybrids, mat Pilates, and physio-focused clinical routines.',
              icon: Laptop,
            },
            {
              title: "Infrared Sauna Recovery",
              desc: "Features on-site infrared sauna facilities, allowing members to combine core strength workouts with post-session detoxification, muscle recovery, and relaxation.",
              icon: Flame,
            },
            {
              title: "Extended Operating Hours",
              desc: "Open 7 days a week from 5:00 AM to 10:00 PM, catering to flexible schedules outside traditional group timetable hours.",
              icon: Clock,
            },
            {
              title: "On-Site Support & Staffing",
              desc: "While sessions can be done independently, staff are available during set morning and afternoon hours (Monday through Saturday) to provide orientations, assist with equipment settings, and offer hands-on form correction.",
              icon: Users,
            },
          ].map((feature) => (
            <m.div
              key={feature.title}
              variants={fadeUp}
              className="group relative rounded-[32px] bg-white/70 backdrop-blur-xl border border-white/80 p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,200,215,0.12)] hover:-translate-y-3 hover:border-[#00C8D7]/30 overflow-hidden flex flex-col h-full translate-z-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-5 mb-6">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00C8D7]/20 to-[#00C8D7]/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                    <feature.icon className="size-6 text-[#00C8D7]" />
                  </div>
                  <h3 className="font-display text-[1.35rem] sm:text-2xl text-[#0A0F1E] flex-1">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[1rem] leading-relaxed text-[#5B6B70] font-light flex-1">
                  {feature.desc}
                </p>
              </div>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-[#00C8D7]/20 to-transparent group-hover:from-[#00C8D7] transition-all duration-500" />
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
