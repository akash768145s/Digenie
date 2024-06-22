import { Text } from "@/components/ui/text";
import TextBorder from "@/components/ui/textBorder";

import { services } from "@/data/services";
import Image from "next/image";

const servicesSection = () => {
  return (
    <section className="xl:px-20 xl:py-5 text-center">
      <div className="w-11/12 lg:w-1/2 mx-auto mt-10 mb-14 text-center">
        <Text className="text-5xl" variant="h1">
          Our Services
        </Text>
        <TextBorder />
        <Text variant="body1" color="text-tertiary">
          Digenie is the one-stop-shop for all your digital marketing needs! We
          combine intensive research with the latest digital marketing trends to
          create solutions that&apos;ll help you generate more leads.
        </Text>
      </div>
      <div>
        {services.map((item) => (
          <div
            key={item.key}
            className="grid xl:grid-cols-2 items-center px-2 xl:px-10 py-8 my-20 mx-5 xl:mx-10 text-justify"
          >
            <div className={`${item.order}`}>
              <Text variant="h1">{item.title}</Text>
              <Text className="my-5" variant="h3">
                {item.question}
              </Text>
              <Text>{item.answer}</Text>
            </div>
            <div className="xl:px-10">
              <Image
                className="rounded-md hover:opacity-50 mt-10 xl:mb-0"
                src={item.image ?? ""}
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default servicesSection;
