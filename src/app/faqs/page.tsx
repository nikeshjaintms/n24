"use client";

import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { TypewriterText } from "@/components/TypewriterText";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const faqs = [
  {
    q: "What support and guidance will I receive?",
    a: "Don't worry about getting lost—we've got you covered. Our on-site studio staff will always be there for immediate assistance during the staff hours 6 days a week. Every class is highly instructional and easy to follow. You will receive full on boarding guidance from our studio facilitator prior to your first booking. Plus, If you need any extra support navigating the platform or choosing the perfect class and program for your goal, fitness level, and preferences, our team is ready to help!",
  },
  {
    q: "How does the Digital Reformer Pilates system work?",
    a: 'The N24 Pilates & Wellness system is a self-guided experience powered by technology. You get to choose from a digital library of over 800 instructor-led workouts on our built-in touch screen. You then perform the session at your own speed on our beautiful "The Studio" reformers beds from Your reformer. For a completely customized experience, you can log in, create a personal account, save your favorite classes and participate in challenges. Feel free to bring your own Bluetooth wireless headphones, or you can use a spare set we provide.',
  },
  {
    q: "When can I come for a class?",
    a: "Our studio is operating from 5am till 10pm. Your first orientation session needs to be booked during the staff hours. But after your first session you can come for a class anytime that works best for you from 5am to 10pm with prior booking. Booking is essential to make sure that your reformer bed is available for you when you arrive for your class.",
  },
  {
    q: "What are the staff hours?",
    a: "Our staff hours are Monday - Thursday: 7am to 11am and 4pm to 7pm, Friday: 7am to 11am, Saturday: 8am to 11am. If you need any assistance outside these hours, please reach out to us on 0478 336 630",
  },
  {
    q: "How is the equipment cleaned & maintained?",
    a: "Cleanliness is a joint effort in our studio. The studio is professionally cleaned regularly, with all equipment and surfaces being sanitized. In addition, we provide sanitizing wipes for easy use. We strongly encourage all members to use these wipes to clean the Reformer after their session, which helps us maintain a healthy space and keeps our high-quality equipment in excellent working order.",
  },
  {
    q: "What happens if I am running late to my booking time?",
    a: "Running late isn't a problem since your workout is self-guided. Because our system is self-guided, your class starts when you do! While we appreciate you arriving on time, if you're a few minutes late, simply start your chosen digital workout as soon as you arrive. Just remember that your session must still finish by the end of your reserved time slot to allow the next member to start on time. Alternatively, you can also choose to extend your class time via online booking system depending on the availability.",
  },
  {
    q: "Can I pause my membership?",
    a: "Absolutely. We offer flexible options to put your membership on hold. You can suspend your membership when life requires a break: If you're traveling or need time off for medical reasons, you can pause it for up to 4 weeks annually. For pregnancy or postpartum recovery, we offer extended freezes of up to 6 months.",
  },
  {
    q: "How long are the self guided sessions?",
    a: "Whether you have time for a 15-minute express class or a full 50-minute session or anything in between, we have all different workout length to fit your schedule.",
  },
  {
    q: "What if I'm new to exercise/reformers?",
    a: "No experience is necessary! We specifically design our studio to be welcoming and supportive for people who are new to Pilates or exercise. Your journey begins with an introductory orientation led by a studio facilitator, who will carefully assess your needs. This assessment allows us to ensure you are guided through all techniques and equipment usage at a comfortable pace without any pressure or judgment.",
  },
  {
    q: "What other programs are available along with reformers classes?",
    a: "Our Digital library offers over 800 expert-designed programs, which includes 20 different categories to choose from like Reformer Flow, Mat Pilates, Yoga, Health care professional classes, Athletic, HIIT Hybrid, Stretch Series, Prenatal, Postnatal, Active Ageing Series, Gym series for men, Abs & Glutes series, Define your arms series, programs on women's Health and much more....",
  },
  {
    q: "What safety measures are in place at the studio?",
    a: "Your safety is ensured through our secure, controlled entry system. Our studio uses access controlled door system, which provides a safe environment by strictly controlling who enters the studio. Access is exclusive to registered members, who use their personal mobile phone to gain entry. This process ensures only authorized individuals are ever inside. Moreover, duress/panic buttons are located inside the studio in case of any emergencies.",
  },
  {
    q: "How do I book a reformer session or infrared sauna?",
    a: "Our member portal and booking app allow you to reserve your preferred reformer console or private infrared sauna suite in seconds. With our extended 5:00 AM to 10:00 PM schedule, you have total freedom to book sessions that fit your daily routine.",
  },
  {
    q: "How does infrared heat therapy complement Pilates?",
    a: "Unlike traditional rock saunas that heat the ambient air, our private infrared saunas use therapeutic infrared light to warm your tissues directly. This accelerates post-workout muscle recovery, flushes cellular toxins, reduces inflammation, and leaves you deeply relaxed.",
  },
  {
    q: "What should I wear inside the infrared sauna suite?",
    a: "We recommend wearing swimwear or clean undergarments during your sauna session. We provide plush towels for sitting, and our suites are private rooms so you can recover in total comfort or share the session with a friend.",
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
    <m.div
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
          <m.div
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
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
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
          <div className="flex flex-col gap-3">
            {faqs.map((item, index) => {
              const id = `faq-${index}`;
              return (
                <AccordionItem
                  key={id}
                  q={item.q}
                  a={item.a}
                  index={index}
                  isOpen={openId === id}
                  onToggle={() => setOpenId(openId === id ? null : id)}
                />
              );
            })}
          </div>

          {/* Bottom CTA */}
          <m.div
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
          </m.div>
        </div>
      </section>
    </SiteLayout>
  );
}
