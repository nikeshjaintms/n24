"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { PricingPlan } from "@/data/studio";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: PricingPlan | null;
}

export function PricingModal({ isOpen, onClose, plan }: PricingModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Connect GymMaster iframe resizer whenever modal opens
  useEffect(() => {
    if (isOpen && plan?.iframeUrl && typeof window !== "undefined") {
      const timer = setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const win = window as any;
        if (typeof win.iFrameResize === "function") {
          try {
            win.iFrameResize(
              {
                checkOrigin: false,
                interval: 50,
              },
              "#gmiframe, .gmiframe",
            );
          } catch (e) {
            console.error("iFrameResize init error:", e);
          }
        } else if (typeof win.initialiseIframeResizer === "function") {
          try {
            win.initialiseIframeResizer("modal");
          } catch (e) {
            console.error("initialiseIframeResizer error:", e);
          }
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isOpen, plan]);

  if (!plan) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0C1A2E]/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[28px] sm:rounded-[32px] shadow-2xl border border-[#DDEAF2] flex flex-col overflow-hidden z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top accent gradient bar */}
            <div
              className="h-[4px] w-full flex-shrink-0"
              style={{ background: "linear-gradient(90deg, #00AFC2, #00C8D7)" }}
            />

            {/* Subtle glow effect */}
            <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full opacity-15 blur-3xl bg-[#00AFC2]" />

            {/* Header */}
            <div className="px-6 sm:px-8 py-5 border-b border-[#DDEAF2]/60 flex items-center justify-between bg-white/95 backdrop-blur z-10 shrink-0">
              <div className="flex flex-col gap-1 min-w-0 pr-4">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#00AFC2]">
                  Secure Online Signup
                </span>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-display text-2xl sm:text-3xl text-[#0C1A2E] font-bold truncate">
                    {plan.name}
                  </h3>
                  {plan.price && (
                    <span className="bg-[#F1FAFB] text-[#00AFC2] font-semibold text-xs px-3 py-1 rounded-full border border-[#DDEAF2]">
                      {plan.price} {plan.unit}
                    </span>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="group flex items-center justify-center size-10 rounded-full border border-[#DDEAF2] bg-[#F1FAFB] text-[#4A606A] transition-all duration-200 hover:border-[#00AFC2] hover:bg-[#00AFC2] hover:text-white cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="size-5 transition-transform group-hover:rotate-90 duration-300" />
              </button>
            </div>

            {/* Iframe Container */}
            <div className="relative flex-1 w-full overflow-y-auto overflow-x-hidden bg-[#F8FCFD] p-2 sm:p-4 md:p-6 min-h-[500px]">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm z-10 transition-opacity">
                  <div className="size-10 rounded-full border-4 border-[#DDEAF2] border-t-[#00AFC2] animate-spin mb-3" />
                  <p className="text-sm font-light text-[#4A606A] tracking-wide">
                    Loading secure GymMaster form...
                  </p>
                </div>
              )}

              {plan.iframeUrl ? (
                <iframe
                  id="gmiframe"
                  className="gmiframe w-full min-h-[650px] md:min-h-[750px] border-0 rounded-2xl bg-white shadow-sm"
                  src={plan.iframeUrl}
                  title={`Sign up for ${plan.name}`}
                  allow="camera *; microphone *; payment *"
                  onLoad={() => setIsLoading(false)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center min-h-[300px] text-center p-8">
                  <p className="font-display text-2xl text-[#0C1A2E] font-bold mb-2">Coming Soon</p>
                  <p className="text-sm text-[#4A606A] max-w-md">
                    This membership option is being configured and will be available online soon.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-3.5 bg-white border-t border-[#DDEAF2]/60 flex items-center justify-between text-xs text-[#4A606A] shrink-0">
              <span className="flex items-center gap-1.5 font-medium text-[#4A606A]">
                <ShieldCheck className="size-4 text-[#00AFC2]" />
                256-Bit SSL Encrypted Checkout
              </span>
              <span className="hidden sm:inline font-light">Powered by GymMaster</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
