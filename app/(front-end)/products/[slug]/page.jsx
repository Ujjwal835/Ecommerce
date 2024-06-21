import Breadcrumb from "@/components/frontend/Breadcrumb";
import { BaggageClaim, Minus, Plus, Share2, Tag } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ProductDetailPage({ params: { slug } }) {
  return (
    <div>
      <Breadcrumb />
      <div className="grid grid-cols-12 gap-8">
        {/* image first column */}
        <div className="col-span-3">
          <Image
            src="/vegetables.jpg"
            alt="vegetables"
            width={556}
            height={556}
            className="w-full"
          />
        </div>
        {/* Middle Column */}
        <div className="col-span-6">
          {/* title and Share button */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl lg:text-3xl font-semibold">Vegetables</h2>
            <button>
              <Share2 />
            </button>
          </div>
          {/* Description Sku Stock */}
          <div className="border-b border-gray-500">
            <p className="py-2 ">
              Fresh vegetables. Delicious to Eat. Enjoy Hot Serving meal
            </p>
            <div className="flex items-center gap-8 mb-4">
              <p>SKU : 3233232</p>
              <p className="bg-lime-200 py-1.5 px-4 rounded-full text-slate-900">
                <b>Stock</b> : 50
              </p>
            </div>
          </div>
          {/* Price and Discount */}
          <div className="flex items-center gap-4 pt-4 justify-between border-b border-gray-500 pb-4">
            <div className="flex items-center gap-4 pt-4">
              <h4 className="text-2xl">Rs 49</h4>
              <del className="text-slate-400 text-sm">Rs 55</del>
            </div>
            <p className="flex items-center">
              <Tag className="w-5 h-5 text-slate-400 me-2" />
              <span>Save 50% right now</span>
            </p>
          </div>
          {/* Count Increase and Add to cart button */}
          <div className="flex justify-between items-center py-6">
            {/* Count Increase */}
            <div className=" rounded-xl border border-gray-400 flex gap-3 items-center ">
              <button className="border-r border-gray-400 py-2 px-4">
                <Minus />
              </button>
              <p className="flex-grow py-2 px-4">1</p>
              <button className="border-l border-gray-400 py-2 px-4">
                <Plus />
              </button>
            </div>
            {/* Add to Cart */}
            <button className="flex items-center space-x-2 bg-lime-600 px-4 py-2 rounded text-white">
              <BaggageClaim />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
        {/* Last Column */}
        <div className="col-span-3 hidden sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden">
          <h2 className="bg-slate-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 py-3 px-6 font-semibold text-slate-800 dark:text-slate-100  ">
            DELIEVERY & RETURNS
          </h2>
        </div>
      </div>
    </div>
  );
}
