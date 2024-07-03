"use client";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import React from "react";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";
import { Circle, Truck } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateCheckoutFormData,
} from "@/redux/slices/checkoutSlice";

export default function ShippingDetailsForm() {
  const currentStep = useSelector((store) => store.checkout.currentStep);
  const existingFormData = useSelector(
    (store) => store.checkout.checkoutFormData
  );
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...existingFormData,
    },
  });
  const shippingCost = watch("shippingCost");
  const dispatch = useDispatch();
  async function processData(data) {
    // update the checkout data
    dispatch(updateCheckoutFormData(data));
    // update the current state
    dispatch(setCurrentStep(currentStep + 1));
  }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">
        Shipping Details
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Street Address"
          name="streetAddress"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="City"
          name="city"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="District"
          name="district"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Zip Code"
          name="zipCode"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="State"
          name="state"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Country"
          name="country"
          register={register}
          errors={errors}
          className="w-full"
        />

        {/* shipping cost */}

        <div className="col-span-full">
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
            Shipping Type ?
          </h3>
          <ul className="grid w-full gap-6 md:grid-cols-2">
            <li>
              <input
                {...register("shippingCost", { required: true })}
                type="radio"
                id="cheap"
                name="shippingCost"
                value="200"
                className="hidden peer"
              />
              <label
                htmlFor="cheap"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* design */}
                <div className="flex gap-2 items-center">
                  <Truck className="w-8 h-8 ms-3 flex-shrink-0" />
                  <div className="">
                    <p>Normal Delivery</p>
                    <p>Delivery Cost: Rs 200 </p>
                  </div>
                </div>
                <Circle
                  className={`w-5 h-5 ms-3 flex-shrink-0 ${
                    shippingCost === "200" ? "fill-current text-blue-600" : ""
                  }`}
                />
              </label>
            </li>
            <li>
              <input
                {...register("shippingCost", { required: true })}
                type="radio"
                id="expensive"
                name="shippingCost"
                value="500"
                className="hidden peer"
              />
              <label
                htmlFor="expensive"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* design */}
                <div className="flex gap-2 items-center">
                  <Truck className="w-8 h-8 ms-3 flex-shrink-0" />
                  <div className="">
                    <p>Fast Delivery</p>
                    <p>Delivery Cost: Rs 500 </p>
                  </div>
                </div>
                <Circle
                  className={`w-5 h-5 ms-3 flex-shrink-0 ${
                    shippingCost === "500" ? "fill-current text-blue-600" : ""
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
