import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function SidebarCategories() {
  const categories = await getData("categories");

  return (
    <div className="hidden sm:block sm:col-span-3 bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden">
      <h2 className="bg-slate-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 py-3 px-6 font-semibold text-slate-800 dark:text-slate-100  ">
        Shop By Category ({categories.length})
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
                src={category.imageUrl}
                width={556}
                height={556}
                alt={category.title}
                className="w-10 h-10 rounded-full object-cover border border-lime-300"
              />
              <span className="text-sm">{category.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
