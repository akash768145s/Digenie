import { Text } from "@/components/ui/text";
import Image from "next/image";

import AboutImage from "@/../public/images/home/aboutus.jpg";

const AboutSection = () => {
  return (
    <section className="grid lg:grid-cols-2 items-center xl:px-60 my-20">
      <div className="m-auto my-5 lg:my-0">
        <Image
          className="xl:w-full rounded-lg"
          src={AboutImage}
          alt="Image"
          width={350}
          height={350}
        />
      </div>
      <div className="mx-5 xl:mx-10">
        <Text className="my-5" variant="h1">
          Who We Are
        </Text>

        <Text className="my-5" variant="h3">
          Your Trusted Digital Marketing Partner
        </Text>
        <Text variant="body1" color="text-tertiary">
          At Digenie, we know that your business is unique and a cookie-cutter
          marketing approach might not work for you. So, we understand your
          brand, target market, and industry trends to create strategies
          that&apos;ll suit your business model.
        </Text>
      </div>
    </section>
  );
};

export default AboutSection;
