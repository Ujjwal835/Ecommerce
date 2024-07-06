"use client";
import Breadcrumb from "@/components/frontend/Breadcrumb";
import CartItems from "@/components/frontend/CartItems";
import CartSubTotalCard from "@/components/frontend/CartSubTotalCard";
import EmptyCart from "@/components/frontend/EmptyCart";
import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart);
  const subTotal = cartItems.reduce((acc, currentItem) => {
    return acc + currentItem.salePrice * currentItem.qty;
  }, 0);

  console.log(subTotal);
  console.log(cartItems);
  return (
    <div>
      <Breadcrumb />
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-12 gap-6 md:gap-14">
          {/* will work in 2 columns therefore use grid */}
          {/* 1st column contain details */}
          <CartItems cartItems={cartItems} />
          {/* 1st Column End */}
          {/* 2nd column Checkout details */}
          <CartSubTotalCard subTotal={subTotal} />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
