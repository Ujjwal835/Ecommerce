"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CategoryCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const slides = [{}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="parent">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        responsive={responsive}
        autoPlay={true}
        dotListClass="custom-dot-list-style"
        partialVisbile={true}
        ssr={true} // means to render carousel on server-side.
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}

        itemClass="px-4"
      >
        {slides.map((slide, i) => {
          return (
            <Link href="#" className="rounded-lg mr-3 bg-red-400" key={i}>
              <Image
                src="/vegetables.jpg"
                alt="vegetables"
                width={556}
                height={556}
                className="w-full"
              />
              <h2 className="text-center text-slate-800 mt-2 dark:text-slate-200 ">
                Vegetables
              </h2>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
}
