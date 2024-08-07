import Breadcrumb from "@/components/frontend/Breadcrumb";
import CategoryCarousel from "@/components/frontend/CategoryCarousel";
import { getData } from "@/lib/getData";
import { BaggageClaim, Minus, Plus, Send, Share2, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProductDetailPage({ params: { slug } }) {
  const product = await getData(`products/product/${slug}`);
  const category = await getData(`categories/${product.categoryId}`);

  return (
    <div>
      {/* 1st layer bread crumbs */}
      <Breadcrumb />
      {/* 2nd layer consist 3 columns image/ description/delivery and returns */}
      <div className="grid grid-cols-12 gap-8">
        {/* image first column */}
        <div className="col-span-3">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={556}
            height={556}
            className="w-full"
          />
        </div>
        {/* Middle Column */}
        <div className="col-span-6">
          {/* title and Share button */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl lg:text-3xl font-semibold">
              {product.title}
            </h2>
            <button>
              <Share2 />
            </button>
          </div>
          {/* Description Sku Stock */}
          <div className="border-b border-gray-500">
            <p className="py-2 ">{product.description}</p>
            <div className="flex items-center gap-8 mb-4">
              <p>SKU : {product.sku}</p>
              <p className="bg-lime-200 py-1.5 px-4 rounded-full text-slate-900">
                <b>Stock</b> : {product.productStock}
              </p>
            </div>
          </div>
          {/* Price and Discount */}
          <div className="flex items-center gap-4 pt-4 justify-between border-b border-gray-500 pb-4">
            <div className="flex items-center gap-4 ">
              <h4 className="text-2xl">Rs {product.salePrice}</h4>
              <del className="text-slate-400 text-sm">
                Rs {product.productPrice}
              </del>
            </div>
            <p className="flex items-center">
              <Tag className="w-5 h-5 text-slate-400 me-2" />
              <span>
                Save{" "}
                {((product.productPrice - product.salePrice) * 100) /
                  product.productPrice}
                % right now
              </span>
              {/* {((product.productPrice-product.salePrice)*100)/(product.productPrice)} */}
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
            DELIVERY & RETURNS
          </h2>
          <div className="p-4">
            <div className="flex rounded-lg py-2 px-4 bg-orange-400 text-slate-50 items-center gap-3 ">
              <span>Jindal Express</span>
              <Send />
            </div>
            <div className="py-3 text-slate-100 border-b border-gray-500">
              Eligible for Free Delivery.
              <Link href="#">View Details</Link>
            </div>
            <h2 className="text-slate-200 py-2">Choose Your Location</h2>

            <div className=" pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            <div className=" pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            <div className=" pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd Layer Similar Products */}
      <div className="bg-white dark:bg-slate-700 my-8 rounded-xl p-4">
        <h2 className="mb-4 text-xl font-semibold text-slate-200 ml-3">
          Similar Products
        </h2>
        <CategoryCarousel products={category.products} />
      </div>
    </div>
  );
}
