"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function PromoVideoSection() {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: videoScroll } = useScroll({
    target: videoContainerRef,
    offset: ["start 70%", "center center"],
  });
  const videoWidth = useTransform(videoScroll, [0, 1], ["85%", "100%"]);
  const videoRadius = useTransform(videoScroll, [0, 1], ["40px", "0px"]);
  const videoTextOpacity = useTransform(videoScroll, [0.5, 1], [0, 1]);
  const videoTextY = useTransform(videoScroll, [0.5, 1], [40, 0]);

  return (
    <section ref={videoContainerRef} className="bg-slate-50 h-[150vh] relative">
      <div className="sticky top-0 w-full h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Cinematic ambient backlight for the video */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-r from-[#00C8D7]/15 to-[#00AFC2]/10 blur-[140px] pointer-events-none mix-blend-multiply translate-z-0" />

        <motion.div
          style={{ width: videoWidth, borderRadius: videoRadius }}
          className="group relative aspect-[4/3] sm:aspect-video overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,200,215,0.15)] bg-[#071321] border border-[#00C8D7]/10"
        >
          <video
            src="/videos/hero video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover scale-[1.02] transition-transform duration-[2000ms] group-hover:scale-100 z-0"
          />

          <motion.div
            style={{ opacity: videoTextOpacity, y: videoTextY }}
            className="absolute bottom-20 left-8 sm:bottom-28 sm:left-16 lg:bottom-32 lg:left-24 pointer-events-none z-20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#00C8D7] to-transparent rounded-full" />
              <span className="text-white uppercase tracking-[0.3em] text-[0.75rem] sm:text-[0.85rem] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Experience The Flow
              </span>
            </div>
            <h3 className="font-display text-white text-4xl sm:text-5xl lg:text-[6rem] leading-[1] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Elevated <em className="text-[#00C8D7] font-light">Movement.</em>
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
