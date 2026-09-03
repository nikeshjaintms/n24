"use client";

import { useState } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import type { Variants } from "framer-motion";
import { AutoPlayVideo } from "./AutoPlayVideo";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};
const stagger: Variants = { visible: { transition: { staggerChildren: 0.15 } } };

const videos = [
  {
    src: "/videos/2-wa.mp4",
    poster: "/2.png",
    title: "Standing Carriage Lunge",
    sub: "Dynamic Lower-Body Strength & Postural Balance",
  },
  {
    src: "https://res.cloudinary.com/lxz3wn2z/video/upload/v1785915313/3-wa_y3uqmc.mp4",
    poster: "/n241.png",
    title: "Private Infrared Sauna Suite",
    sub: "Cellular Detoxification & Muscle Tension Relief",
  },
  {
    src: "/videos/1.mp4",
    poster: "/1.png",
    title: "Supine Magic Circle Series",
    sub: "Deep Transverse Abdominal & Core Activation",
  },
  {
    src: "/videos/5.mp4",
    poster: "/4.png",
    title: "Kneeling Arm & Shoulder Series",
    sub: "Upper-Body Conditioning & Spinal Alignment",
  },
  {
    src: "/Glute%20Bridging.mp4",
    poster: "/3.png",
    title: "Articulating Glute Bridge",
    sub: "Hamstring Length, Glute Strength & Pelvic Stability",
  },
  {
    src: "/videos/6.mp4",
    poster: "/6.png",
    title: "Reformer Footwork Flow",
    sub: "Lower-Extremity Alignment & Ankle Mobility",
  },
  {
    src: "/videos/7.mp4",
    poster: "/5.png",
    title: "Single-Leg Carriage Press",
    sub: "Hip Stability, Core Control & Unilateral Power",
  },
  {
    src: "/videos/8.mp4",
    poster: "/shared image.jpg",
    title: "Advanced Core Articulation",
    sub: "Spinal Decompression & Lumbar Resilience",
  },
];

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F1FAFB] py-14 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-[105rem] px-4 lg:px-8">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          variants={stagger}
          className="flex flex-col md:flex-row md:items-end md:justify-between px-2 mb-12 gap-6"
        >
          <div>
            <m.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-4 tracking-[0.3em]">
              The Digital Reformer Experience
            </m.p>
            <m.h2
              variants={fadeUp}
              className="font-display text-[2rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl text-[#0A0F1E]"
            >
              Experience <em>N24 in Motion</em>
            </m.h2>
          </div>
        </m.div>

        <div className="relative w-full overflow-hidden pb-10 pt-4 px-2">
          <div className="flex gap-6 lg:gap-8 w-max animate-marquee">
            {[...videos, ...videos].map((item, i) => {
              const isHovered = hoveredIndex === i;
              return (
                <m.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "0px", amount: 0.1 }}
                  transition={{ duration: 0.8, delay: (i % 4) * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onTouchStart={() => setHoveredIndex(i)}
                  onTouchEnd={() => setHoveredIndex(null)}
                  className="group relative w-[85vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw] max-w-[400px] flex-shrink-0 aspect-[9/16] sm:aspect-[4/5] overflow-hidden rounded-[28px] shadow-soft hover:shadow-premium transition-all duration-500 bg-[#0A0F1E] cursor-pointer"
                >
                  {isHovered ? (
                    <AutoPlayVideo
                      src={item.src}
                      poster={item.poster}
                      priority
                      className="absolute inset-0 size-full object-cover transition-transform duration-[1.5s] scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 size-full overflow-hidden">
                      <Image
                        src={item.poster}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 30vw"
                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                        priority={i < 4}
                      />
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/90 via-[#0A0F1E]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-8 left-8 right-8 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-display text-3xl text-white leading-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[0.85rem] text-[#00C8D7] font-light mb-4">{item.sub}</p>
                    <div className="h-px w-12 bg-[#00C8D7] transition-all duration-500 group-hover:w-full opacity-50 group-hover:opacity-100" />
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
