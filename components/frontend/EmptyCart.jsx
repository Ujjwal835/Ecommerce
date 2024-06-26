import Link from "next/link";
import React from "react";

export default function EmptyCart() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="md:text-2xl">
        Your Cart is Empty{" "}
        <Link href="/" className="text-slate-800 dark:text-lime-500">
          Start Shopping
        </Link>
      </p>
    </div>
  );
}
