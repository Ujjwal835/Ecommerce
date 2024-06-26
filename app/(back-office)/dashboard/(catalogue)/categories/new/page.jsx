import FormHeader from "@/components/backoffice/FormHeader";
import CategoryForm from "@/components/backoffice/forms/CategoryForm";

export default function NewCategory() {
  return (
    <div>
      <FormHeader title="New Category" />
      <CategoryForm />
    </div>
  );
}
