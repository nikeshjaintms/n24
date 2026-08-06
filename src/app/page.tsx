"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  Star,
  MapPin,
  Mail,
  MessageCircle,
  Award,
  Users,
  Clock,
  TrendingUp,
  Play,
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles,
  Flame,
  ShieldCheck,
  Heart,
  Laptop,
  Repeat,
  Activity,
  Smile,
  CheckCircle2,
} from "lucide-react";
import Script from "next/script";
import { SiteLayout } from "@/components/SiteLayout";
import { PremiumHero } from "@/components/PremiumHero";
import { PricingModal } from "@/components/PricingModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { pillars } from "@/data/studio";

/* ─── animation variants ──────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};
const stagger: Variants = { visible: { transition: { staggerChildren: 0.15 } } };

/* ─── features ─────────────────────────────────────────────────────── */
const features = [
  {
    title: "Digital Reformer Pilates",
    desc: "Technology-enhanced Reformer Pilates that puts precision, visual demonstrations, and personalized pacing at your fingertips without class pressure.",
    icon: Laptop,
    color: "from-[#00C8D7]/20 to-[#00C8D7]/5",
    accent: "#00C8D7",
  },
  {
    title: "Self-Guided Workouts",
    desc: "Enjoy absolute freedom to pause, rewind, or progress at your own tempo. Master proper form and technique with zero intimidation.",
    icon: Smile,
    color: "from-[#00AFC2]/20 to-[#00AFC2]/5",
    accent: "#00AFC2",
  },
  {
    title: "800+ On-Demand Classes",
    desc: "From gentle beginner rehabilitation to high-intensity athletic conditioning—access a vast library of professional masterclasses anytime.",
    icon: Sparkles,
    color: "from-[#00AFC2]/20 to-[#00AFC2]/5",
    accent: "#00AFC2",
  },
  {
    title: "No Crowded Classes",
    desc: "Say goodbye to packed 30-person rooms and competing for equipment. Relish an intimate, tranquil sanctuary where you have space to breathe and focus.",
    icon: Users,
    color: "from-[#00C8D7]/20 to-[#00C8D7]/5",
    accent: "#00C8D7",
  },
  {
    title: "100% Beginner Friendly",
    desc: "Step-by-step visual guidance and intuitive equipment setup. Designed so anyone, at any age or fitness level, feels confident from day one.",
    icon: ShieldCheck,
    color: "from-[#00C8D7]/20 to-[#00C8D7]/5",
    accent: "#00C8D7",
  },
  {
    title: "Infrared Sauna Recovery",
    desc: "Deep-tissue infrared heat therapy designed to melt muscle tension, accelerate cellular recovery, detoxify your body, and promote deep relaxation.",
    icon: Flame,
    color: "from-[#00AFC2]/20 to-[#00AFC2]/5",
    accent: "#00AFC2",
  },
  {
    title: "Flexible 5am–10pm Schedule",
    desc: "Your wellness shouldn't revolve around rigid timetable slots. Train whenever it suits your morning routine, work break, or evening wind-down.",
    icon: Clock,
    color: "from-[#00AFC2]/20 to-[#00AFC2]/5",
    accent: "#00AFC2",
  },
  {
    title: "Professional Programming",
    desc: "Every session is scientifically structured by master Pilates practitioners and physiotherapists to enhance mobility, posture, and core strength.",
    icon: Award,
    color: "from-[#00C8D7]/20 to-[#00C8D7]/5",
    accent: "#00C8D7",
  },

  {
    title: "Personal Progress Tracking",
    desc: "Monitor your consistency, session milestones, and strength evolution over time. Celebrate every measurable step in your movement journey.",
    icon: Repeat,
    color: "from-[#00AFC2]/20 to-[#00AFC2]/5",
    accent: "#00AFC2",
  },
  {
    title: "Suitable For Every Body",
    desc: "Whether recovering from injury, managing chronic back pain, or seeking peak athletic conditioning, N24 adapts seamlessly to your unique goals.",
    icon: Heart,
    color: "from-[#00C8D7]/20 to-[#00C8D7]/5",
    accent: "#00C8D7",
  },
];

/* ─── gallery videos ─────────────────────────────────────────────────── */
const videos = [
  {
    src: "/videos/2-wa.mp4",
    title: "Standing Carriage Lunge",
    sub: "Dynamic Lower-Body Strength & Postural Balance",
  },
  {
    src: "https://res.cloudinary.com/lxz3wn2z/video/upload/v1785915313/3-wa_y3uqmc.mp4",
    title: "Private Infrared Sauna Suite",
    sub: "Cellular Detoxification & Muscle Tension Relief",
  },
  {
    src: "/videos/1.mp4",
    title: "Supine Magic Circle Series",
    sub: "Deep Transverse Abdominal & Core Activation",
  },
  {
    src: "/videos/5.mp4",
    title: "Kneeling Arm & Shoulder Series",
    sub: "Upper-Body Conditioning & Spinal Alignment",
  },
  {
    src: "/Glute Bridging.mp4",
    title: "Articulating Glute Bridge",
    sub: "Hamstring Length, Glute Strength & Pelvic Stability",
  },
  {
    src: "/videos/6.mp4",
    title: "Reformer Footwork Flow",
    sub: "Lower-Extremity Alignment & Ankle Mobility",
  },
  {
    src: "/videos/7.mp4",
    title: "Single-Leg Carriage Press",
    sub: "Hip Stability, Core Control & Unilateral Power",
  },
  {
    src: "/videos/8.mp4",
    title: "Advanced Core Articulation",
    sub: "Spinal Decompression & Lumbar Resilience",
  },
];

/* ─── animated counter hook ────────────────────────────────────────── */
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const reviews = [
  {
    name: "Aline Marchioro",
    date: "Verified Member · Applecross",
    text: "The self-guided Digital Reformer concept is a game changer. I used to feel intimidated in packed classes, but here I can pause, focus on my form, and work at my own pace in a stunning, uncrowded space.",
    initial: "A",
  },
  {
    name: "Paul K.",
    date: "Verified Member · Perth",
    text: "Being able to train at 6:00 AM before work without booking weeks in advance is incredible. Combining a 45-minute reformer session with the infrared sauna has completely transformed my recovery and sleep.",
    initial: "P",
  },
  {
    name: "Joe Angel",
    date: "Verified Member · Applecross",
    text: "N24 feels like a private luxury club rather than a gym. The studio ambiance is serene, the equipment is state of the art, and my chronic lower back stiffness has vanished within a month.",
    initial: "J",
  },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic for the gallery (continuous slow scroll)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;
    let isHovered = false;

    const scroll = () => {
      if (!isHovered && slider) {
        slider.scrollLeft += 1.5; // Adjust speed here

        // If we've scrolled past half the content (since we duplicate the array), reset to 0 for infinite loop
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => (isHovered = true);
    const handleMouseLeave = () => (isHovered = false);

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("touchstart", handleMouseEnter);
    slider.addEventListener("touchend", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("touchstart", handleMouseEnter);
      slider.removeEventListener("touchend", handleMouseLeave);
    };
  }, []);

  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const offerPlan = {
    name: "4 Intro Classes for $40",
    price: "$40",
    iframeUrl: "https://n24pilatesstudio.gymmasteronline.com/portal/signup/details/9470d85507491296a31c643e990c513d"
  };

  return (
    <SiteLayout>
      {/* GymMaster External Scripts for iframes */}
      <Script id="gymmaster-jq-conflict-pre" strategy="afterInteractive">
        {`if (typeof jQuery !== 'undefined') var oldJQuery = jQuery.noConflict(true);`}
      </Script>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"
        strategy="afterInteractive"
      />
      <Script id="gymmaster-jq-conflict-post" strategy="afterInteractive">
        {`if (typeof jQuery !== 'undefined') { jQueryX = jQuery.noConflict(true); } if (typeof oldJQuery !== 'undefined') { jQuery = oldJQuery; }`}
      </Script>
      <Script
        src="https://n24pilatesstudio.gymmasteronline.com/portal/static/js/hostpage.js"
        strategy="lazyOnload"
      />

      {/* ═══════════════════════════════════════════
          1. HERO — Cinematic full-screen with refined animations
      ═══════════════════════════════════════════ */}
      <div ref={heroRef}>
        <PremiumHero heroY={heroY} heroOpacity={heroOpacity} heroScale={heroScale} />
      </div>

      {/* ═══════════════════════════════════════════
          2. WHY CHOOSE US — Premium glowing cards
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00C8D7]/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-4 tracking-[0.3em]">
              Why Choose N24 Pilates
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl text-[#0A0F1E] mb-4"
            >
              A sanctuary built for <em className="text-[#00C8D7]">real transformation</em>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[1.05rem] text-[#5B6B70] font-light max-w-2xl mx-auto leading-relaxed"
            >
              We combine the autonomy of self-guided touchscreen reformers, the restorative power of
              private infrared saunas, and 100% flexible 5:00 AM – 10:00 PM access to give you an
              elevated wellness experience.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="w-full"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full relative"
            >
              <CarouselContent className="-ml-4 sm:-ml-6 lg:-ml-8">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <CarouselItem key={f.title} className="pl-4 sm:pl-6 lg:pl-8 sm:basis-1/2 lg:basis-1/3">
                      <motion.div
                        variants={fadeUp}
                        className="group relative rounded-[28px] bg-white border border-[#DDEAF2] p-8 shadow-soft transition-all duration-500 hover:shadow-premium hover:-translate-y-2 overflow-hidden flex flex-col justify-between h-full"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div>
                          <div
                            className={`relative z-10 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.color} mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner`}
                          >
                            <Icon className="size-6" style={{ color: f.accent }} />
                          </div>
                          <h3 className="relative z-10 font-display text-2xl text-[#0A0F1E] mb-4">
                            {f.title}
                          </h3>
                          <p className="relative z-10 text-[0.9rem] leading-relaxed text-[#5B6B70] font-light">
                            {f.desc}
                          </p>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="flex items-center justify-center gap-4 mt-12">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 border-[#DDEAF2] bg-white hover:bg-[#F1FAFB] hover:text-[#00C8D7]" />
                <CarouselNext className="static translate-y-0 h-12 w-12 border-[#DDEAF2] bg-white hover:bg-[#F1FAFB] hover:text-[#00C8D7]" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. HOW IT WORKS — The Step-by-Step Journey
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-28 relative overflow-hidden border-t border-[#00C8D7]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-4 tracking-[0.3em]">
              How It Works
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl text-[#0A0F1E]"
            >
              Your effortless <em className="text-[#00C8D7]">N24 journey</em>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-[1.05rem] text-[#5B6B70] font-light max-w-xl mx-auto leading-relaxed"
            >
              From reserving your reformer session to leaving the studio feeling stronger and more
              balanced, every step is designed for seamless convenience.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                step: "01",
                title: "Book & Schedule",
                desc: "Reserve your Reformer session or private infrared sauna suite online in seconds via our intuitive member portal or our mobile app.",
              },
              {
                step: "02",
                title: "Arrive at Studio",
                desc: "Step into our serene, light-filled Applecross sanctuary—uncrowded, tranquil, and equipped for your comfort.",
              },
              {
                step: "03",
                title: "Select Workout",
                desc: "Explore 800+ on-demand masterclasses on your personal touchscreen console, selecting your desired level and focus.",
              },
              {
                step: "04",
                title: "Follow Guidance",
                desc: "Watch crystal-clear visual demonstrations and listen to expert cues, progressing at your own individual tempo.",
              },
              {
                step: "05",
                title: "Sauna Recovery",
                desc: "Unwind in our private 2-capacity infrared saunas for deep-tissue detoxification, warmth, and muscle repair.",
              },
              {
                step: "06",
                title: "Track & Repeat",
                desc: "Celebrate your consistency and watch your posture, flexibility, and core resilience transform week after week.",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="group relative rounded-[28px] bg-[#F1FAFB] border border-[#DDEAF2] p-8 shadow-soft transition-all duration-500 hover:shadow-premium hover:-translate-y-2 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#00C8D7] px-3.5 py-1.5 rounded-full bg-white border border-[#00C8D7]/20">
                      Step {item.step}
                    </span>
                    <span className="text-[1.8rem] font-display font-light text-[#00C8D7]/25 group-hover:text-[#00C8D7]/60 transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-[#0A0F1E] mb-3">{item.title}</h3>
                  <p className="text-[0.9rem] leading-relaxed text-[#5B6B70] font-light">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-[#00C8D7]/20 to-transparent group-hover:from-[#00C8D7] transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. COMMUNITY — Luxury dark split layout
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0A0F1E] py-0 overflow-hidden border-y border-white/5 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row"
        >
          {/* Left: Cinematic image with parallax */}
          <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-[700px] overflow-hidden group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/n241.png"
                alt="N24 Community"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent opacity-80" />
          </div>

          {/* Right: Premium dark editorial content */}
          <div className="lg:w-1/2 relative flex flex-col justify-center p-8 sm:p-12 lg:p-24">
            <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#00C8D7]/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <p className="eyebrow text-[#00C8D7] mb-6 tracking-[0.3em]">Who Is N24 For?</p>
              <h2 className="font-display text-[2rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 sm:mb-8">
                Designed for <em className="text-[#00C8D7] font-light">Every Body</em> &amp; Rhythm
              </h2>
              <p className="text-[1.05rem] leading-relaxed text-white/70 font-light max-w-lg mb-12">
                Whether you are a busy professional craving a 6:00 AM workout, a parent needing
                midday stress relief, an athlete seeking core conditioning, or a beginner looking
                for low-impact rehabilitation—N24 Pilates adapts seamlessly to your lifestyle.
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
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          5. GALLERY — Premium Horizontal Carousel
      ═══════════════════════════════════════════ */}
      <section className="bg-[#F1FAFB] py-14 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-[105rem] px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="flex flex-col md:flex-row md:items-end md:justify-between px-2 mb-12 gap-6"
          >
            <div>
              <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-4 tracking-[0.3em]">
                The Digital Reformer Experience
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-[2rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl text-[#0A0F1E]"
              >
                Experience <em>N24 in Motion</em>
              </motion.h2>
            </div>
          </motion.div>

          {/* Horizontal video slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 lg:gap-8 overflow-x-auto pb-10 pt-4 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {[...videos, ...videos].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (i % 4) * 0.1 }}
                className="group relative w-[85vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw] max-w-[400px] flex-shrink-0 aspect-[9/16] sm:aspect-[4/5] overflow-hidden rounded-[28px] shadow-soft hover:shadow-premium transition-all duration-500"
              >
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 size-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/90 via-[#0A0F1E]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="size-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 shadow-[0_0_30px_rgba(0,200,215,0.3)]">
                    <Play className="size-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-3xl text-white leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[0.85rem] text-[#00C8D7] font-light mb-4">{item.sub}</p>
                  <div className="h-px w-12 bg-[#00C8D7] transition-all duration-500 group-hover:w-full opacity-50 group-hover:opacity-100" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. TRANSFORMATIONAL RESULTS & BENEFITS
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-28 relative overflow-hidden border-t border-[#00C8D7]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-4 tracking-[0.3em]">
              Transformational Benefits
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl text-[#0A0F1E]"
            >
              What changes with <em className="text-[#00C8D7]">consistent movement</em>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-[1.05rem] text-[#5B6B70] font-light max-w-xl mx-auto leading-relaxed"
            >
              Beyond physical strength, our method restores balance to your nervous system, elevates
              your posture, and supports lifelong vitality.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Move Better, Without Pain",
                desc: "Re-educate your neuromuscular system, relieve chronic lower-back stiffness, and lubricate joints for fluid daily movement.",
                badge: "Mobility",
              },
              {
                title: "Feel Effortlessly Stronger",
                desc: "Develop lean, functional muscle tone that supports your spine and enhances everyday physical endurance.",
                badge: "Strength",
              },
              {
                title: "Elevated Posture & Presence",
                desc: "Counteract desk slumping and modern posture habits. Walk taller with open shoulders and a naturally aligned spine.",
                badge: "Posture",
              },
              {
                title: "Enhanced Core & Balance",
                desc: "Strengthen your deepest stabilizing muscles—the true powerhouse of athletic stability, balance, and injury prevention.",
                badge: "Stability",
              },
              {
                title: "Accelerated Recovery & Sleep",
                desc: "Combine Reformer Pilates with infrared heat therapy to flush metabolic waste, soothe cortisol, and promote deep, restorative sleep.",
                badge: "Recovery",
              },
              {
                title: "Sustainable, Joyful Habit",
                desc: "With no class intimidation or rigid schedules, building a lifelong movement routine becomes natural, empowering, and enjoyable.",
                badge: "Consistency",
              },
            ].map((res) => (
              <motion.div
                key={res.title}
                variants={fadeUp}
                className="group relative rounded-[28px] bg-[#F1FAFB] border border-[#DDEAF2] p-8 shadow-soft transition-all duration-500 hover:shadow-premium hover:-translate-y-2 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#00C8D7] px-3.5 py-1.5 rounded-full bg-white border border-[#00C8D7]/20">
                      {res.badge}
                    </span>
                    <CheckCircle2 className="size-5 text-[#00C8D7]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#0A0F1E] mb-3">{res.title}</h3>
                  <p className="text-[0.9rem] leading-relaxed text-[#5B6B70] font-light">
                    {res.desc}
                  </p>
                </div>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-[#00C8D7]/20 to-transparent group-hover:from-[#00C8D7] transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. MEMBERSHIP OFFER — Premium glass card
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden bg-[#0A0F1E]">
        <div className="absolute inset-0">
          <Image
            src="/2.png"
            alt="Special Offer"
            fill
            className="object-cover opacity-20 filter grayscale-[50%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-[#0A0F1E] opacity-90" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00C8D7]/10 blur-[150px] pointer-events-none mix-blend-screen" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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

      {/* ═══════════════════════════════════════════
          8. TESTIMONIALS — Real Member Transformation (Light Luxury Theme)
      ═══════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#F8FBFC] via-[#F1FAFB] to-white border-t border-b border-[#00C8D7]/15">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00C8D7]/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#00C8D7]/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="eyebrow text-[#00C8D7] mb-4 tracking-[0.3em] font-bold"
            >
              Real Member Transformation
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl text-[#0A0F1E] mb-8"
            >
              Stories of strength,
              <br />
              <em className="text-[#00C8D7] font-light">balance &amp; renewal</em>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-4 bg-white shadow-soft rounded-full px-8 py-3.5 border border-[#00C8D7]/20 backdrop-blur-md"
            >
              <div className="flex text-yellow-400 gap-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="size-5 fill-current" />
                ))}
              </div>
              <span className="text-[#0A0F1E] font-display text-xl font-bold">5.0</span>
              <span className="text-[0.65rem] text-[#5B6B70] font-bold uppercase tracking-[0.2em]">
                Based on Verified Reviews
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-[28px] border border-[#00C8D7]/15 bg-white p-10 flex flex-col shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-premium hover:border-[#00C8D7]/40"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#00C8D7]/10 rounded-full blur-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <Quote className="size-10 text-[#00C8D7] mb-6 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-[1.05rem] leading-relaxed text-[#111827] font-light italic flex-1 mb-8">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex text-yellow-400 gap-1.5 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-[#00C8D7]/15">
                  <div className="size-12 rounded-full bg-gradient-to-br from-[#00C8D7] to-[#00AFC2] flex items-center justify-center font-display text-xl text-white shadow-[0_4px_15px_rgba(0,200,215,0.3)]">
                    {r.initial}
                  </div>
                  <div>
                    <p className="text-[#0A0F1E] text-[0.95rem] font-bold">{r.name}</p>
                    <p className="text-[#5B6B70] text-[0.75rem] mt-0.5">{r.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. CONTACT — Editorial layout
      ═══════════════════════════════════════════ */}
      <section className="bg-white pt-20 pb-0 overflow-hidden relative border-t border-[#00C8D7]/10">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center mb-12">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="eyebrow text-[#00C8D7] mb-6 tracking-[0.3em]"
          >
            Applecross · Perth
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl text-[#0A0F1E] mb-8"
          >
            Come find your <em className="text-[#00C8D7] font-light">sanctuary</em>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-[1.1rem] text-[#5B6B70] font-light mb-14 flex items-center justify-center gap-3"
          >
            <MapPin className="size-5 text-[#00C8D7]" />
            Unit G3/3 Kintail Rd, Applecross WA 6153
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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

      {/* ═══════════════════════════════════════════
          MODALS
      ═══════════════════════════════════════════ */}
      <PricingModal
        isOpen={isOfferModalOpen}
        onClose={() => setIsOfferModalOpen(false)}
        plan={offerPlan}
      />
    </SiteLayout>
  );
}
