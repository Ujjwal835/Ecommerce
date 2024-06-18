"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import { CircleDollarSign, FolderSync, HelpCircle } from "lucide-react";
import sale from "../../public/sale.gif";

export default function Hero() {
  const categories = [{},{} , {}, {}, {},{},{} , {}, {}, {}];
  return (
    <div className="grid grid-cols-12 gap-8 mb-6">
      {/* categories */}
      <div className="hidden sm:block sm:col-span-3 bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden">
        <h2 className="bg-slate-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 py-3 px-6 font-semibold text-slate-800 dark:text-slate-100  ">
          Shop By Category
        </h2>
        <div
          className="py-3 px-6 overflow-y-auto flex flex-col gap-2 "
          style={{ maxHeight: "400px" }}
        >
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
                  className="w-10 h-10 rounded-full object-cover border border-lime-300"
                />
                <span className="text-sm">Vegetables</span>
              </Link>
            );
          })}
        </div>
      </div>
      {/* banners */}
      <div className="col-span-full sm:col-span-7 rounded-md">
        <HeroCarousel />
      </div>
      {/* help and sale advertisement */}
      <div className="col-span-2 hidden sm:block bg-white p-3 dark:bg-slate-800 rounded-lg">
        <Link href="#" className="flex items-center space-x-1 mb-3">
          <HelpCircle className="shrink-0 w-5 h-5 dark:text-lime-500 text-slate-900" />
          <div className="flex flex-col">
            <h2 className="uppercase text-sm">Help Center</h2>
            <p className="text-[0.7rem]">Guide To Customer Care</p>
          </div>
        </Link>
        <Link href="#" className="flex items-center space-x-1 mb-3">
          <FolderSync className="shrink-0 w-5 h-5 dark:text-lime-500 text-slate-900" />
          <div className="flex flex-col">
            <h2 className="uppercase text-sm">Easy Return</h2>
            <p className="text-[0.7rem]">Quick Return</p>
          </div>
        </Link>
        <Link
          href="/register-farmer"
          className="flex items-center space-x-1 mb-6 "
        >
          <CircleDollarSign className="shrink-0 w-5 h-5 dark:text-lime-500 text-slate-900" />
          <div className="flex flex-col">
            <h2 className="uppercase text-sm">Sell on JindalShop</h2>
            <p className="text-[0.7rem]">Million of Visitors</p>
          </div>
        </Link>
        <Image src={sale} alt="Sale" className="w-full rounded-lg" />
      </div>
    </div>
  );
}
