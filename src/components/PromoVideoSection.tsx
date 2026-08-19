"use client";

import { m } from "framer-motion";
import { AutoPlayVideo } from "./AutoPlayVideo";

export function PromoVideoSection() {
  return (
    <section className="bg-white relative py-12 md:py-24">
      <div className="w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-0">
        {/* Cinematic ambient backlight for the video */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[radial-gradient(circle,rgba(0,200,215,0.15)_0%,transparent_60%)] pointer-events-none translate-z-0" />

        <m.div
          initial={{ scale: 0.95, borderRadius: "20px", opacity: 0 }}
          whileInView={{ scale: 1, borderRadius: "0px", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="group relative aspect-[4/3] sm:aspect-video w-full overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,200,215,0.15)] bg-white border border-[#00C8D7]/10"
        >
          <AutoPlayVideo
            src="/videos/hero%20video.mp4"
            poster="/shared%20image.jpg"
            className="absolute inset-0 w-full h-full object-cover scale-[1.02] transition-transform duration-[2000ms] group-hover:scale-100"
          />

          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
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
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
