import Link from "next/link";
import React from "react";

export default function CartSubTotalCard({ subTotal }) {
  const shipping = 10.0;
  const tax = 0.0;
  const totalPrice = (
    Number(subTotal) +
    Number(shipping) +
    Number(tax)
  ).toFixed(2);
  return (
    <div className="md:col-span-4 col-span-full sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 dark:text-slate-100 overflow-hidden p-5 font-bold">
      <h2 className="text-2xl pb-3">Cart Total</h2>
      {/* Subtotal */}
      <div className="flex items-center justify-between border-b border-slate-500 pb-6">
        <span className="text-2xl py-3">Subtotal</span>
        <span>Rs {subTotal}</span>
      </div>
      {/* Tax */}
      <div className="flex items-center justify-between  pb-4 mt-2">
        <span className="text-2xl py-3">Tax</span>
        <span>Rs {tax}</span>
      </div>
      {/* Shipping */}
      <div className="flex items-center justify-between  pb-4">
        <span className="text-2xl py-3">Shipping</span>
        <span>Rs {shipping}</span>
      </div>
      <p className="border-b border-slate-500 pb-6 text-slate-400 font-normal">
        We only charge for shipping when you have over 2Kg items
      </p>
      {/* total */}
      <div className="flex items-center justify-between  py-4 font-bold">
        <span className="text-2xl py-3">Total</span>
        <span>Rs {totalPrice}</span>
      </div>
      {/* payment */}
      <Link
        href="#"
        className="bg-slate-200 text-slate-900 rounded-lg py-2 px-4 font-normal"
      >
        Continue to Payment
      </Link>
    </div>
  );
}
