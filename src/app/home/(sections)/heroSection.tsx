import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import Image from "next/image";
import HeroImage from "@/../public/images/home/hero-image.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="grid lg:grid-cols-2 items-center mt-20 mb-36 px-0.1 xl:px-52">
      <div className="w-11/12 m-auto">
        <Text className="my-4 text-5xl" variant="h1" color="text-primary">
          Digenie <br />
          The Digital Genie
        </Text>
        <Text variant="sub1">Your Marketing Wishes Will Come True!</Text>
        <Text className="my-4" variant="body1" color="text-tertiary">
          From content marketing to website development, we are the genie that
          grants all your digital marketing wishes.
        </Text>
        <div className="space-x-5 xl:space-x-7">
          <Link href="/services">
            <Button
              className="my-1 hover:bg-subColor border-none"
              variant="default"
            >
              Our Services
            </Button>
          </Link>
          <Link href="/home#contact-form">
            <Button
              className="my-5 bg-subColor hover:bg-secondary border-none"
              variant="outline"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <Image
          className="m-auto my-10 lg:my-0"
          src={HeroImage}
          alt="Digital Marketing Agency"
          width={700}
          height={100}
        />
      </div>
    </section>
  );
};

export default HeroSection;
