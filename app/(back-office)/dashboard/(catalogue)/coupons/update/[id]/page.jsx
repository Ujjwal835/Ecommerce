import FormHeader from "@/components/backoffice/FormHeader";
import CouponForm from "@/components/backoffice/forms/CouponForm";
import { getData } from "@/lib/getData";

export default async function UpdateCoupon({ params: { id } }) {
  const coupon = await getData(`coupons/${id}`);
  console.log(coupon);
  return (
    <div>
      <FormHeader title="Update Coupon" />
      <CouponForm updateData={coupon} />
    </div>
  );
}
