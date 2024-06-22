import ServiceCard from "@/components/design/serviceCard";
import { Text } from "@/components/ui/text";
import TextBorder from "@/components/ui/textBorder";

import { servicesForServicesPage } from "@/data/services";

const OtherSection = () => {
  return (
    <section className="xl:px-48 py-14 bg-[#FBF9F9]">
      <div className="w-11/12 lg:w-1/2 mx-auto mt-5 mb-14 text-center">
        <Text className="text-5xl" variant="h1">
          Other Services
        </Text>
        <TextBorder />
        <Text variant="body1" color="text-tertiary">
          We live in a digital era where the best way to reach a larger market
          is through search engines and social media. However, with changing SEO
          parameters and AI innovations, navigating the digital realm can be
          quite tricky. That&apos;s why we offer comprehensive digital marketing
          solutions to make your life easier.
        </Text>
      </div>
      <div className="grid lg:grid-cols-3 mt-5">
        {servicesForServicesPage.map((item) => (
          <ServiceCard
            key={item.key}
            title={item.title}
            description={item.discription}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
};

export default OtherSection;
