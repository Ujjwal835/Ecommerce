"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BannerSliderBtns from "./BannerSliderBtns";

const banners = [
  {
    title: "Vegetables",
    image: "/banners/vegetables.jpg",
  },
  {
    title: "Breads",
    image: "/banners/breads.jpg",
  },
  {
    title: "Dairy",
    image: "/banners/dairy.jpg",
  },
  {
    title: "Drinks",
    image: "/banners/drinks.jpg",
  },
  {
    title: "Fruits",
    image: "/banners/fruits.jpg",
  },
  {
    title: "Grocery",
    image: "/banners/grocery.jpg",
  },
  {
    title: "Spices",
    image: "/banners/spices.jpg",
  },
  {
    title: "Pulses",
    image: "/banners/pulses.jpg",
  },
];
export default function HeroCarousel() {
  const [banner, setBanner] = useState(banners[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setBanner(banners[currentIndex]);
  };
  return (
    <Swiper
      spaceBetween={30}
      modules={[Pagination]}
      slidesPerView={1}
      className=""
      onSlideChange={handleSlideChange}
      pagination={{ clickable: true }}
    >
      {banners.map((banner, index) => {
        return (
          <SwiperSlide key={index} className="w-full">
            <div className="h-[490px] relative group flex justify-center items-center bg-pink-50/20 rounded-md">
              {/* image */}
              <div className="relative w-full h-full">
                <Link href="/dashboard">
                  <Image
                    src={banner.image}
                    fill
                    className="object-cover w-full"
                    alt={banner.title}
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}

      {/* slider button */}
      <BannerSliderBtns
        containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 w-full justify-between  xl:justify-between"
        btnStyles="bg-slate-800 hover:bg-slate-500 text-lime-500 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full "
        iconsStyles="text-4xl text-slate-700 dark:text-slate-50 transition-colors duration-300 hover:text-lime-500 dark:hover:text-lime-500"
      />
    </Swiper>
  );
}
