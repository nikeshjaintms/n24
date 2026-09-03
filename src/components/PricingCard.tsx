"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { clsx } from "clsx";
import type { PricingPlan } from "@/data/studio";

export function PricingCard({
  plan,
  index = 0,
  onSelect,
}: {
  plan: PricingPlan;
  index?: number;
  onSelect?: (plan: PricingPlan) => void;
}) {
  const accent = "#00AFC2";
  const textMain = "text-[#0C1A2E] group-hover:text-white";
  const textSub = "text-[#4A606A] group-hover:text-white/90";
  const bg = "bg-white hover:bg-[#00AFC2]";

  return (
    <div
      className={clsx(
        "group relative flex flex-col h-full overflow-hidden rounded-[28px] transition-all duration-500 hover:-translate-y-2",
        bg,
        "shadow-soft border border-[#DDEAF2] hover:shadow-premium hover:border-transparent",
      )}
    >
      {/* Top accent bar */}
      <div
        className="h-[3px] w-full flex-shrink-0 group-hover:opacity-0 transition-opacity"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent 70%)` }}
      />

      {/* Soft glow */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 size-44 rounded-full opacity-[0.18] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.4]"
        style={{ background: accent }}
      />

      {/* Corner pattern */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 size-28 opacity-[0.06] group-hover:opacity-0 transition-opacity"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${accent} 0, ${accent} 1px, transparent 0, transparent 50%)`,
          backgroundSize: "10px 10px",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-8 -right-8 size-32 rounded-full border-[1.5px] opacity-[0.15] group-hover:border-white/30 transition-colors"
        style={{ borderColor: accent }}
      />

      <div className="relative z-10 flex flex-1 flex-col p-8 pt-7">
        {/* Plan name */}
        <h3
          className={clsx(
            "text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-colors",
            textSub,
          )}
        >
          {plan.name}
        </h3>

        {/* Price */}
        {plan.price ? (
          <div className="mt-3 flex items-end gap-2 flex-wrap">
            <span
              className={clsx(
                "font-body text-5xl font-medium tracking-tight leading-none transition-colors",
                textMain,
              )}
            >
              {plan.price}
            </span>
            {plan.unit && (
              <span className="mb-1 text-[0.6rem] font-bold uppercase tracking-widest text-[#00AFC2] group-hover:text-white transition-colors">
                {plan.unit}
              </span>
            )}
          </div>
        ) : (
          <div
            className={clsx(
              "mt-4 text-[1.5rem] font-display font-bold transition-colors",
              textMain,
            )}
          >
            Give Wellness
          </div>
        )}

        {/* Daily Equivalent Box */}
        {plan.dailyEquivalent && (
          <div className="mt-4 self-start border border-[#00AFC2]/20 bg-[#00AFC2]/5 rounded-full px-4 py-1.5 text-[0.75rem] font-medium text-[#00AFC2] group-hover:text-white group-hover:bg-white/20 group-hover:border-white/30 transition-colors">
            Only ${plan.dailyEquivalent} per Reformer class + Infrared sauna
          </div>
        )}

        {/* Discounted Price Box */}
        {plan.discountedPrice && (
          <div className="mt-4 self-start border border-[#00AFC2]/20 bg-[#00AFC2]/5 rounded-full px-4 py-1.5 text-[0.75rem] font-medium text-[#00AFC2] group-hover:text-white group-hover:bg-white/20 group-hover:border-white/30 transition-colors">
            Only {plan.discountedPrice.replace(" / ", " per ")}
          </div>
        )}

        {/* Divider */}
        <div
          className="my-6 h-px w-full transition-colors group-hover:bg-white/20"
          style={{ background: `linear-gradient(90deg, ${accent}40, transparent)` }}
        />

        {/* Description */}
        {plan.description && (
          <p
            className={clsx(
              "mb-5 text-[0.875rem] leading-relaxed font-light transition-colors",
              textSub,
            )}
          >
            {plan.description}
          </p>
        )}

        {/* Features */}
        <ul className="flex-1 space-y-3">
          {plan.features.map((f: string) => (
            <li key={f} className="flex items-start gap-3">
              <span
                className="mt-0.5 flex-shrink-0 size-[1.15rem] rounded-full flex items-center justify-center transition-colors group-hover:bg-white/20"
                style={{ background: `${accent}22` }}
              >
                <Check className="size-2.5 text-[#00AFC2] group-hover:text-white transition-colors" />
              </span>
              <span
                className={clsx(
                  "text-[0.85rem] leading-relaxed font-light transition-colors",
                  textSub,
                )}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          type="button"
          disabled={plan.comingSoon || !plan.iframeUrl}
          onClick={() => {
            if (plan.iframeUrl && !plan.comingSoon && onSelect) {
              onSelect(plan);
            }
          }}
          className={clsx(
            "group/btn relative mt-8 flex items-center justify-center overflow-hidden rounded-full py-3.5 px-6 text-[0.7rem] font-bold uppercase tracking-[0.18em] transition-all duration-500",
            plan.comingSoon || !plan.iframeUrl
              ? "cursor-not-allowed opacity-80 bg-[#4A606A]/40 text-white"
              : "bg-[#00C8D7] text-[#0A0F1E] hover:-translate-y-1 hover:shadow-[0_15px_35px_-5px_rgba(0,200,215,0.4)] group-hover:bg-white group-hover:text-[#00AFC2] cursor-pointer",
          )}
        >
          <span className="relative z-10 flex items-center gap-2">
            {plan.buttonText || "Buy Now"}
            {!plan.comingSoon && plan.iframeUrl && (
              <svg
                className="size-3 transition-transform duration-300 group-hover/btn:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            )}
          </span>
          {!plan.comingSoon && plan.iframeUrl && (
            <div className="absolute inset-0 bg-white/30 group-hover:bg-[#00AFC2]/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
          )}
        </button>
      </div>
    </div>
  );
}
