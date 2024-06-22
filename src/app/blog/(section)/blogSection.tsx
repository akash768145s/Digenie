"use client";

import BlogCard from "@/components/design/blogCard";
import axios from "axios";
import { useEffect, useState } from "react";

const BlogSections = () => {
  type BlogDataType = {
    _id: string;
    title: string;
    description: string;
    imgUrl: string;
    createdAt: string;
  };
  const [blog, setBlog] = useState([]);

  const getTypes = () => {
    axios
      .get("https://server-otmf.onrender.com/blog")
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTypes();
  }, []);

  return (
    <section className="grid lg:grid-cols-2 xl:grid-cols-3 py-10 xl:px-20">
      {blog.map((item: BlogDataType) => {
        return (
          <>
            <BlogCard
              key={item._id}
              id={item._id}
              title={item?.title}
              description={item?.description}
              image={item?.imgUrl}
              createdAtDate={item?.createdAt.slice(0, 10)}
              createdAtTime={item?.createdAt.slice(14, 19)}
            />
          </>
        );
      })}
    </section>
  );
};

export default BlogSections;
