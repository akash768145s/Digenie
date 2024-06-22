import Image from "next/image";
import { Text } from "../ui/text";
import Link from "next/link";

type BlogCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  createdAtDate: string;
  createdAtTime: string;
};

const BlogCard = (props: BlogCardProps) => {
  return (
    <>
      <Link
        href={{
          pathname: `/blog/blog-description`,
          query: {
            id: props.id,
            title: props.title,
            description: props.description,
            image: props.image,
            createdAtDate: props.createdAtDate,
            createdAtTime: props.createdAtTime,
          },
        }}
      >
        {/* `/blog/${props.id}` */}
        <div className="bg-white shadow-sm hover:shadow-md p-5 m-5 rounded-lg hover:scale-110 duration-200">
          <Image
            className="w-full rounded-md h-80 object-cover"
            src={props.image}
            alt={props.title}
            width={200}
            height={200}
          />
          <div>
            <Text className="my-3" variant="h4">
              {props.title}
            </Text>

            <Text
              className="line-clamp-2"
              variant="body2"
              color="text-tertiary"
            >
              {props.description}
            </Text>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
