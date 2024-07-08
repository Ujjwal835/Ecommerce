"use client";
import Image from "next/image";
import React, { useRef } from "react";
import logo from "../../public/Jindal_logo_6.png";
import { generateNormalDate } from "@/lib/generateNormalDate";
import { useReactToPrint } from "react-to-print";
export default function SalesInvoice({ order }) {
  const invoiceDate = generateNormalDate(order.createdAt);
  const subTotal =
    order.orderItems
      .reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
      .toFixed(2) ?? 0;

  const tax = 20;
  const total = (parseFloat(subTotal) + parseFloat(tax)).toFixed(2);

  const invoiceRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });

  return (
    <div className="flex flex-col">
      {/* download invoice button */}
      <div className="flex items-end justify-end mb-8">
        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center justify-center px-4 py-3 text-xs font-bold text-slate-200 dark:text-gray-900 transition-all duration-200 bg-slate-800 dark:bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:hover:bg-gray-200"
        >
          Download/Print Invoice
        </button>
      </div>

      {/* invoice */}

      <div className="" ref={invoiceRef}>
        <div className="max-w-4xl mx-auto border border-gray-500 p-8 rounded-sm text-slate-900 dark:text-slate-200 bg-white dark:bg-slate-800 ">
          {/* Header */}
          <div className="flex justify-between border-b border-gray-500 pb-8">
            <div className="flex flex-col">
              <h2>Bill From:</h2>
              <p>LifeEasyWay</p>
              <p>691, Hapur</p>
              <p>Uttar Pradesh, India</p>
              <p>ujjwaljindal835@gmail.com</p>
            </div>
            <Image src={logo} alt="limifood logo" className="w-36 h-16" />
          </div>
          {/* Header End */}
          <div className="flex justify-between border-b border-gray-500 py-8">
            <div className="flex flex-col">
              <h2>Bill To:</h2>
              <p>
                {order.firstName} {order.lastName}
              </p>
              <p>{order.streetAddress}</p>
              <p>
                {order.city} , {order.zipCode}
              </p>
              <p>
                {order.district} , {order.state} , {order.country}
              </p>
              <p>{order.email}</p>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between gap-4">
                <p>Invoice #</p>
                <p>{order.orderNumber}</p>
              </div>
              <div className="flex justify-between gap-4">
                <p>Invoice Date</p>
                <p>{invoiceDate}</p>
              </div>
              <div className="flex justify-between gap-4">
                <p>Amount Due</p>
                <p>Rs {total}</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Item
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Item Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit Cost
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Line Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.orderItems.map((item, i) => {
                  const itemSubtotal = (item.quantity * item.price).toFixed(2);
                  return (
                    <tr
                      key={i}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.title}
                      </th>
                      <td className="px-6 py-4">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="object-cover w-14 h-14 rounded-full"
                        />
                      </td>
                      <td className="px-6 py-4">{item.quantity}</td>
                      <td className="px-6 py-4">Rs {item.price}</td>
                      <td className="px-6 py-4">Rs {itemSubtotal}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between border-b border-gray-500 py-8">
            <div className="flex flex-col">
              <h2>NOTES</h2>
              <p>Free Shipping for 30 Days Money back guarantee</p>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between gap-4">
                <p>SubTotal</p>
                <p>Rs {subTotal}</p>
              </div>
              <div className="flex justify-between gap-4">
                <p>Tax</p>
                <p>Rs {tax}</p>
              </div>
              <div className="flex justify-between gap-4">
                <p>Total</p>
                <p>Rs {total}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-8">
            <Image src={logo} alt="limifood logo" className="w-36 h-16" />
          </div>
        </div>
      </div>
    </div>
  );
}
