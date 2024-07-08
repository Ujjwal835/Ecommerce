"use client";
import Loading from "@/app/loading";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import FormHeader from "@/components/backoffice/FormHeader";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateCouponCode } from "@/lib/generateCouponCode";
import { generateIsoFormattedDate } from "@/lib/generateIsoFormattedDate";
import { generateNormalDate } from "@/lib/generateNormalDate";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function CouponForm({ updateData = {} }) {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Loading />;
  }
  const vendorId = session?.user?.id;
  const expiryDateNormal = generateNormalDate(updateData.expiryDate);
  const id = updateData?.id ?? "";
  updateData.expiryDate = expiryDateNormal;
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...updateData,
      // expiryDate: updateData.expiryDate
      //   ? generateNormalDate(updateData.expiryDate)
      //   : "",
    },
  });
  const isActive = watch("isActive");
  const router = useRouter();

  const today = new Date().toISOString().split("T")[0];

  async function onSubmit(data) {
    {
      /* -id=>auto()  -title -code=>auto() -expiry date  -isActive */
    }
    data.vendorId = vendorId;
    const couponCode = generateCouponCode(data.title, data.expiryDate);
    data.couponCode = couponCode;
    // the expiry date formate we receive is 2024-06-12 and prisma expects them to be in iso therefore converting it
    const isoFormattedDate = generateIsoFormattedDate(data.expiryDate);
    data.expiryDate = isoFormattedDate;
    console.log(data);
    if (id) {
      // make put request (update)
      makePutRequest(setLoading, `api/coupons/${id}`, data, "Coupon", reset);
      router.back();
      console.log("Update Request:", data);
    } else {
      // make post request (create)
      makePostRequest(setLoading, "api/coupons", data, "Coupon", reset);
      router.back();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:shadow-emerald-500 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Coupon Title"
          name="title"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Coupon Expiry Date"
          name="expiryDate"
          type="date"
          min={today}
          // defaultValue={today}
          register={register}
          errors={errors}
          className="w-full"
        />
        <ToggleInput
          label="Publish Your Coupon"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        />
      </div>

      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Coupon" : "Create Coupon"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Coupon Please wait ...`}
      />
    </form>
  );
}
