"use client";

import { SiteLayout } from "@/components/SiteLayout";
import { m } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";
import heroImg from "../../../public/pilates_hero_mobile.png";
import heroBgImage from "../../../public/8471b7a6-5ce5-4086-8774-61f1cc480f92.png";
import { CheckCircle2, Sun, Users, Flower2, Phone, Mail, MapPin } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function InquiryPage() {
  return (
    <>
      <SiteLayout hideNavbar={true} hideFooter={true}>
        <div className="bg-[#F8F7F3] font-sans text-[#0F172A] overflow-hidden pb-10">

          {/* New Cinematic Hero Section */}
          <section className="relative w-full h-[75vh] lg:h-[85vh] min-h-[600px] flex items-center justify-center pt-20">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src={heroImg}
                alt="Pilates session"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Cinematic dark overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto">
              <m.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-display text-[3.5rem] sm:text-[4.5rem] lg:text-[6rem] leading-[1.05] tracking-tight text-white drop-shadow-lg"
              >
                <span className="block">Your space.</span>
                <span className="block">Your pace.</span>
                <span className="block mt-2">Only <span className="font-sans font-light">@N24 Pilates.</span></span>
              </m.h1>
            </div>
          </section>

          {/* Trial Offer & Form Section */}
          <section className="relative w-full py-20 lg:py-28 bg-[#F8F7F3]">
            <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-10">

              {/* Left Side: Trial Text */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center text-center lg:text-left">
                <m.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={stagger}
                  className="max-w-md mx-auto lg:mx-0"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                    <span className="h-px w-10 bg-[#333]/30"></span>
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#333]">
                      COMPLIMENTARY PASS
                    </span>
                    <span className="h-px w-10 bg-[#333]/30"></span>
                  </div>

                  <m.h2
                    variants={fadeUp}
                    className="font-display text-[3.25rem] lg:text-[4rem] leading-[1.05] tracking-tight text-[#111] mb-6"
                  >
                    Claim Your<br />Complimentary Pass.
                  </m.h2>

                  <m.p
                    variants={fadeUp}
                    className="text-[1.1rem] lg:text-[1.15rem] leading-relaxed text-[#555] font-light mb-10"
                  >
                    New to N24 Pilates? Discover our approach to movement with your first class complimentary.
                  </m.p>

                  <m.div variants={fadeUp} className="space-y-4 flex flex-col items-center lg:items-start text-left">
                    <div className="flex items-center gap-4 w-full max-w-[280px]">
                      <div className="flex-shrink-0 size-6 rounded-full bg-[#0E2024] text-white flex items-center justify-center">
                        <CheckCircle2 className="size-4" strokeWidth={3} />
                      </div>
                      <span className="text-[1.05rem] text-[#222]">1 complimentary class</span>
                    </div>
                    <div className="flex items-center gap-4 w-full max-w-[280px]">
                      <div className="flex-shrink-0 size-6 rounded-full bg-[#0E2024] text-white flex items-center justify-center">
                        <CheckCircle2 className="size-4" strokeWidth={3} />
                      </div>
                      <span className="text-[1.05rem] text-[#222]">No membership commitment</span>
                    </div>
                    <div className="flex items-center gap-4 w-full max-w-[280px]">
                      <div className="flex-shrink-0 size-6 rounded-full bg-[#0E2024] text-white flex items-center justify-center">
                        <CheckCircle2 className="size-4" strokeWidth={3} />
                      </div>
                      <span className="text-[1.05rem] text-[#222]">Guided studio introduction</span>
                    </div>
                  </m.div>

                </m.div>
              </div>

              {/* Right Side: Form Card */}
              <div className="w-full lg:w-[50%] flex justify-center items-center">
                <div className="w-full max-w-[420px] bg-white rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-7 sm:p-9 border border-[#111]/5">
                  <InquiryForm />
                </div>
              </div>

            </div>
          </section>

          {/* Community Section */}
          <section className="relative py-24 lg:py-32 px-6 lg:px-8 max-w-4xl mx-auto text-center">
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="h-px w-10 bg-[#333]/30"></span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#333]">
                  DISCOVER N24
                </span>
                <span className="h-px w-10 bg-[#333]/30"></span>
              </div>

              <m.h2
                variants={fadeUp}
                className="font-display text-[2.75rem] lg:text-[4rem] text-[#111] leading-[1.05] tracking-tight mb-12"
              >
                A new era of movement<br />and recovery.
              </m.h2>

              <m.div variants={fadeUp} className="space-y-6 text-[1rem] lg:text-[1.1rem] leading-relaxed text-[#555] font-light max-w-3xl mx-auto">
                <p>
                  Welcome to N24, Applecross&apos;s premier sanctuary for self-guided Digital Reformer Pilates and Infrared Sauna therapy. We created this space to offer a kinder, more empowering way to moveΓÇöwhere cutting-edge technology meets a warm, uncrowded environment.
                </p>
                <p>
                  Whether you&apos;re a beginner or an expert, you have the freedom to move at your own pace. Choose from over 800 expert-designed, on-demand programs including Reformer, Mat Pilates, Yoga, and HIIT. Our onsite instructors are here 6 days a week to guide you, ensuring every session is safe, effective, and tailored to your body.
                </p>
                <p>
                  We believe true wellness combines movement with recovery. After your class, restore your body and mind in our private infrared saunas. At N24, we&apos;re not just building strengthΓÇöwe&apos;re building a welcoming community where you truly belong, one class at a time.
                </p>
              </m.div>
            </m.div>
          </section>

          {/* Short Contact Section */}
          <section className="bg-white py-20 px-6 lg:px-8 border-t border-[#111]/10">
            <div className="max-w-[1100px] mx-auto">
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="text-center mb-12"
              >
                <h2 className="font-display text-[2.5rem] text-[#111] leading-[1.1] mb-4">
                  Get in Touch
                </h2>
                <p className="text-[#555] font-light max-w-lg mx-auto">
                  Have questions about your first class? We're here to help you start your journey.
                </p>
              </m.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <m.a
                  variants={fadeUp}
                  href="tel:0478336630"
                  className="group flex flex-col items-center p-8 rounded-2xl bg-[#F8F7F3] hover:bg-white border border-transparent hover:border-[#0E2024]/10 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="size-12 rounded-full bg-[#0E2024] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Phone className="size-5" />
                  </div>
                  <h3 className="font-sans font-medium text-[1.1rem] text-[#111] mb-2 uppercase tracking-widest text-[0.7rem]">Call Us</h3>
                  <p className="text-[1rem] text-[#555] font-light">0478 336 630</p>
                </m.a>

                <m.a
                  variants={fadeUp}
                  href="mailto:Info@n24pilatesstudio.com"
                  className="group flex flex-col items-center p-8 rounded-2xl bg-[#F8F7F3] hover:bg-white border border-transparent hover:border-[#0E2024]/10 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="size-12 rounded-full bg-[#0E2024] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Mail className="size-5" />
                  </div>
                  <h3 className="font-sans font-medium text-[1.1rem] text-[#111] mb-2 uppercase tracking-widest text-[0.7rem]">Email Us</h3>
                  <p className="text-[1rem] text-[#555] font-light">Info@n24pilatesstudio.com</p>
                </m.a>

                <m.a
                  variants={fadeUp}
                  href="https://maps.google.com/?q=N24+Pilates+Applecross"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-8 rounded-2xl bg-[#F8F7F3] hover:bg-white border border-transparent hover:border-[#0E2024]/10 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="size-12 rounded-full bg-[#0E2024] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="size-5" />
                  </div>
                  <h3 className="font-sans font-medium text-[1.1rem] text-[#111] mb-2 uppercase tracking-widest text-[0.7rem]">Visit Us</h3>
                  <p className="text-[0.95rem] text-[#555] font-light text-center">Unit G3/3 Kintail Rd,<br />Applecross WA 6153</p>
                </m.a>
              </div>
            </div>
          </section>

        </div>
      </SiteLayout>
    </>
  );
}
