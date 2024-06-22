import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Digital Marketing Agency | India",
  description:
    "We are a team of digital marketing experts in Chennai who are on a mission to increase your business’s online visibility. Contact us today!",
};

import CTA from "@/components/design/cta";
import AboutSection from "./(sections)/aboutSection";
import SpecialSection from "./(sections)/specialSection";
import UniversalHeroSection from "@/components/design/universalHeroSection";
import MissionSection from "./(sections)/missionSection";
import Banner from "@/../public/images/about/banner.jpg";

const AboutUs = () => {
  return (
    <main>
      <UniversalHeroSection key={0} page="About Us" image={Banner.src} />
      <AboutSection />
      <SpecialSection />
      <MissionSection />
      <CTA />
    </main>
  );
};

export default AboutUs;
