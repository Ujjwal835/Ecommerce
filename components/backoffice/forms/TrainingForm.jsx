"use client";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import FormHeader from "@/components/backoffice/FormHeader";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
const QuillEditor = dynamic(
  () => import("@/components/FormInputs/QuillEditor"),
  {
    ssr: false,
  }
);

export default function TrainingForm({ categories, updateData = {} }) {
  const initialImageUrl = updateData?.imageUrl ?? "";
  const initialContent = updateData?.content ?? "";
  const id = updateData?.id ?? "";
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(initialContent);
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
    },
  });

  const isActive = watch("isActive");
  async function onSubmit(data) {
    {
      /*
       -id=>auto()  -title -author(Expert)Id -categoryId   -slug=>auto()  -description  -image -content=>richtext */
    }
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;
    console.log(data);
    if (id) {
      data.id = id;
      // make put request (update)
      makePutRequest(
        setLoading,
        `api/trainings/${id}`,
        data,
        "Training",
        reset
      );
      setImageUrl("");
      router.back();
      console.log("Update Request:", data);
    } else {
      // make post request (create)
      makePostRequest(setLoading, "api/trainings", data, "Training", reset);
      setImageUrl("");
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
          label="Training Title"
          name="title"
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
        <TextAreaInput
          label="Training Description"
          name="description"
          register={register}
          errors={errors}
        />
        <ImageInput
          label="Training Thumbnail"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="trainingImageUploader"
        />
        <QuillEditor
          label="Training Content"
          value={content}
          onChange={setContent}
        />
        <ToggleInput
          label="Publish Your Training"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        />
      </div>

      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Training" : "Create Training"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Training Please wait ...`}
      />
    </form>
  );
}
