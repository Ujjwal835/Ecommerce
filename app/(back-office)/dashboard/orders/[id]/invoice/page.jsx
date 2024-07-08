import SalesInvoice from "@/components/order/SalesInvoice";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page({ params: { id } }) {
  const orderId = "668988cf106a494d5c1fe929";
  const order = await getData(`orders/${orderId}`);
  console.log(order);
  return <SalesInvoice order={order} />;
}
