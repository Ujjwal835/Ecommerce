"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function TrainingCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
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
            <div
              className="rounded-lg mr-3 bg-slate-100 dark:bg-slate-900 overflow-hidden"
              key={i}
            >
              <Link href="#">
                <Image
                  src="/banners/pulses.jpg"
                  alt="vegetables"
                  width={556}
                  height={556}
                  className="w-full"
                />
              </Link>
              <h2 className="text-center text-slate-800 my-2 dark:text-slate-200 text-xl">
                Pulses
              </h2>
              <p className="px-4 line-clamp-3 text-slate-800 dark:text-slate-300 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              </p>
              <div className="flex justify-between items-center px-4 py-2 ">
                <Link
                  href="#"
                  className="bg-lime-900 hover:bg-lime-800 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
                >
                  Read More
                </Link>
                <Link href="#" className="text-slate-800 dark:text-slate-100">
                  Talk to the Consultant
                </Link>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
