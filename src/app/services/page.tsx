import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Marketing Agency | India",
  description:
    "We offer social media marketing, SEO, website development, listings, reputation management, content marketing, and more to businesses of all sizes.",
};

import CTA from "@/components/design/cta";
import OtherSection from "./(sections)/otherSection";
import UniversalHeroSection from "@/components/design/universalHeroSection";
import ServicesSection from "./(sections)/servicesSection";
import Banner from "@/../public/images/services/banner.jpg";

const Services = () => {
  return (
    <main>
      <UniversalHeroSection key={0} page="Services" image={Banner.src} />
      <ServicesSection />
      <OtherSection />
      <CTA />
    </main>
  );
};

export default Services;
