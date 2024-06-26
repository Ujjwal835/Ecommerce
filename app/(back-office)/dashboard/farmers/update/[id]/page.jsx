import FormHeader from "@/components/backoffice/FormHeader";
import FarmerForm from "@/components/backoffice/forms/FarmerForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function UpdateFarmer({ params: { id } }) {
  const farmer = await getData(`farmers/${id}`);
  console.log(farmer);
  return (
    <div>
      <FormHeader title="Update Farmer" />
      <FarmerForm updateData={farmer} />
    </div>
  );
}
