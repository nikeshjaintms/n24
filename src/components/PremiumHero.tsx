"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Variants, motion, MotionValue } from "framer-motion";
import { ArrowRight, Star, Users, User, Activity } from "lucide-react";

function StatColumn({
  icon: Icon,
  number,
  label,
  desc,
}: {
  icon: React.ElementType;
  number: string;
  label: string;
  desc?: string;
}) {
  const isWord = number.length > 4;
  return (
    <motion.div
      variants={cardItemVariants}
      className="group relative flex flex-col items-center sm:items-start w-full bg-slate-50/50 hover:bg-slate-50 transition-colors duration-300 border border-slate-100 rounded-2xl p-5 xl:p-6 justify-center h-full"
    >
      <div className="flex items-center gap-3 xl:gap-4 w-full justify-center sm:justify-start">
        {/* Icon */}
        <div className="flex size-[40px] xl:size-[48px] shrink-0 items-center justify-center rounded-full bg-[#F0FBFC] group-hover:bg-[#E6FAFB] shadow-[0_4px_20px_rgba(42,141,150,0.08)] transition-all duration-300 group-hover:scale-[1.05]">
          <Icon className="size-4 xl:size-5 text-[#2A8D96] stroke-[1.5]" />
        </div>

        {/* Text Container */}
        <div className="flex flex-col">
          {/* Number/Text */}
          <span className={`font-display font-medium text-[#111827] leading-[1] transition-transform duration-300 group-hover:-translate-y-[2px] ${isWord ? 'text-[24px] sm:text-[28px] xl:text-[32px]' : 'text-[32px] sm:text-[36px] xl:text-[40px]'}`}>
            {number}
          </span>
          {/* Label */}
          <div className="relative inline-flex mt-1">
            <span className="font-sans text-[9px] xl:text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B7280]">
              {label}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      {desc && (
        <p className="mt-4 text-[12px] xl:text-[13px] text-[#6B7280] font-sans font-normal text-center sm:text-left w-full leading-relaxed">
          {desc}
        </p>
      )}
    </motion.div>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function PremiumHero({
  heroY,
  heroOpacity,
  heroScale,
}: {
  heroY: MotionValue<string>;
  heroOpacity: MotionValue<number>;
  heroScale: MotionValue<number>;
}) {
  // Mouse parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeVideo, setActiveVideo] = useState<"intro" | "main">("intro");
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 10;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const switchToMain = () => {
    if (isTransitioningRef.current || activeVideo === "main") return;
    isTransitioningRef.current = true;
    const v2 = video2Ref.current;
    if (v2) {
      if (v2.currentTime < 50 || v2.currentTime >= 180) {
        v2.currentTime = 51;
      }
      v2.play().catch(() => { });
    }
    setActiveVideo("main");
    setTimeout(() => {
      isTransitioningRef.current = false;
      if (video1Ref.current) {
        video1Ref.current.pause();
      }
    }, 800);
  };

  const switchToIntro = () => {
    if (isTransitioningRef.current || activeVideo === "intro") return;
    isTransitioningRef.current = true;
    const v1 = video1Ref.current;
    if (v1) {
      v1.currentTime = 0;
      v1.play().catch(() => { });
    }
    setActiveVideo("intro");
    setTimeout(() => {
      isTransitioningRef.current = false;
      const v2 = video2Ref.current;
      if (v2) {
        v2.pause();
        v2.currentTime = 51;
      }
    }, 800);
  };

  return (
    <div className="w-full flex flex-col">
      {/* =======================
          HERO SECTION
          ======================= */}
      <section className="relative w-full min-h-screen flex flex-col justify-center bg-[#071321] overflow-hidden pt-[120px] lg:pt-[160px] pb-32 lg:pb-48">
        {/* CINEMATIC BACKGROUND */}
        <motion.div
          style={{
            scale: heroScale,
            x: mousePosition.x * -1,
            y: mousePosition.y * -1,
          }}
          className="absolute inset-0 z-0 overflow-hidden transition-transform duration-[2000ms] ease-out pointer-events-none"
        >
          <motion.div
            animate={{ x: ["-2%", "2%", "-2%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[105%] h-[105%] -left-[2.5%] -top-[2.5%] z-0"
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center filter contrast-[1.05] saturate-[1.1] z-0"
              style={{ backgroundImage: 'url("/2.png")' }}
            />

            {/* Intro Video (part.1.mp4) */}
            <video
              ref={video1Ref}
              src="/videos/part.1.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={switchToMain}
              onError={switchToMain}
              className={`absolute inset-0 w-full h-full object-cover filter contrast-[1.05] saturate-[1.1] transition-opacity duration-700 ease-in-out z-10
                object-[50%_45%] scale-[1.15] 
                sm:object-[55%_50%] sm:scale-[1.12] 
                md:object-[60%_50%] md:scale-[1.10] 
                lg:object-[65%_50%] lg:scale-[1.08] 
                xl:object-[65%_48%] xl:scale-[1.06] ${activeVideo === "intro" ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            />

            {/* Main Video (N24 03.mp4) */}
            <video
              ref={video2Ref}
              src="/videos/N24%2003.mp4#t=51"
              muted
              playsInline
              preload="auto"
              onLoadedMetadata={(e) => {
                if (e.currentTarget.currentTime < 51) {
                  e.currentTarget.currentTime = 51;
                }
              }}
              onTimeUpdate={(e) => {
                const video = e.currentTarget;
                if (video.currentTime >= 180) {
                  switchToIntro();
                } else if (video.currentTime < 50 && video.currentTime > 1 && activeVideo === "main") {
                  video.currentTime = 51;
                }
              }}
              onError={switchToIntro}
              className={`absolute inset-0 w-full h-full object-cover filter contrast-[1.05] saturate-[1.1] transition-opacity duration-700 ease-in-out z-20
                object-[50%_45%] scale-[1.15] 
                sm:object-[55%_50%] sm:scale-[1.12] 
                md:object-[60%_50%] md:scale-[1.10] 
                lg:object-[65%_50%] lg:scale-[1.08] 
                xl:object-[65%_48%] xl:scale-[1.06] ${activeVideo === "main" ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            />
          </motion.div>
          {/* Subtle premium gradient overlay (30-50%) for readability while preserving rich video colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071321]/50 via-[#071321]/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/35 via-transparent to-[#071321]/15" />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* Floating Orbs / Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#16D9F5]/10 rounded-full blur-[120px] pointer-events-none z-0"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-[#0082c8]/10 rounded-full blur-[140px] pointer-events-none z-0"
        />

        {/* Noise Texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay z-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* =======================
            CONTENT OVERLAY
            ======================= */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center lg:items-start justify-center h-full"
        >
          {/* TYPOGRAPHY */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="w-full flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8 lg:mb-12">
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#16D9F5] to-transparent rounded-full hidden lg:block" />
              <div className="h-[2px] w-12 bg-gradient-to-l from-[#16D9F5] to-transparent rounded-full lg:hidden" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#16D9F5] drop-shadow-[0_0_8px_rgba(22,217,245,0.4)]">
                Applecross · Perth
              </span>
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#16D9F5] to-transparent rounded-full lg:hidden" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-[4.5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem] leading-[0.9] text-white tracking-tight mb-8 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
            >
              Move{" "}
              <span className="italic relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-[#16D9F5] to-[#7EE8FA] bg-clip-text text-transparent blur-[20px] opacity-40 animate-pulse-slow">
                  Better.
                </span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#16D9F5] via-[#7EE8FA] to-[#16D9F5] bg-[length:200%_auto] animate-shimmer">
                  Better.
                </span>
              </span>
              <br />
              Live{" "}
              <span className="italic relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-[#16D9F5] to-[#7EE8FA] bg-clip-text text-transparent blur-[20px] opacity-40 animate-pulse-slow delay-150">
                  Lighter.
                </span>
                <span
                  className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#16D9F5] via-[#7EE8FA] to-[#16D9F5] bg-[length:200%_auto] animate-shimmer"
                  style={{ animationDelay: "1s" }}
                >
                  Lighter.
                </span>
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={fadeUp}
              className="text-[1.1rem] sm:text-[1.25rem] leading-relaxed text-white font-light max-w-xl mb-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              Perth&apos;s premier boutique Pilates studio. Reformer classes, infrared saunas, and
              expert coaching — designed to transform you.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              <Link
                href="/schedule"
                className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#16D9F5] to-[#0cb8d2] px-10 py-5 text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[#071321] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-5px_rgba(22,217,245,0.4)] w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Class
                  <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>

              <Link
                href="/pricing"
                className="group flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-10 py-5 text-[0.85rem] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:-translate-y-1.5 hover:border-white/50 hover:bg-white/10 hover:shadow-[0_15px_35px_-5px_rgba(255,255,255,0.1)] backdrop-blur-md w-full sm:w-auto"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* =======================
          STUDIO ACHIEVEMENTS SECTION
          ======================= */}
      <section className="relative w-full bg-[#F8FAFC] z-20 pb-20 lg:pb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardVariants}
          className="relative mx-auto w-full px-4 lg:px-8 xl:px-12 max-w-[1440px] mt-0 md:-mt-[60px] lg:-mt-[100px]"
        >
          {/* Subtle blue glow around outer edges */}
          <div className="absolute inset-0 bg-[#16D9F5]/5 blur-[80px] rounded-[40px] scale-[1.02] -z-10" />

          {/* Container */}
          <div className="relative bg-white border border-slate-100 rounded-[32px] md:rounded-[40px] shadow-[0_20px_80px_-15px_rgba(0,0,0,0.05)] py-12 px-6 sm:px-8 lg:py-12 lg:px-10 xl:py-16 xl:px-14 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 xl:gap-10">
            {/* Column 1 (Content) */}
            <div className="w-full lg:flex-[0.85] lg:max-w-[340px] xl:max-w-[380px] text-center sm:text-left shrink-0 flex flex-col">
              <motion.span
                variants={cardItemVariants}
                className="block text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-[#9CA3AF] mb-3 lg:mb-4"
              >
                Studio Achievements
              </motion.span>
              <motion.h2
                variants={cardItemVariants}
                className="font-display text-[32px] sm:text-[36px] xl:text-[42px] font-medium text-[#111827] leading-[1.15] mb-4"
              >
                Not just a workout. <br className="hidden sm:block" />A way of{" "}
                <span className="text-[#13B5C8]">life.</span>
              </motion.h2>
              <motion.p
                variants={cardItemVariants}
                className="text-[13px] xl:text-[14px] text-[#6B7280] font-sans leading-relaxed max-w-[400px] mx-auto sm:mx-0"
              >
                Discover a premium Pilates experience designed to build strength, improve mobility,
                and create lasting wellness for every stage of your fitness journey.
              </motion.p>
            </div>

            {/* Divider */}
            <motion.div
              variants={cardItemVariants}
              className="hidden lg:block w-px h-[160px] xl:h-[200px] bg-slate-100 shrink-0"
            />

            {/* Stats Grid */}
            <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              <StatColumn
                icon={Star}
                number="5.0"
                label="Google Rating"
                desc="Rated by our happy members."
              />
              <StatColumn
                icon={User}
                number="Sessions"
                label="PRIVATE"
              />
              <StatColumn
                icon={Users}
                number="Classes"
                label="SMALL GROUP"
              />
              <StatColumn
                icon={Activity}
                number="Pilates"
                label="REFORMER"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
