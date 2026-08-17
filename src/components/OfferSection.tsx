"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PricingModal } from "./PricingModal";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};
const stagger: Variants = { visible: { transition: { staggerChildren: 0.15 } } };

export function OfferSection() {
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  const offerPlan = {
    name: "4 Intro Classes for $40",
    price: "$40",
    unit: "",
    description: "New Client Exclusive Offer",
    features: ["4 Intro Sessions"],
    iframeUrl: "https://n24pilatesstudio.gymmasteronline.com/portal/signup/details/9470d85507491296a31c643e990c513d"
  };

  return (
    <>
      <section className="relative py-24 overflow-hidden bg-[#0A0F1E]">
        <div className="absolute inset-0">
          <Image
            src="/2.png"
            alt="Special Offer"
            fill
            className="object-cover opacity-20 filter grayscale-[50%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-[#0A0F1E] opacity-90" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00C8D7]/10 blur-[150px] pointer-events-none mix-blend-screen translate-z-0" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          variants={stagger}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-6 tracking-[0.4em]">
            Exclusive Introductory Offer
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[5rem] md:text-[7rem] leading-[0.9] text-white mb-4"
          >
            4 Intro Classes <span className="text-[#00C8D7] italic">for $40</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[1.1rem] text-white/70 font-light max-w-xl mx-auto mb-14 leading-relaxed"
          >
            Experience Australia&apos;s premier self-guided Digital Reformer studio in Applecross.
            Enjoy 2 digital reformer classes and 2 infrared sauna sessions (30 mins) over 15 days.
            Available to new clients. Special discount available when you sign up for a membership
            during the intro offer period.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button
              onClick={() => setIsOfferModalOpen(true)}
              className="group relative overflow-hidden rounded-full bg-[#00C8D7] px-12 py-5 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#0A0F1E] shadow-[0_0_40px_rgba(0,200,215,0.4)] transition-all duration-500 hover:scale-[1.02] inline-block"
            >
              <span className="relative z-10 flex items-center gap-3">
                Claim Introductory Offer
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00C8D7] via-white to-[#00C8D7] opacity-0 group-hover:opacity-50 transition-opacity duration-500 mix-blend-overlay" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      <PricingModal
        isOpen={isOfferModalOpen}
        onClose={() => setIsOfferModalOpen(false)}
        plan={offerPlan}
      />
    </>
  );
}
