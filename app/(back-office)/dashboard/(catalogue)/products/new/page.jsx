import FormHeader from "@/components/backoffice/FormHeader";
import ProductForm from "@/components/backoffice/forms/ProductForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function NewProduct() {
  // Categories and Farmers
  const categoriesData = await getData("categories");
  const usersData = await getData("users");
  const farmersData = usersData.filter((user) => user.role === "FARMER");
  const farmers = farmersData.map((farmer) => {
    return {
      id: farmer.id,
      title: farmer.name,
    };
  });
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  return (
    <div>
      <FormHeader title="New Product" />
      <ProductForm categories={categories} farmers={farmers} />
    </div>
  );
}
