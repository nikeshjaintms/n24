"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};
const stagger: Variants = { visible: { transition: { staggerChildren: 0.15 } } };

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

export function GallerySection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;
    let isHovered = false;

    const scroll = () => {
      if (!isHovered && slider) {
        slider.scrollLeft += 1.5;
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

  return (
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
                preload="none"
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
  );
}
