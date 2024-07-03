"use client";
import React from "react";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";
import { Circle, CreditCard, HeartHandshake, Truck } from "lucide-react";

export default function PaymentMethodForm() {
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const paymentMethod = watch("paymentMethod");
  async function processData(data) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">
        Payment Method
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {/*payment method */}

        <div className="col-span-full">
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
            Which Payment Method do you Prefer ?
          </h3>
          <ul className="grid w-full gap-6 md:grid-cols-2">
            <li>
              <input
                {...register("paymentMethod", { required: true })}
                type="radio"
                id="cashPayment"
                name="paymentMethod"
                value="cash"
                className="hidden peer"
              />
              <label
                htmlFor="cashPayment"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* design */}
                <div className="flex gap-2 items-center">
                  <HeartHandshake className="w-8 h-8 ms-3 flex-shrink-0" />
                  <div className="">
                    <p>Cash on Delivery</p>
                  </div>
                </div>
                <Circle
                  className={`w-5 h-5 ms-3 flex-shrink-0 ${
                    paymentMethod === "cash" ? "fill-current text-blue-600" : ""
                  }`}
                />
              </label>
            </li>
            <li>
              <input
                {...register("paymentMethod", { required: true })}
                type="radio"
                id="onlinePayment"
                name="paymentMethod"
                value="online"
                className="hidden peer"
              />
              <label
                htmlFor="onlinePayment"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* design */}
                <div className="flex gap-2 items-center">
                  <CreditCard className="w-8 h-8 ms-3 flex-shrink-0" />
                  <div className="">
                    <p>Online Payment</p>
                  </div>
                </div>
                <Circle
                  className={`w-5 h-5 ms-3 flex-shrink-0 ${
                    paymentMethod === "online"
                      ? "fill-current text-blue-600"
                      : ""
                  }`}
                />
              </label>
            </li>
          </ul>
        </div>
      </div>
      <NavButtons />
    </form>
  );
}
