"use client";
import ArrayItemsInput from "@/components/FormInputs/ArrayItemsInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import FormHeader from "@/components/backoffice/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { generateUserCode } from "@/lib/generateUserCode";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewProductForm({ categories, farmers }) {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
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
      isWholesale: false,
    },
  });
  const [tags, setTags] = useState([]);
  const isActive = watch("isActive");
  const isWholesale = watch("isWholesale");
  console.log(isActive, isWholesale);

  async function onSubmit(data) {
    {
      /* -id=>auto()  -title  -slug=>auto()  -description  -image/images[] -sku -barcode -product price   -sale price  -category  -farmer -tags[] */
    }
    const slug = generateSlug(data.title);
    const productCode = generateUserCode("JSP", data.title);
    data.slug = slug;
    data.productCode = productCode;
    data.qty = 1;
    data.imageUrl = imageUrl;
    data.tags = tags;
    console.log(data);
    makePostRequest(setLoading, "api/products", data, "Product", reset);
    setImageUrl("");
    setTags([]);
    router.back();
  }

  return (
    <div>
      <FormHeader title="New Product" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:shadow-emerald-500 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Price ( Before Discount )"
            name="productPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Sale Price ( Discounted )"
            name="salePrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Stock"
            name="productStock"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Unit of Measurement (eg Kilograms )"
            name="unit"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
          />
          <SelectInput
            label="Select Farmer"
            name="farmerId"
            register={register}
            errors={errors}
            className="w-full"
            options={farmers}
          />
          <ToggleInput
            label="Supports Wholesale Selling"
            name="isWholesale"
            trueTitle="Supported"
            falseTitle="Not Supported"
            register={register}
          />
          {isWholesale && (
            <>
              <TextInput
                label="Wholesale Price"
                type="number"
                name="wholesalePrice"
                register={register}
                errors={errors}
                className="w-full"
              />
              <TextInput
                label="Minimum Wholesale Quantity"
                type="number"
                name="wholesaleQty"
                register={register}
                errors={errors}
                className="w-full"
              />
            </>
          )}
          <ImageInput
            label="Product Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="productImageUploader"
          />
          {/* tags */}
          <ArrayItemsInput items={tags} setItems={setTags} itemTitle="Tag" />

          <TextAreaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="Publish Your Product"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Product"
          loadingButtonTitle="Creating Product Please wait ..."
        />
      </form>
    </div>
  );
}
