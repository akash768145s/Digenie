import CTA from "@/components/design/cta";
import ClientSection from "./(sections)/clientSection";
import ContactSection from "./(sections)/contactSection";
import HeroSection from "./(sections)/heroSection";
import ServicesSection from "./(sections)/servicesSection";
import AboutSection from "./(sections)/aboutSection";
import ProcessSection from "./(sections)/processSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ClientSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <CTA />
      <ContactSection />
    </main>
  );
};

export default HomePage;
