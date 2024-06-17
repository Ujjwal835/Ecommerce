"use client";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "nuka-carousel";
import React from "react";

export default function HeroCarousel() {
  return (
    <Carousel
      wrapMode="wrap"
      autoplay
      showArrows
      className="rounded-md overflow-hidden object-cover"
    >
      <Link href="#" className="">
        <Image width={712} height={384} src="/banners/fruits.jpg" className="w-full" />
      </Link>
      <img src="/banners/vegetables.jpg" className="w-full" />
      <img src="/banners/breads.jpg" className="w-full" />
      <img src="/banners/dairy.jpg" className="w-full" />
      <img src="/banners/drinks.jpg" className="w-full" />
      <img src="/banners/grocery.jpg" className="w-full" />
      <img src="/banners/pulses.jpg" className="w-full" />
      <img src="/banners/spices.jpg" className="w-full" />
    </Carousel>
  );
}
