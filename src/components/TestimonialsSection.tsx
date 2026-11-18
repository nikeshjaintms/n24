"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Star, Quote, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import type { Variants } from "framer-motion";
import rawReviews from "@/data/reviews.json";

export interface Review {
  id?: string;
  name: string;
  date: string;
  text: string;
  initial: string;
  rating?: number;
  source?: string;
}

const reviews: Review[] = rawReviews;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};
const stagger: Variants = { visible: { transition: { staggerChildren: 0.15 } } };

interface TestimonialsSectionProps {
  theme?: "default" | "claim-pass";
}

export function TestimonialsSection({ theme = "default" }: TestimonialsSectionProps) {
  const isClaimPass = theme === "claim-pass";
  const [selectedReviewIndex, setSelectedReviewIndex] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api || isHovered || selectedReviewIndex !== null) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, 3500);

    return () => clearInterval(timer);
  }, [api, isHovered, selectedReviewIndex]);

  return (
    <>
      <section className={`py-28 relative overflow-hidden border-t border-b ${isClaimPass ? "bg-[#F8F7F3] border-[#111]/5" : "bg-gradient-to-b from-[#F8FBFC] via-[#F1FAFB] to-white border-[#00C8D7]/15"}`}>
        {!isClaimPass && (
          <>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00C8D7]/10 blur-[140px] pointer-events-none translate-z-0" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#00C8D7]/5 blur-[120px] pointer-events-none translate-z-0" />
          </>
        )}

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            variants={stagger}
            className="text-center mb-16"
          >
            {isClaimPass ? (
              <m.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
                <span className="h-px w-10 bg-[#333]/30"></span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#333]">
                  REAL MEMBER TRANSFORMATION
                </span>
                <span className="h-px w-10 bg-[#333]/30"></span>
              </m.div>
            ) : (
              <m.p
                variants={fadeUp}
                className="eyebrow text-[#00C8D7] mb-4 tracking-[0.3em] font-bold"
              >
                Real Member Transformation
              </m.p>
            )}
            <m.h2
              variants={fadeUp}
              className={`font-display text-5xl md:text-6xl mb-8 ${isClaimPass ? "text-[#111]" : "text-[#0A0F1E]"}`}
            >
              Stories of strength,
              <br />
              <em className={`${isClaimPass ? "text-[#111]" : "text-[#00C8D7] font-light"}`}>balance &amp; renewal</em>
            </m.h2>
            <m.div
              variants={fadeUp}
              className={`inline-flex items-center gap-4 bg-white rounded-full px-8 py-3.5 border backdrop-blur-md ${isClaimPass ? "shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-[#111]/10" : "shadow-soft border-[#00C8D7]/20"}`}
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
            </m.div>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            variants={stagger}
            className="mt-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            <Carousel
              setApi={setApi}
              opts={{ align: "start", loop: true }}
              className="w-full relative"
            >
              <CarouselContent className="-ml-4 md:-ml-8">
                {reviews.map((r, i) => {
                  const isLong = r.text.length > 150;
                  return (
                    <CarouselItem key={i} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                      <m.div
                        variants={fadeUp}
                        className={`group relative overflow-hidden rounded-[28px] border bg-white p-10 flex flex-col transition-all duration-500 hover:-translate-y-2 h-full ${isClaimPass ? "shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-[#111]/5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-[#111]/20" : "shadow-soft border-[#00C8D7]/15 hover:shadow-premium hover:border-[#00C8D7]/40"}`}
                      >
                        <div className={`absolute top-0 right-0 w-28 h-28 rounded-full blur-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${isClaimPass ? "bg-[#111]/5" : "bg-[#00C8D7]/10"}`} />
                        <Quote className={`size-10 mb-6 transition-transform duration-300 group-hover:scale-110 shrink-0 ${isClaimPass ? "text-[#111]/40" : "text-[#00C8D7]"}`} />
                        <div className="flex-1 flex flex-col">
                          <p className="text-[1.05rem] leading-relaxed text-[#111827] font-light italic line-clamp-4">
                            &ldquo;{r.text}&rdquo;
                          </p>
                          {isLong && (
                            <button
                              onClick={() => setSelectedReviewIndex(i)}
                              className={`text-sm font-medium mt-2 text-left hover:underline w-fit mb-8 ${isClaimPass ? "text-[#111]" : "text-[#00C8D7]"}`}
                            >
                              Read more
                            </button>
                          )}
                          {!isLong && <div className="mb-8" />}
                        </div>
                        <div className="mt-auto shrink-0">
                          <div className="flex text-yellow-400 gap-1.5 mb-6">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} className="size-4 fill-current" />
                            ))}
                          </div>
                          <div className={`flex items-center gap-4 pt-6 border-t ${isClaimPass ? "border-[#111]/10" : "border-[#00C8D7]/15"}`}>
                            <div className={`size-12 rounded-full flex items-center justify-center font-display text-xl text-white shrink-0 ${isClaimPass ? "bg-[#0E2024]" : "bg-gradient-to-br from-[#00C8D7] to-[#00AFC2] shadow-[0_4px_15px_rgba(0,200,215,0.3)]"}`}>
                              {r.initial}
                            </div>
                            <div>
                              <p className="text-[#0A0F1E] text-[0.95rem] font-bold">{r.name}</p>
                              <p className="text-[#5B6B70] text-[0.75rem] mt-0.5">{r.date}</p>
                            </div>
                          </div>
                        </div>
                      </m.div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-12">
                <CarouselPrevious className={`static transform-none h-12 w-12 border transition-colors ${isClaimPass ? "border-[#111]/20 text-[#111] hover:bg-[#111] hover:text-white" : "border-[#00C8D7] text-[#00C8D7] hover:bg-[#00C8D7] hover:text-white"}`} />
                <CarouselNext className={`static transform-none h-12 w-12 border transition-colors ${isClaimPass ? "border-[#111]/20 text-[#111] hover:bg-[#111] hover:text-white" : "border-[#00C8D7] text-[#00C8D7] hover:bg-[#00C8D7] hover:text-white"}`} />
              </div>
            </Carousel>
          </m.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedReviewIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#0C1A2E]/80 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedReviewIndex(null)}
            />
            <m.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-[28px] sm:rounded-[32px] shadow-2xl flex flex-col overflow-hidden z-10 border border-[#DDEAF2]"
            >
              <div
                className={`h-[4px] w-full flex-shrink-0 ${isClaimPass ? "bg-[#111]" : "bg-gradient-to-r from-[#00AFC2] to-[#00C8D7]"}`}
              />

              <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[40px] pointer-events-none ${isClaimPass ? "bg-[#111]/5" : "bg-[#00C8D7]/10"}`} />

              <div className="flex justify-between items-center px-6 sm:px-8 py-5 shrink-0 border-b border-[#DDEAF2]/60 bg-white/95 backdrop-blur z-10">
                <Quote className={`size-8 ${isClaimPass ? "text-[#111]/40" : "text-[#00C8D7]"}`} />
                <button
                  onClick={() => setSelectedReviewIndex(null)}
                  className={`group flex items-center justify-center size-10 rounded-full border border-[#DDEAF2] transition-all duration-200 cursor-pointer shrink-0 ${isClaimPass ? "bg-[#F8F7F3] text-[#333] hover:border-[#111] hover:bg-[#111] hover:text-white" : "bg-[#F1FAFB] text-[#4A606A] hover:border-[#00AFC2] hover:bg-[#00AFC2] hover:text-white"}`}
                >
                  <X className="size-5 transition-transform group-hover:rotate-90 duration-300" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar bg-[#F8FCFD]">
                <p className="text-[1.1rem] sm:text-[1.2rem] leading-relaxed text-[#111827] font-light italic mb-8">
                  &ldquo;{reviews[selectedReviewIndex].text}&rdquo;
                </p>

                <div className="flex text-yellow-400 gap-1.5 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="size-5 fill-current" />
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div className={`size-14 rounded-full flex items-center justify-center font-display text-2xl text-white shrink-0 ${isClaimPass ? "bg-[#0E2024]" : "bg-gradient-to-br from-[#00C8D7] to-[#00AFC2] shadow-[0_4px_15px_rgba(0,200,215,0.3)]"}`}>
                    {reviews[selectedReviewIndex].initial}
                  </div>
                  <div>
                    <p className="text-[#0A0F1E] text-[1.1rem] font-bold">
                      {reviews[selectedReviewIndex].name}
                    </p>
                    <p className="text-[#5B6B70] text-[0.85rem] mt-1">
                      {reviews[selectedReviewIndex].date}
                    </p>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
