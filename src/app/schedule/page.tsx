"use client";

import { SiteLayout, PageHero } from "@/components/SiteLayout";
import Link from "next/link";
import { schedule } from "@/data/studio";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const dayColors = ["#00C8D7", "#7EE8FA", "#00AFC2", "#00C8D7", "#7EE8FA", "#00C8D7"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export default function Schedule() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Digital Studio Hours"
        title="Open 5:00 AM"
        accent="to 10:00 PM."
        subtitle="No rigid timetables, no waitlists, and zero booking friction. Access 800+ on-demand reformer masterclasses on your individual touchscreen 7 days a week, 365 days a year."
      />

      <section className="py-32" style={{ background: "#0F172A" }}>
        {/* Glow */}
        <div className="pointer-events-none absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#00C8D7]/6 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          >
            <div>
              <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-3">
                Concierge Staff Hours
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-4xl md:text-5xl text-white leading-tight"
              >
                Weekly <em className="text-[#00C8D7]">availability</em>
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="text-white/50 text-sm max-w-xs font-light">
              Our studio is accessible from 5:00 AM to 10:00 PM daily. Below are our staffed
              concierge hours for personalized assistance and tours.
            </motion.p>
          </motion.div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {schedule.map((day, di) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: di * 0.08 }}
                className="rounded-[28px] border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(16px)" }}
              >
                <div>
                  {/* Day header */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                    <h3 className="font-display text-2xl text-white">{day.day}</h3>
                    <div
                      className="size-3 rounded-full"
                      style={{ background: dayColors[di % dayColors.length] }}
                    />
                  </div>

                  {/* Sessions */}
                  <ul className="space-y-4">
                    {day.sessions.map(([time, name, instructor], si) => (
                      <li
                        key={si}
                        className="flex items-center justify-between text-[0.875rem] py-2.5 border-b border-white/5 last:border-none"
                      >
                        <span className="font-medium text-white/90">{name}</span>
                        <span className="text-white/40 font-light text-xs">
                          {time} · {instructor}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 rounded-[28px] border border-white/10 p-10 text-center relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(16px)" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#00C8D7]/5 via-transparent to-[#7EE8FA]/5" />
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4 relative z-10">
              Ready to move at your own tempo?
            </h2>
            <p className="text-white/50 font-light mb-8 max-w-md mx-auto relative z-10">
              No rigid schedules, no class anxiety. Enjoy self-guided Digital Reformer Pilates and
              Private Infrared Saunas whenever your lifestyle demands.
            </p>
            <div className="relative z-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-[#00C8D7] px-8 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white shadow-[0_6px_24px_rgba(0,200,215,0.4)] transition-all duration-300 hover:bg-[#00b5c4] hover:scale-[1.03]"
              >
                View Pricing <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white/35 hover:bg-white/5"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
