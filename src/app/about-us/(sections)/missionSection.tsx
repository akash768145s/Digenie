import { Text } from "@/components/ui/text";
import TextBorder from "@/components/ui/textBorder";

const MissionSection = () => {
  return (
    <section className="xl:w-1/2 m-auto px-5 xl:px-20 xl:py-5 text-center my-10">
      <div className="w-11/12 lg:w-1/2 mx-auto mb-14 text-center">
        <Text className="text-5xl" variant="h1">
          Our Mission
        </Text>
        <TextBorder />
      </div>
      <Text variant="body1">
        Our mission is to build long-lasting partnerships with our clients,
        helping them achieve their objectives, maximize their online presence,
        and drive sustainable growth in today&apos;s dynamic digital landscape.
      </Text>
    </section>
  );
};

export default MissionSection;
