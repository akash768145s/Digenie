import Image from "next/image";
import { Text } from "../ui/text";

type UniversalHeroSectionProps = {
  page: string;
  image: string;
};

const UniversalHeroSection = (props: UniversalHeroSectionProps) => {
  return (
    <section>
      <div className="relative h-80">
        <Image
          src={props.image}
          alt="hero"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="text-center py-32">
            <Text variant="h1" color="text-white">
              {props.page}
            </Text>
            <Text variant="sub1" color="text-white">
              Home / {props.page}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversalHeroSection;
