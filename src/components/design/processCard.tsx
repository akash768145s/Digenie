import Image from "next/image";
import { Text } from "../ui/text";

type ProcessCardProps = {
  title: string;
  description: string;
  icon: string;
};

const ProcessCard = (props: ProcessCardProps) => {
  return (
    <div className="text-center xl:px-10 my-10 xl:my-0">
      <div className="w-24 border m-auto p-5 rounded-full hover:border-secondary">
        <Image
          className="w-14 m-auto"
          src={props.icon}
          width={100}
          height={100}
          alt=""
        />
      </div>
      <Text variant="h4" className="my-6">
        {props.title}
      </Text>
      <Text variant="body2" color="text-tertiary">
        {props.description}
      </Text>
    </div>
  );
};

export default ProcessCard;
