import Image from "next/image";
import { Text } from "../ui/text";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="border mx-3 my-4 rounded p-5 text-center bg-white shadow-md hover:-translate-y-3 delay-75 duration-500 hover:rounded-ss-3xl hover:rounded-ee-3xl hover:bg-opacity-5">
      <div className={`my-5 p-4 w-fit m-auto rounded-full ${props.color}`}>
        <Image src={props.icon} alt={props.title} width={30} height={30} />
      </div>
      <Text className="my-3" variant="h3">
        {props.title}
      </Text>
      <Text className="my-3" variant="body1" color="text-tertiary">
        {props.description}
      </Text>
    </div>
  );
};

export default ServiceCard;
