import dynamic from "next/dynamic";
import { SiteLayout } from "@/components/SiteLayout";
import { PremiumHero } from "@/components/PremiumHero";

const PromoVideoSection = dynamic(() =>
  import("@/components/PromoVideoSection").then((mod) => mod.PromoVideoSection),
);
const FeaturesSection = dynamic(() =>
  import("@/components/FeaturesSection").then((mod) => mod.FeaturesSection),
);
const CommunitySection = dynamic(() =>
  import("@/components/CommunitySection").then((mod) => mod.CommunitySection),
);
const GallerySection = dynamic(() =>
  import("@/components/GallerySection").then((mod) => mod.GallerySection),
);
const OfferSection = dynamic(() =>
  import("@/components/OfferSection").then((mod) => mod.OfferSection),
);
const TestimonialsSection = dynamic(() =>
  import("@/components/TestimonialsSection").then((mod) => mod.TestimonialsSection),
);
const ContactSection = dynamic(() =>
  import("@/components/ContactSection").then((mod) => mod.ContactSection),
);
import Script from "next/script";

export default function Home() {
  return (
    <SiteLayout>
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
