"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  const categories = [{}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="flex gap-8 mb-6">
      <div className="w-1/3 bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden ">
        <h2 className="bg-slate-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 py-3 px-6 font-semibold text-slate-800 dark:text-slate-100  ">
          Shop By Category
        </h2>
        <div className="py-3 px-6 h-auto overflow-y-auto flex flex-col gap-2 ">
          {categories.map((category, i) => {
            return (
              <Link
                key={i}
                href="#"
                className="flex items-center gap-3 hover:bg-slate-50 duration-500 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded"
              >
                <Image
                  src="/vegetables.jpg"
                  width={556}
                  height={556}
                  alt="Vegetables"
                  className="w-12 h-12 rounded-full object-cover border border-lime-300"
                />
                <span className="text-sm">Vegetables</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-2/3 bg-blue-500 rounded-md">
        <HeroCarousel />
      </div>
    </div>
  );
}
