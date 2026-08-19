"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Facebook, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="w-full text-white overflow-hidden">
      {/* Newsletter Bar */}
      <div className="relative bg-[#0F172A] py-10 sm:py-12 px-5 sm:px-6 lg:px-10 border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00C8D7]/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          <div className="flex items-center gap-4 sm:gap-5 w-full md:w-auto">
            <div className="flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#00C8D7] to-[#00AFC2] text-white shadow-[0_0_20px_rgba(0,200,215,0.3)]">
              <Mail className="size-5 sm:size-6" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-[0.75rem] sm:text-[0.8rem] font-bold uppercase tracking-[0.2em] text-white">
                Join The Inner Circle
              </h3>
              <p className="mt-1 text-[0.8rem] sm:text-[0.85rem] text-white/60 font-light">
                Elevate your movement journey. Receive private offers, wellness insights, and studio updates.
              </p>
            </div>
          </div>
          <form
            className="flex flex-col sm:flex-row w-full md:max-w-xl gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              placeholder="Enter your email"
              type="email"
              className="w-full h-12 sm:h-14 bg-white/5 px-5 sm:px-6 text-[0.85rem] outline-none placeholder:text-white/40 text-white border border-white/10 rounded-full focus:border-[#00C8D7]/50 focus:bg-white/10 transition-all duration-300"
            />
            <button
              type="submit"
              className="h-12 sm:h-14 px-6 sm:px-8 bg-white text-[#0F172A] text-[0.72rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.1em] hover:bg-[#00C8D7] hover:text-white transition-colors duration-300 rounded-full flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#0A0F1E] relative py-10 sm:py-12 px-5 sm:px-6 lg:px-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] max-w-full h-px bg-gradient-to-r from-transparent via-[#00C8D7]/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#00C8D7]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-5 lg:pr-8">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="mt-3 text-[0.9rem] sm:text-[0.95rem] leading-relaxed text-white/60 font-light max-w-sm">
              A premium sanctuary for self-guided Digital Reformer Pilates and Infrared Sauna therapy in Applecross. Empowering your body and mind, entirely on your schedule.
            </p>
            <div className="mt-5 sm:mt-6 flex gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/n24pilatesstudio?igsh=NmdibHZqODJtYXJv&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-[#00C8D7] hover:text-white hover:border-transparent transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="size-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.facebook.com/n24pilatesstudio/?rdid=wktXg69RfmsgNP4H"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-[#00C8D7] hover:text-white hover:border-transparent transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="size-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Col 2 — Explore */}
          <div className="lg:col-span-3">
            <h4 className="text-[0.72rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.2em] text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-[0.85rem] text-white/70 font-light">
              {[
                ["Our Classes", "/classes"],
                ["Infrared Saunas", "/infrared-saunas"],
                ["Pricing", "/pricing"],
                ["Our Story", "/about"],
                ["FAQs", "/faqs"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 py-0.5 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#00C8D7] transition-all duration-300 group-hover:w-3" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-[0.72rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3.5 text-[0.85rem] text-white/70 font-light">
              <li className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-[#00C8D7]/50 transition-colors">
                  <Phone className="size-3.5 text-[#00C8D7]" strokeWidth={2} />
                </div>
                <a href="tel:0478336630" className="group-hover:text-white transition-colors">0478 336 630</a>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-[#00C8D7]/50 transition-colors">
                  <Mail className="size-3.5 text-[#00C8D7]" strokeWidth={2} />
                </div>
                <span className="group-hover:text-white transition-colors break-all sm:break-normal">
                  info@n24pilatesstudio.com
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 group cursor-pointer">
                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-[#00C8D7]/50 transition-colors">
                  <MapPin className="size-3.5 text-[#00C8D7]" strokeWidth={2} />
                </div>
                <span className="group-hover:text-white transition-colors leading-relaxed pt-0.5">
                  Unit G3/3 Kintail Rd,
                  <br />
                  Applecross WA 6153
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0A0F1E] py-5 sm:py-6 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-[0.7rem] sm:text-[0.75rem] text-white/40 font-light tracking-wide">
            &copy; 2026 N24 Pilates Studio. All Rights Reserved.
          </p>
          <p className="text-[0.7rem] sm:text-[0.75rem] text-white/40 font-light tracking-wide">
            Designed & Developed by{" "}
            <a
              href="https://techomaxsolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:text-[#00C8D7] transition-colors"
            >
              Techomax Solution
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
