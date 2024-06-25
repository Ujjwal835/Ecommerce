import FormHeader from "@/components/backoffice/FormHeader";
import NewCategoryForm from "@/components/forms/NewCategoryForm";

export default function NewCategory() {
  return (
    <div>
      <FormHeader title="New Category" />
      <NewCategoryForm />
    </div>
  );
}
