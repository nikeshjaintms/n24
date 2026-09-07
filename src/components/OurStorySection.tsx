"use client";

import { m } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export function OurStorySection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden text-center px-6 lg:px-8">
      <div className="max-w-[800px] mx-auto">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-10 bg-[#333]/30"></span>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#333]">
              ABOUT N24
            </span>
            <span className="h-px w-10 bg-[#333]/30"></span>
          </div>

          <m.h2
            variants={fadeUp}
            className="font-display text-[2.5rem] lg:text-[3.5rem] leading-[1.1] text-[#111] mb-12 tracking-tight"
          >
            Our Story.
          </m.h2>

          <m.div variants={fadeUp}>
            <p className="text-[#333] leading-relaxed text-[1.1rem]">
              Our studio was born from a desire to create a wellness space that truly puts people first. After years of witnessing the drawbacks of traditional fitness environments where the focus is often on crowded classes and one-size-fits-all routines, we knew there had to be a better way. We envisioned a place where the journey to health is personal, supportive, and focused on genuine mind-body connection.
            </p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
