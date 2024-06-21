"use client";
import { BaggageClaim } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CategoryCarousel({ products }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
        {products.map((product, i) => {
          return (
            <div
              className="rounded-lg mr-3 bg-white dark:bg-slate-900 overflow-hidden border shadow"
              key={i}
            >
              <Link href={`/products/${product.slug}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={556}
                  height={556}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="px-4">
                <Link href={`/products/${product.slug}`}>
                  <h2 className="text-center my-2 text-slate-800  dark:text-slate-200 font-semibold ">
                    {product.title}
                  </h2>
                </Link>
                <div className="flex justify-between items-center gap-4 pb-3">
                  <p className="text-slate-800  dark:text-slate-200">
                    {" "}
                    ₹ {product.salePrice}
                  </p>
                  <button className="flex items-center space-x-2 bg-lime-600 px-4 py-2 rounded text-white">
                    <BaggageClaim />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
