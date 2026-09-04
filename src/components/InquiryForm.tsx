"use client";

import { useState } from "react";
import { Loader2, CalendarDays, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    birthday: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.name,
          lastName: "",
          email: form.email,
          phone: form.mobile,
          message: `Birthday: ${form.birthday || "Not provided"}`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", mobile: "", birthday: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <div className="size-14 rounded-full bg-[#0E2024] text-white flex items-center justify-center">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="font-display text-[1.5rem] text-[#111]">You&apos;re on the list!</h3>
        <p className="text-[0.9rem] text-[#666] font-light max-w-xs">
          Our team at N24 Pilates will be in touch shortly to confirm your complimentary pass.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-1 text-[0.7rem] uppercase tracking-widest font-bold text-[#0E2024] underline underline-offset-2"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <p className="text-center text-[0.85rem] font-medium text-[#444] mb-5 tracking-wide">
        Trial Offer — 1 Class On Us!
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className="w-full px-4 py-3.5 border border-[#ccc] rounded-lg text-[0.95rem] text-[#111] placeholder:text-[#999] focus:outline-none focus:border-[#0E2024] bg-white transition-all"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="w-full px-4 py-3.5 border border-[#ccc] rounded-lg text-[0.95rem] text-[#111] placeholder:text-[#999] focus:outline-none focus:border-[#0E2024] bg-white transition-all"
        />
        <input
          name="mobile"
          type="tel"
          value={form.mobile}
          onChange={handleChange}
          required
          placeholder="Mobile"
          className="w-full px-4 py-3.5 border border-[#ccc] rounded-lg text-[0.95rem] text-[#111] placeholder:text-[#999] focus:outline-none focus:border-[#0E2024] bg-white transition-all"
        />
        <div className="relative">
          <input
            name="birthday"
            type="date"
            value={form.birthday}
            onChange={handleChange}
            className="w-full px-4 py-3.5 border border-[#ccc] rounded-lg text-[0.95rem] text-[#999] focus:outline-none focus:border-[#0E2024] bg-white transition-all"
          />
          <CalendarDays className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#aaa] pointer-events-none" />
        </div>

        {status === "error" && (
          <p className="text-red-500 text-[0.8rem]">
            Something went wrong. Email us at{" "}
            <a href="mailto:Info@n24pilatesstudio.com" className="underline">
              Info@n24pilatesstudio.com
            </a>
          </p>
        )}

        <div className="pt-2 text-center">
          <p className="text-[0.75rem] text-[#777] mb-4">
            <Link href="/contact" className="underline underline-offset-2 hover:text-[#0E2024] transition-colors">
              View details of our member experience trial offer
            </Link>
          </p>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#0E2024] text-white font-bold text-[0.8rem] uppercase tracking-[0.15em] py-4 rounded-full hover:bg-[#1a3540] transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <><Loader2 className="size-4 animate-spin" /> Sending...</>
            ) : (
              "Claim My Pass Today"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
