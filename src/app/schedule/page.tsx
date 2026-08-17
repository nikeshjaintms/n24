import { SiteLayout, PageHero } from "@/components/SiteLayout";
import Script from "next/script";

export default function Schedule() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Class Calendar"
        title="Book Your"
        accent="Class."
        subtitle="Reserve your spot in our Digital Reformer or Infrared Sauna sessions."
      />

      <section className="py-16 sm:py-24" style={{ background: "#0F172A" }}>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          
          {/* GymMaster External Scripts for iframes */}
          <Script id="gymmaster-jq-conflict-pre-schedule" strategy="afterInteractive">
            {`if (typeof jQuery !== 'undefined') var oldJQuery = jQuery.noConflict(true);`}
          </Script>
          <Script
            src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"
            strategy="afterInteractive"
          />
          <Script id="gymmaster-jq-conflict-post-schedule" strategy="afterInteractive">
            {`if (typeof jQuery !== 'undefined') { jQueryX = jQuery.noConflict(true); } if (typeof oldJQuery !== 'undefined') { jQuery = oldJQuery; }`}
          </Script>
          <Script
            src="https://n24pilatesstudio.gymmasteronline.com/portal/static/js/hostpage.js"
            strategy="lazyOnload"
          />

          <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-2xl overflow-hidden min-h-[600px]">
            <figure className="w-full h-full">
              <iframe
                className="gmiframe w-full min-h-[800px] border-0"
                src="https://n24pilatesstudio.gymmasteronline.com/portal/classcalendar"
                width="100%"
                scrolling="no"
                frameBorder="0"
                allow="camera *"
                loading="lazy"
                title="Class Calendar"
              />
            </figure>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
