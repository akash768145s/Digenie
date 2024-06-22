import { Text } from "@/components/ui/text";
import Image from "next/image";
import AboutImage from "@/../public/images/about/about-image.jpg";

const AboutSection = () => {
  return (
    <section className="grid lg:grid-cols-2 items-center my-10 xl:my-32 m-auto">
      <div className="m-auto xl:my-0 ">
        <Image
          className="rounded-md"
          src={AboutImage}
          alt="Image"
          width={600}
          height={500}
        />
      </div>
      <div className="w-11/12 xl:w-4/5 lg:w-2/3 m-auto">
        <Text className="my-5" variant="h1">
          Who We Are
        </Text>

        <Text variant="body1">
          With a combined experience of over 8 years, we are a young and dynamic
          team that goes the extra mile to boost your brand&apos;s online
          presence.
        </Text>
        <Text variant="body1">
          Digenie is a team of creative digital marketing experts who are
          passionate about helping brands get the visibility they deserve.
          Having worked with small and medium businesses in the UK, US, Canada,
          and India, we understand the unique challenges business owners face in
          reaching the right target audience and converting them into paying
          customers. We blend this knowledge with modern marketing tactics to
          create custom strategies that&apos;ll work for your brand. Contact us
          today to find out what we can do for you!
        </Text>
      </div>
    </section>
  );
};

export default AboutSection;
