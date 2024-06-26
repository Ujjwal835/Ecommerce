import FormHeader from "@/components/backoffice/FormHeader";
import CategoryForm from "@/components/backoffice/forms/CategoryForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function UpdateCategory({ params: { id } }) {
  const category = await getData(`categories/${id}`);
  console.log(category);
  return (
    <div>
      <FormHeader title="Update Category" />
      <CategoryForm updateData={category} />
    </div>
  );
}
