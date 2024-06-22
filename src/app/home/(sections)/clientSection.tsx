"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

import Image from "next/image";

import { clients } from "@/data/client";
import { Text } from "@/components/ui/text";
import TextBorder from "@/components/ui/textBorder";

const ClientSection = () => {
  return (
    <section className="bg-[#FBF9F9] p-10">
      <div className="w-11/12 lg:w-1/2 mx-auto mb-14 text-center">
        <Text className="text-5xl" variant="h1">
          Our Clients
        </Text>
        <TextBorder />
      </div>

      <Swiper
        className=""
        spaceBetween={80}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
      >
        {clients.map((item) => (
          <SwiperSlide key={item.key}>
            <Image
              className="w-40 m-auto"
              src={item.logo}
              alt=""
              width={200}
              height={200}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientSection;
