import CartBanner from "@/components/checkout/CartBanner";
import StepForm from "@/components/checkout/StepForm";
import Steps from "@/components/checkout/Steps";
import { ShoppingBag } from "lucide-react";
import React from "react";

export default function page() {
  const steps = [
    {
      number: 1,
      title: "Personal Details",
    },
    {
      number: 2,
      title: "Shipping Details",
    },
    {
      number: 3,
      title: "Payment Method",
    },
    {
      number: 4,
      title: "Order Summary",
    },
  ];
  return (
    <div className="bg-slate-200 dark:bg-slate-950 min-h-screen">
      <div className="max-w-3xl mx-auto my-6 border border-slate-700 p-6 rounded-lg">
        {/* STEPS  */}
        <Steps steps={steps} />
        {/* Banner and form */}
        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          {/* banner */}
          <CartBanner />

          {/* FORM */}
          <StepForm />
        </div>
      </div>
    </div>
  );
}
