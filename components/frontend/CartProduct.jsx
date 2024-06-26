"use client";
import { removeFromCart } from "@/redux/slices/cartSlice";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

export default function CartProduct({ cartItem }) {
  const dispatch = useDispatch();
  function handleCartItemDelete(cartId) {
    // invoke dispatch the removeFromCart Reducer
    dispatch(removeFromCart(cartId));
  }
  return (
    <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm mb-4">
      {/* Product Column Contain Image */}
      <div className="flex items-center gap-3">
        <Image
          src={cartItem.imageUrl}
          width={249}
          height={249}
          alt={cartItem.title}
          className="rounded-xl w-20 h-20"
        />
        <div className="flex flex-col">
          <h2>{cartItem.title}</h2>
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
        <h4>Rs {cartItem.salePrice}</h4>
        <button onClick={() => handleCartItemDelete(cartItem.id)}>
          <Trash2 className="w-5 h-5 text-red-600" />
        </button>
      </div>
      {/* Table row end */}
    </div>
  );
}
