"use client";

import { useEffect } from "react";
import Script from "next/script";

export function ContactForm() {
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
      <div className="relative w-full h-full overflow-hidden">
        <div className="w-full -mb-20 pb-4">
          <iframe
            id="gmiframe"
            className="gmiframe w-full min-h-[650px] border-0 bg-white"
            src="https://n24pilatesstudio.gymmasteronline.com/portal/enquiry"
            title="Contact N24 Pilates Studio"
            allow="camera *; microphone *"
            scrolling="no"
          />
        </div>
      </div>
    </>
  );
}
