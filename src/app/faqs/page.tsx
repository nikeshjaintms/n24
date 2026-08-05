"use client";

import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { TypewriterText } from "@/components/TypewriterText";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const faqs = [
  {
    category: "Digital Reformer Pilates",
    items: [
      {
        q: "What is self-guided Digital Reformer Pilates?",
        a: "Digital Reformer Pilates combines professional studio reformers with high-definition, interactive touchscreens at every carriage. Instead of following a crowded class at a single pace, you select from 800+ masterclasses and follow step-by-step visual and audio guidance at your own individual tempo.",
      },
      {
        q: "Will I be left alone, or is there support if I need help?",
        a: "You are never left without guidance! Every session features crystal-clear visual demonstrations, audio cues, and intuitive equipment setup guides. Plus, during staffed hours, our friendly studio concierges and master trainers are on hand to assist with equipment adjustments, form tips, and recommendations.",
      },
      {
        q: "Is Digital Pilates safe and suitable for complete beginners?",
        a: "Absolutely. In fact, many beginners find our digital format far less intimidating than traditional group classes. You can pause, rewind, or choose gentle Foundation sessions that introduce you to carriage resistance, footbar settings, and breathing mechanics without class pressure.",
      },
    ],
  },
  {
    category: "Membership, Bookings & Access",
    items: [
      {
        q: "How do I book a reformer session or infrared sauna?",
        a: "Our member portal and booking app allow you to reserve your preferred reformer console or private infrared sauna suite in seconds. With our extended 5:00 AM to 10:00 PM schedule, you have total freedom to book sessions that fit your daily routine.",
      },
      {
        q: "What is your cancellation and rescheduling policy?",
        a: "To ensure all members enjoy seamless access to our boutique sanctuary, we require a 12-hour notice for cancellations or rescheduling. This allows fellow members to claim open reformer consoles or sauna suites.",
      },
      {
        q: "What should I wear and bring to my session?",
        a: "We recommend comfortable, form-fitting activewear so you can move freely. For hygiene and carriage grip, Pilates grip socks are mandatory on all reformers (available at our studio reception). Please also bring a water bottle and a small sweat towel.",
      },
    ],
  },
  {
    category: "Private Infrared Saunas",
    items: [
      {
        q: "How does infrared heat therapy complement Pilates?",
        a: "Unlike traditional rock saunas that heat the ambient air, our private infrared saunas use therapeutic infrared light to warm your tissues directly. This accelerates post-workout muscle recovery, flushes cellular toxins, reduces inflammation, and leaves you deeply relaxed.",
      },
      {
        q: "What should I wear inside the infrared sauna suite?",
        a: "We recommend wearing swimwear or clean undergarments during your sauna session. We provide plush towels for sitting, and our suites are private 2-capacity rooms so you can recover in total comfort or share the session with a friend.",
      },
    ],
  },
];

const answerVariants: Variants = {
  collapsed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1, transition: { duration: 0.38, ease: "easeOut" } },
};

function AccordionItem({
  q,
  a,
  index,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`rounded-[1.25rem] border overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-[#00C8D7]/40 shadow-[0_4px_24px_rgba(0,200,215,0.12)]"
          : "border-[#E2EDF2] hover:border-[#00C8D7]/30 hover:shadow-[0_4px_16px_rgba(0,200,215,0.08)]"
      }`}
      style={{
        background: isOpen ? "rgba(0,200,215,0.04)" : "#FFFFFF",
      }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-7 py-6 text-left focus:outline-none"
      >
        <span
          className="font-display text-lg md:text-xl pr-4 transition-colors duration-200"
          style={{ color: isOpen ? "#00AFC2" : "#0C1A2E" }}
        >
          {q}
        </span>
        <div
          className="flex size-9 shrink-0 items-center justify-center rounded-full transition-all duration-300"
          style={{
            background: isOpen ? "#00C8D7" : "rgba(0,200,215,0.1)",
            border: `1px solid ${isOpen ? "#00C8D7" : "rgba(0,200,215,0.25)"}`,
          }}
        >
          <ChevronDown
            className="size-4 transition-transform duration-300"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              color: isOpen ? "white" : "#00AFC2",
            }}
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={answerVariants}
            className="overflow-hidden"
          >
            <p className="px-7 pb-7 text-[0.9rem] leading-[1.9] text-[#4A606A] font-light">
              <TypewriterText text={a} speed={25} />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faqs() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Clear answers for your"
        accent="wellness journey."
        subtitle="Everything you need to know about Australia's premier self-guided Digital Reformer Pilates and Infrared Sauna studio in Applecross."
      />

      {/* Main FAQ content — clean white background */}
      <section className="bg-white py-24 relative">
        {/* Subtle top glow from the dark hero above */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00C8D7]/30 to-transparent" />

        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="flex flex-col gap-20">
            {faqs.map((cat, ci) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: ci * 0.1 }}
              >
                {/* Category label */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#00C8D7]/30 to-transparent" />
                  <span
                    className="rounded-full px-5 py-2 text-[0.65rem] font-bold uppercase tracking-[0.22em] border"
                    style={{
                      color: "#00AFC2",
                      borderColor: "rgba(0,200,215,0.3)",
                      background: "rgba(0,200,215,0.08)",
                    }}
                  >
                    {cat.category}
                  </span>
                  <div className="h-px w-10 bg-[#00C8D7]/30" />
                </div>

                {/* Accordion items */}
                <div className="flex flex-col gap-3">
                  {cat.items.map((item, ii) => {
                    const id = `${ci}-${ii}`;
                    return (
                      <AccordionItem
                        key={id}
                        q={item.q}
                        a={item.a}
                        index={ii}
                        isOpen={openId === id}
                        onToggle={() => setOpenId(openId === id ? null : id)}
                      />
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 rounded-[28px] border border-[#00C8D7]/25 p-12 text-center"
            style={{
              background: "linear-gradient(135deg, #f0fbfd 0%, #ffffff 100%)",
              boxShadow: "0 12px 48px rgba(0,200,215,0.08)",
            }}
          >
            <MessageCircle className="size-12 text-[#00C8D7]/50 mx-auto mb-5" />
            <h3 className="font-display text-3xl text-[#0C1A2E] mb-3">
              Still have questions about N24?
            </h3>
            <p className="text-[#4A606A] text-sm font-light mb-8">
              Our Applecross studio concierge team is always here to guide you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#00C8D7] px-8 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white shadow-[0_4px_20px_rgba(0,200,215,0.4)] transition-all duration-300 hover:bg-[#00b5c4] hover:scale-[1.03]"
            >
              Contact Studio Concierge <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
