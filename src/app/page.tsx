import { SiteLayout } from "@/components/SiteLayout";
import { PremiumHero } from "@/components/PremiumHero";
import { PromoVideoSection } from "@/components/PromoVideoSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CommunitySection } from "@/components/CommunitySection";
import { GallerySection } from "@/components/GallerySection";
import { OfferSection } from "@/components/OfferSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import Script from "next/script";

export default function Home() {
  return (
    <SiteLayout>
      {/* GymMaster External Scripts for iframes */}
      <Script id="gymmaster-jq-conflict-pre" strategy="afterInteractive">
        {`if (typeof jQuery !== 'undefined') var oldJQuery = jQuery.noConflict(true);`}
      </Script>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"
        strategy="afterInteractive"
      />
      <Script id="gymmaster-jq-conflict-post" strategy="afterInteractive">
        {`if (typeof jQuery !== 'undefined') { jQueryX = jQuery.noConflict(true); } if (typeof oldJQuery !== 'undefined') { jQuery = oldJQuery; }`}
      </Script>
      <Script
        src="https://n24pilatesstudio.gymmasteronline.com/portal/static/js/hostpage.js"
        strategy="lazyOnload"
      />

      <PremiumHero />
      <PromoVideoSection />
      <FeaturesSection />
      <CommunitySection />
      <GallerySection />
      <OfferSection />
      <TestimonialsSection />
      <ContactSection />
    </SiteLayout>
  );
}
