import Image from "next/image";
import { Text } from "../ui/text";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

const SpecialSectionCard = (props: ServiceCardProps) => {
  return (
    <div className="mx-3 my-4 rounded-xl p-5 text-center bg-white shadow-md hover:-translate-y-5 duration-300">
      <div className="my-3 p-4 w-fit m-auto rounded-full bg-containerBackground">
        <Image src={props.icon} alt="SEO" width={30} height={30} />
      </div>
      <Text className="my-5" variant="h3">
        {props.title}
      </Text>
      <Text className="my-3" variant="body1" color="text-tertiary">
        {props.description}
      </Text>
    </div>
  );
};

export default SpecialSectionCard;
