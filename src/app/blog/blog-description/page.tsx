"use client";

import { Text } from "@/components/ui/text";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import DateIcon from "@/../public/icons/date.svg";

const BlogDetails = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const image = searchParams.get("image");
  const createdAtDate = searchParams.get("createdAtDate");
  return (
    <Suspense>
      <main>
        <section>
          <div className="bg-[#FBF9F9] text-center py-20 px-2 xl:px-20">
            <Text className="mb-10" variant="h1">
              {title}
            </Text>
            <div className="flex justify-center items-center space-x-2">
              <Image src={DateIcon} alt="" width={20} height={20} />
              <Text variant="body1">{createdAtDate}</Text>
            </div>
          </div>
          <div className="my-20 w-4/5 xl:w-1/2 m-auto">
            <Image
              className="w-full rounded-md h-96 object-cover"
              src={image || ""}
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="my-20 px-5 lg:px:20 xl:px-60">
            <Text className="text-justify" variant="body1">
              {description}
            </Text>
          </div>
        </section>
      </main>
    </Suspense>
  );
};

export default BlogDetails;
