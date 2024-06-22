import SpecialSectionCard from "@/components/design/specialSectionCard";
import { Text } from "@/components/ui/text";

import InternationIcon from "@/../public/icons/international.svg";
import CustomIcon from "@/../public/icons/customize.svg";
import ResearchIcon from "@/../public/icons/research.svg";
import TextBorder from "@/components/ui/textBorder";

const SpecialSection = () => {
  return (
    <section className="xl:px-20 py-14 bg-[#FBF9F9]">
      <div className="w-11/12 lg:w-1/2 mx-auto mb-14 text-center">
        <Text className="text-5xl" variant="h1">
          Why Choose Us
        </Text>
        <TextBorder />
      </div>
      <div className="grid lg:grid-cols-3 mt-5 xl:space-x-10">
        <SpecialSectionCard
          key={0}
          icon={InternationIcon.src}
          title="Team With International Experience"
          description="Our team has worked with clients from various industries all over the globe. Our understanding of the domestic and international markets sets us apart from the rest!"
        />
        <SpecialSectionCard
          key={1}
          icon={CustomIcon.src}
          title="Customized Digital Strategies"
          description="Why settle for a templated-marketing method when you can get just what your brand needs? Our experts work with you to do a SWOT analysis and build strategies based on it."
        />
        <SpecialSectionCard
          key={2}
          icon={ResearchIcon.src}
          title="Research-Based Marketing Tactics"
          description="We don't just implement the strategies and call it a day; we delve into the analytics to figure out what's effective and what needs to be changed."
        />
      </div>
    </section>
  );
};

export default SpecialSection;
