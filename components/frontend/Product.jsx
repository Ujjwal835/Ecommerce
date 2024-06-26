"use client";
import { addToCart } from "@/redux/slices/cartSlice";
import { BaggageClaim } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function Product({ product }) {
  const dispatch = useDispatch();
  function handleAddToCart() {
    // dispatch the reducer
    dispatch(addToCart(product));
    toast.success("Item Added Successfully");
  }
  return (
    <div className="rounded-lg mr-3 bg-white dark:bg-slate-900 overflow-hidden border shadow">
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
          <button
            onClick={() => handleAddToCart()}
            className="flex items-center space-x-2 bg-lime-600 px-4 py-2 rounded text-white"
          >
            <BaggageClaim />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
