import Breadcrumb from "@/components/frontend/Breadcrumb";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cart() {
  return (
    <div>
      <Breadcrumb />
      <div className="grid grid-cols-12 gap-14">
        {/* will work in 2 columns therefore use grid */}
        {/* 1st column contain details */}
        <div className="col-span-8">
          <h2 className="py-2 mb-6 text-2xl">Your Cart</h2>
          {/* Table Header */}
          <div className="flex items-center justify-between border-b border-slate-400 text-slate-400 pb-3 font-semibold text-sm mb-4">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
          {/* Table header End */}
          {/* Table Content */}
          <div className="">
            {/* Table row 1 */}
            <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm mb-4">
              {/* Product Column Contain Image */}
              <div className="flex items-center gap-3">
                <Image
                  src="/vegetables.jpg"
                  width={249}
                  height={249}
                  alt="Alt Text"
                  className="rounded-xl w-20 h-20"
                />
                <div className="flex flex-col">
                  <h2>Apple Watch Series 7 -44mm</h2>
                  <small>Golden</small>
                </div>
              </div>
              {/* Quantity Column Contain Incrementer */}
              <div className=" rounded-xl border border-gray-400 flex gap-3 items-center ">
                <button className="border-r border-gray-400 py-2 px-4">
                  <Minus />
                </button>
                <p className="flex-grow py-2 px-4">1</p>
                <button className="border-l border-gray-400 py-2 px-4">
                  <Plus />
                </button>
              </div>
              {/* Price Column */}
              <div className="flex items-center gap-2">
                <h4>Rs 254</h4>
                <button>
                  <Trash2 className="w-5 h-5 text-red-600" />
                </button>
              </div>
              {/* Table row end */}
            </div>
            {/* Table row 2 */}
            <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm  mb-4">
              {/* Product Column Contain Image */}
              <div className="flex items-center gap-3">
                <Image
                  src="/vegetables.jpg"
                  width={249}
                  height={249}
                  alt="Alt Text"
                  className="rounded-xl w-20 h-20"
                />
                <div className="flex flex-col">
                  <h2>Apple Watch Series 7 -44mm</h2>
                  <small>Golden</small>
                </div>
              </div>
              {/* Quantity Column Contain Incrementer */}
              <div className=" rounded-xl border border-gray-400 flex gap-3 items-center ">
                <button className="border-r border-gray-400 py-2 px-4">
                  <Minus />
                </button>
                <p className="flex-grow py-2 px-4">1</p>
                <button className="border-l border-gray-400 py-2 px-4">
                  <Plus />
                </button>
              </div>
              {/* Price Column */}
              <div className="flex items-center gap-2">
                <h4>Rs 254</h4>
                <button>
                  <Trash2 className="w-5 h-5 text-red-600" />
                </button>
              </div>
              {/* Table row end */}
            </div>
          </div>
          {/* Table Content End */}
          {/* Coupon  */}
          <div className="flex items-center gap-2 py-8">
            <input
              type="text"
              id="default-search"
              className="block p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/2"
              placeholder="Enter Coupon"
              required
            />
            <button className="shrink-0 py-2.5 px-4 rounded-lg bg-lime-600">
              Apply Coupon
            </button>
          </div>
        </div>
        {/* 1st Column End */}
        {/* 2nd column Checkout details */}
        <div className="col-span-4 sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 dark:text-slate-100 overflow-hidden hidden p-5 font-bold">
          <h2 className="text-2xl pb-3">Cart Total</h2>
          {/* Subtotal */}
          <div className="flex items-center justify-between border-b border-slate-500 pb-6">
            <span className="text-2xl py-3">Subtotal</span>
            <span>Rs 589</span>
          </div>
          {/* Tax */}
          <div className="flex items-center justify-between  pb-4 mt-2">
            <span className="text-2xl py-3">Tax</span>
            <span>Rs 0</span>
          </div>
          {/* Shipping */}
          <div className="flex items-center justify-between  pb-4">
            <span className="text-2xl py-3">Shipping</span>
            <span>Rs 10</span>
          </div>
          <p className="border-b border-slate-500 pb-6 text-slate-400 font-normal">
            We only charge for shipping when you have over 2Kg items
          </p>
          {/* total */}
          <div className="flex items-center justify-between  py-4 font-bold">
            <span className="text-2xl py-3">Total</span>
            <span>Rs 1000</span>
          </div>
          {/* payment */}
          <Link
            href="#"
            className="bg-slate-200 text-slate-900 rounded-lg py-2 px-4 font-normal"
          >
            Continue to Payment
          </Link>
        </div>
      </div>
    </div>
  );
}
