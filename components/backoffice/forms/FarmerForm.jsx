"use client";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateUserCode } from "@/lib/generateUserCode";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ArrayItemsInput from "../../FormInputs/ArrayItemsInput";

export default function FarmerForm({ user, updateData = {} }) {
  const initialImageUrl = updateData?.farmerProfile?.profileImageUrl ?? "";
  const initialProducts = updateData?.farmerProfile?.products ?? [];
  const id = updateData?.farmerProfile?.id ?? "";
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [products, setProducts] = useState(initialProducts);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...user,
      ...updateData.farmerProfile,
    },
  });

  const isActive = watch("isActive");

  async function onSubmit(data) {
    // JFM Jindal Farmer Member
    const code = generateUserCode("JFM", data.name);
    data.code = code;
    data.products = products;
    data.imageUrl = imageUrl;
    console.log(data);
    if (id) {
      // make put request (update)
      console.log(id);
      data.userId = updateData?.id;
      makePutRequest(
        setLoading,
        `api/farmers/${id}`,
        data,
        "Farmer Profile",
        reset
      );
      setImageUrl("");
      router.back();
      console.log("Update Request:", data);
    } else {
      // make post request (create)
      console.log("2");
      data.userId = user.id;
      makePostRequest(setLoading, "api/farmers", data, "Farmer Profile", reset);
      setImageUrl("");
      router.push("/login");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:shadow-emerald-500 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Farmer's Full Name"
          name="name"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Farmer's Phone"
          name="phone"
          type="tel"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Farmer's Email Address"
          name="email"
          // type="email"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Farmer's Physical Address"
          name="physicalAddress"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Farmer's Contact Person"
          name="contactPerson"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Farmer's Contact Person Phone"
          name="contactPersonPhone"
          type="tel"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="What is the Size of Your Land in Acre ?"
          name="landSize"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="What is Your main crop that you Cultivate ?"
          name="mainCrop"
          type="text"
          register={register}
          errors={errors}
          className="w-full"
        />
        <ArrayItemsInput
          itemTitle="Product"
          items={products}
          setItems={setProducts}
          // defaultValues={updateData.farmerProfile.products}
        />
        <ImageInput
          label="Farmer Profile Image"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="farmerProfileUploader"
        />
        <TextAreaInput
          label="Farmer's Payment Terms"
          name="terms"
          register={register}
          errors={errors}
          isRequired={false}
        />
        <TextAreaInput
          label="Notes"
          name="notes"
          register={register}
          errors={errors}
          isRequired={false}
        />

        <ToggleInput
          label="Farmer Status"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        />
      </div>

      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Farmer" : "Create Farmer"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Farmer Please wait ...`}
      />
    </form>
  );
}
