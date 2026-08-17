"use client";

import { motion } from "framer-motion";
import { MapPin, MessageCircle, Mail } from "lucide-react";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};
const stagger: Variants = { visible: { transition: { staggerChildren: 0.15 } } };

export function ContactSection() {
  return (
    <section className="bg-white pt-20 pb-0 overflow-hidden relative border-t border-[#00C8D7]/10">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center mb-12">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          variants={fadeUp}
          className="eyebrow text-[#00C8D7] mb-6 tracking-[0.3em]"
        >
          Applecross · Perth
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          variants={fadeUp}
          className="font-display text-5xl md:text-6xl text-[#0A0F1E] mb-8"
        >
          Come find your <em className="text-[#00C8D7] font-light">sanctuary</em>
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          variants={fadeUp}
          className="text-[1.1rem] text-[#5B6B70] font-light mb-14 flex items-center justify-center gap-3"
        >
          <MapPin className="size-5 text-[#00C8D7]" />
          Unit G3/3 Kintail Rd, Applecross WA 6153
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          variants={stagger}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
        >
          <motion.a
            variants={fadeUp}
            href="https://wa.me/61000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full bg-[#00C8D7] px-10 py-5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_30px_rgba(0,200,215,0.4)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#00b5c4]"
          >
            <MessageCircle className="size-5" />
            WhatsApp Our Team
          </motion.a>
          <motion.a
            variants={fadeUp}
            href="mailto:hello@n24pilates.com"
            className="group flex items-center gap-3 rounded-full border border-[#00C8D7]/30 bg-white px-10 py-5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#0A0F1E] transition-all duration-300 hover:border-[#00C8D7] hover:bg-[#F1FAFB] shadow-premium"
          >
            <Mail className="size-5 text-[#00C8D7]" />
            Email Studio Team
          </motion.a>
        </motion.div>
      </div>

      {/* Map - Premium look with grayscale and slight opacity */}
      <div className="w-full h-[500px] relative bg-[#0A0F1E]">
        <iframe
          title="N24 Pilates Studio Location"
          src="https://maps.google.com/maps?q=N24%20Pilates%20%26%20Wellness%20Studio%20Unit%20G3%2F3%20Kintail%20Rd%20Perth&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="absolute inset-0 w-full h-full opacity-90 mix-blend-luminosity"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 bg-[#00C8D7]/5 pointer-events-none mix-blend-color" />
      </div>
    </section>
  );
}
