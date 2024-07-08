import SalesInvoice from "@/components/order/SalesInvoice";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page({ params: { id } }) {
  const order = await getData(`orders/${id}`);
  console.log(order);
  return <SalesInvoice order={order} />;
}
