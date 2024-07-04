import OrderCard from "@/components/order/OrderCard";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
  // fetch order
  const orders = await getData("orders");
  // get userid
  const session = await getServerSession(authOptions);
  if (!session) return;
  const userId = session?.user?.id;
  console.log(userId);
  if (orders.length === 0 || !orders) {
    return <p>No Order Yet</p>;
  }
  // filter order by userid
  const userOrders = orders.filter((order) => order.userId === userId);
  console.log(userOrders);
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 m-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Your Orders
            </h1>
            <p className="mt-2 text-sm font-normal text-gray-600">
              Check the status of recent and old orders & discover more products
            </p>
          </div>

          <ul className="mt-8 space-y-5 lg:mt-12 sm:space-y-6 lg:space-y-10">
            {userOrders.map((userOrder, i) => {
              return <OrderCard key={i} order={userOrder} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
