import Link from "next/link";
import { Button } from "../ui/button";
import { Text } from "../ui/text";

const CTA = () => {
  return (
    <section className="cta-bg text-center bg-no-repeat bg-cover bg-center bg-fixed z-10 ">
      <div className="backdrop-brightness-50 px-5 xl:px-72 py-10 xl:py-20 ">
        <Text className="my-5" variant="body1" color="text-white">
          Why Worry When You Have Your Own Marketing Genie!
        </Text>
        <Text className="my-3" variant="h1" color="text-white">
          Your Wish Is Our Command, Contact Us Today to Know What We Can Do for
          You!
        </Text>
        <Link href="/home#contact-form">
          <Button className="my-5 hover:bg-subColor border-none">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
