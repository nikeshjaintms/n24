"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Script
        src="https://n24pilatesstudio.gymmasteronline.com/portal/static/js/hostpage.js"
        strategy="afterInteractive"
      />
      <div className="relative w-full min-h-[600px]">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm z-10 transition-opacity rounded-2xl">
            <div className="size-10 rounded-full border-4 border-[#00C8D7]/20 border-t-[#00C8D7] animate-spin mb-3" />
            <p className="text-sm font-light text-[#5B6B70] tracking-wide">
              Loading secure inquiry form...
            </p>
          </div>
        )}
        <iframe
          id="gmiframe"
          className="gmiframe w-full min-h-[650px] border-0 rounded-2xl bg-white shadow-sm"
          src="https://n24pilatesstudio.gymmasteronline.com/portal/enquiry"
          title="Contact N24 Pilates Studio"
          allow="camera *; microphone *"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </>
  );
}
