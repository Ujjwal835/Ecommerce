import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import { CircleDollarSign, FolderSync, HelpCircle } from "lucide-react";
import sale from "../../public/sale.gif";
import SidebarCategories from "./SidebarCategories";
import { getData } from "@/lib/getData";

export default async function Hero() {
  const banners = await getData("banners");
  return (
    <div className="grid grid-cols-12 gap-8 mb-6">
      {/* categories */}
      <SidebarCategories />
      {/* banners */}
      <div className="col-span-full sm:col-span-7 rounded-md">
        <HeroCarousel banners={banners} />
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
