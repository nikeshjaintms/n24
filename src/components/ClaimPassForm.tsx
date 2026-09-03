"use client";

import { Calendar, ChevronDown } from "lucide-react";

export function ContactForm() {
  return (
    <div className="w-full px-6 md:px-8 py-8 md:py-12 bg-white max-w-xl mx-auto rounded-xl">
      <div className="text-center mb-8">
        <h2 className="text-[2.2rem] md:text-4xl font-display text-[#0F172A] mb-2 leading-tight">
          Claim Your Pass
        </h2>
      </div>

      <form className="flex flex-col space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full h-[60px] px-5 text-[16px] md:text-[18px] text-[#0F172A] placeholder-[#5B6B70] bg-white border-2 border-[#DDEAF2] focus:outline-none focus:border-[#00C8D7] transition-colors"
            required
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full h-[60px] px-5 text-[16px] md:text-[18px] text-[#0F172A] placeholder-[#5B6B70] bg-white border-2 border-[#DDEAF2] focus:outline-none focus:border-[#00C8D7] transition-colors"
            required
          />
        </div>

        <div>
          <input
            type="tel"
            placeholder="Mobile"
            className="w-full h-[60px] px-5 text-[16px] md:text-[18px] text-[#0F172A] placeholder-[#5B6B70] bg-white border-2 border-[#DDEAF2] focus:outline-none focus:border-[#00C8D7] transition-colors"
            required
          />
        </div>

        <div className="relative">
          <input
            type="date"
            placeholder="Your Birthday"
            className="w-full h-[60px] px-5 text-[16px] md:text-[18px] text-[#0F172A] placeholder-[#5B6B70] bg-white border-2 border-[#DDEAF2] focus:outline-none focus:border-[#00C8D7] transition-colors appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
            required
          />
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#5B6B70]">
            <Calendar className="w-5 h-5" />
          </div>
        </div>

        <div className="relative">
          <select
            className="w-full h-[60px] px-5 text-[16px] md:text-[18px] text-[#0F172A] bg-white border-2 border-[#DDEAF2] focus:outline-none focus:border-[#00C8D7] transition-colors appearance-none"
            required
            defaultValue=""
          >
            <option value="" disabled className="text-[#5B6B70]">
              Preferred Pass
            </option>
            <option value="trial">Trial Pass</option>
            <option value="intro">Intro Offer</option>
            <option value="membership">Membership</option>
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#5B6B70]">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>

        <div className="pt-2 text-center">
          <p className="text-[0.95rem] text-[#5B6B70] font-light">
            View details of our member experience trial offer
          </p>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full h-[64px] bg-[#00C8D7] text-white font-bold text-[18px] rounded-full hover:bg-[#00AFC2] transition-colors shadow-[0_8px_20px_rgba(0,200,215,0.25)] flex items-center justify-center tracking-wide"
          >
            Claim My Pass Today
          </button>
        </div>
      </form>
    </div>
  );
}
