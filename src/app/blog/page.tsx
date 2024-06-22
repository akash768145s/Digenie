import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Blogs | Marketing Agency | India",
  description:
    "From the latest digital marketing trends to digital marketing concepts, keep an eye on our blog to learn more about the marketing world. Contact us!",
};

import UniversalHeroSection from "@/components/design/universalHeroSection";
import BlogSection from "./(section)/blogSection";
import Banner from "@/../public/images/blog/banner.jpg";

const Blog = () => {
  return (
    <main>
      <UniversalHeroSection key={0} page="Blog" image={Banner.src} />
      <BlogSection />
    </main>
  );
};

export default Blog;
