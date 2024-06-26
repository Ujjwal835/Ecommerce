"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import FarmerForm from "@/components/backoffice/forms/FarmerForm";

export default function NewFarmer() {
  return (
    <div>
      <FormHeader title="New Farmer" />
      <FarmerForm />
    </div>
  );
}
