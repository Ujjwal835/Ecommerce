import FormHeader from "@/components/backoffice/FormHeader";
import BannerForm from "@/components/backoffice/forms/BannerForm";

export default function NewBanner() {
  return (
    <div>
      <FormHeader title="New Banner" />
      <BannerForm />
    </div>
  );
}
