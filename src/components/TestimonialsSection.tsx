"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};
const stagger: Variants = { visible: { transition: { staggerChildren: 0.15 } } };

const reviews = [
  {
    name: "Rebecca Boehm",
    date: "Verified Member · Applecross",
    text: "Best Pilates studio ever! Sia is amazing and the environment is very clean and beautiful. I love the option to use reformers on my own with instructions. Sauna is fantastic too! 🤍",
    initial: "R",
  },
  {
    name: "Paul K",
    date: "Verified Member · Applecross",
    text: "Great place. Easy parking. Highly recommended.",
    initial: "P",
  },
  {
    name: "Elias Santimano",
    date: "Verified Member · Applecross",
    text: "I joined N24 Pilates & Wellness based on my surgeon suggesting I give it a go as no physio/chiro could help with my back pain and my knee. As they were based on the ground floor of my apartment building and based on convenience I gave it a go and found the beginner class pretty easy, and the exercises on the mat and the reformer seem to relieve some of the pain. I have been attending here for about 6 weeks, 2 classes a week supervised and 1 day unsupervised. Besides, the bonus of an infrared sauna is helpful. Currently my pain in the back and knee is manageable with little inconvenience and I can safely attribute this to Pilates. The environment is clean and healthy and I am enjoying it.",
    initial: "E",
  },
  {
    name: "Joe Angel",
    date: "Verified Member · Applecross",
    text: "I’m loving the whole experience. The environment is calm and beautiful. The lessons are challenging and I can feel the ongoing improvement each class. The option to have live classes or just workout on your own is wonderfully flexible. To follow the classes with meditation and then the option of going in the sauna sets the day up perfectly. I would recommend this highly.",
    initial: "J",
  },
  {
    name: "Rebecca",
    date: "Verified Member · Applecross",
    text: "I love being able to pick a workout time the suits my schedule and being able to pop to the studio whenever I’m motivated and not being stuck waiting for a class time has seen me doing about 3-4 sessions a week! I leave for work very early in the morning so the 5am opening time has also been awesome for me and I appreciate the privacy and calm that comes with choosing my own workout. The classes are easy to follow, the studio is gorgeous and the staff are very friendly, highly recommend their sauna too!",
    initial: "R",
  },
  {
    name: "Ashlyn Hendricks",
    date: "Verified Member · Applecross",
    text: "The studio is nicely laid out, clean and lovely. The infra red sauna is luxe. Sia is a good instructor, calm and is slowly building our collective repertoire to maximise outcomes and we enjoy the classes. I feel stronger and can see improvements in balance and strength.. This together with the Studio being staffed all day and the convenience of the location has been very useful.",
    initial: "A",
  },
  {
    name: "Caris Garnsey",
    date: "Verified Member · Applecross",
    text: "If you’re looking for the best Pilates studio in Applecross, this is definitely it! The location is so convenient, especially if you’re travelling, as it’s right off the freeway with easy access. Sia, the owner, is absolutely lovely and incredibly knowledgeable. You can truly tell she knows what she’s doing... her classes are both informative and welcoming, making you feel comfortable while still being challenged. The community here is honestly amazing and such a positive environment to be around. I even find myself coming at night because the atmosphere is so enjoyable. It’s also very rare to find a studio in Perth open as late as 9pm, which makes it perfect for busy schedules 🙌",
    initial: "C",
  },
  {
    name: "sonali dhut",
    date: "Verified Member · Applecross",
    text: "Fantastic studio with top-tier Balance Body equipment. As a complete beginner, I was nervous, but instructor made me feel so welcome and they provided plenty of modifications to suit my level. The sessions are intense and fun. I love that the classes are small enough for the instructor to give one-on-one help with form. Reformer Pilates truly helped in toning my body increase strength giving quick results. I definitely recommend it!!",
    initial: "S",
  },
  {
    name: "Dr Arthur Wilson",
    date: "Verified Member · Applecross",
    text: "Great service. Very convenient. I really appreciate the after hours access. I don’t do Pilates…but they two wonderful infrared spa that I use. They are clean comfy and quiet. I will return!",
    initial: "D",
  },
  {
    name: "Shreya Bari",
    date: "Verified Member · Applecross",
    text: "Absolutely loved my experience at N24 Pilates! The instructor is so supportive and make every class feel welcoming, even for beginners. The studio has such a calm and positive vibe, and I always leave feeling refreshed and stronger.",
    initial: "S",
  },
  {
    name: "Aline Marchioro",
    date: "Verified Member · Applecross",
    text: "Really lovely place! Owner was very friendly and helpful. Sauna was a bargain! Reformer room also looks amazing and they have so many programs for everyone",
    initial: "A",
  }
];

export function TestimonialsSection() {
  const [selectedReviewIndex, setSelectedReviewIndex] = useState<number | null>(null);

  return (
    <>
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#F8FBFC] via-[#F1FAFB] to-white border-t border-b border-[#00C8D7]/15">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00C8D7]/10 blur-[140px] pointer-events-none translate-z-0" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#00C8D7]/5 blur-[120px] pointer-events-none translate-z-0" />

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
            className="mt-8"
          >
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full relative"
            >
              <CarouselContent className="-ml-4 md:-ml-8">
                {reviews.map((r, i) => {
                  const isLong = r.text.length > 150;
                  return (
                    <CarouselItem key={i} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                      <motion.div
                        variants={fadeUp}
                        className="group relative overflow-hidden rounded-[28px] border border-[#00C8D7]/15 bg-white p-10 flex flex-col shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-premium hover:border-[#00C8D7]/40 h-full"
                      >
                        <div className="absolute top-0 right-0 w-28 h-28 bg-[#00C8D7]/10 rounded-full blur-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <Quote className="size-10 text-[#00C8D7] mb-6 transition-transform duration-300 group-hover:scale-110 shrink-0" />
                        <div className="flex-1 flex flex-col">
                          <p className="text-[1.05rem] leading-relaxed text-[#111827] font-light italic line-clamp-4">
                            &ldquo;{r.text}&rdquo;
                          </p>
                          {isLong && (
                            <button 
                              onClick={() => setSelectedReviewIndex(i)} 
                              className="text-[#00C8D7] text-sm font-medium mt-2 text-left hover:underline w-fit mb-8"
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
                          <div className="flex items-center gap-4 pt-6 border-t border-[#00C8D7]/15">
                            <div className="size-12 rounded-full bg-gradient-to-br from-[#00C8D7] to-[#00AFC2] flex items-center justify-center font-display text-xl text-white shadow-[0_4px_15px_rgba(0,200,215,0.3)] shrink-0">
                              {r.initial}
                            </div>
                            <div>
                              <p className="text-[#0A0F1E] text-[0.95rem] font-bold">{r.name}</p>
                              <p className="text-[#5B6B70] text-[0.75rem] mt-0.5">{r.date}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-12">
                <CarouselPrevious className="static transform-none h-12 w-12 border-[#00C8D7] text-[#00C8D7] hover:bg-[#00C8D7] hover:text-white" />
                <CarouselNext className="static transform-none h-12 w-12 border-[#00C8D7] text-[#00C8D7] hover:bg-[#00C8D7] hover:text-white" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedReviewIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#0C1A2E]/80 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedReviewIndex(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-[28px] sm:rounded-[32px] shadow-2xl flex flex-col overflow-hidden z-10 border border-[#DDEAF2]"
            >
              <div
                className="h-[4px] w-full flex-shrink-0"
                style={{ background: "linear-gradient(90deg, #00AFC2, #00C8D7)" }}
              />
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C8D7]/10 rounded-full blur-[40px] pointer-events-none" />
              
              <div className="flex justify-between items-center px-6 sm:px-8 py-5 shrink-0 border-b border-[#DDEAF2]/60 bg-white/95 backdrop-blur z-10">
                <Quote className="size-8 text-[#00C8D7]" />
                <button
                  onClick={() => setSelectedReviewIndex(null)}
                  className="group flex items-center justify-center size-10 rounded-full border border-[#DDEAF2] bg-[#F1FAFB] text-[#4A606A] transition-all duration-200 hover:border-[#00AFC2] hover:bg-[#00AFC2] hover:text-white cursor-pointer shrink-0"
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
                  <div className="size-14 rounded-full bg-gradient-to-br from-[#00C8D7] to-[#00AFC2] flex items-center justify-center font-display text-2xl text-white shadow-[0_4px_15px_rgba(0,200,215,0.3)] shrink-0">
                    {reviews[selectedReviewIndex].initial}
                  </div>
                  <div>
                    <p className="text-[#0A0F1E] text-[1.1rem] font-bold">{reviews[selectedReviewIndex].name}</p>
                    <p className="text-[#5B6B70] text-[0.85rem] mt-1">{reviews[selectedReviewIndex].date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
