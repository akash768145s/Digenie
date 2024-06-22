import ServiceCard from "@/components/design/serviceCard";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import Link from "next/link";

import { servicesForHomePage } from "@/data/services";

const ServicesSection = () => {
  return (
    <section className="px-5 xl:px-48 py-24 text-center">
      <div className="grid lg:grid-cols-2 items-center mt-5">
        <div className="text-left xl:w-4/5">
          <Text className="mb-4 text-5xl" variant="h1">
            What We Offer
          </Text>
          <Text variant="body1" color="text-tertiary">
            We live in a digital era where the best way to reach a larger market
            is through search engines and social media. However, with changing
            SEO parameters and AI innovations, navigating the digital realm can
            be quite tricky. That&apos;s why we offer comprehensive digital
            marketing solutions to make your life easier.
          </Text>
          <Link href="/services">
            <Button className="my-10">Explore more</Button>
          </Link>
        </div>
        <div>
          <div className="grid  xl:grid-cols-2">
            {servicesForHomePage.map((item) => (
              <ServiceCard
                key={item.key}
                title={item.title}
                description={item.discription}
                icon={item.icon}
                color={item.color}
              />
            ))}
          </div>
          {/* <Link href="/services">
            <Button className="my-10">See More</Button>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
