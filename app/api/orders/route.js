import { PrismaClient } from "@prisma/client";
import db from "@/lib/db";
import { generateOrderNumber } from "@/lib/generateOrderNumber";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { checkoutFormData, orderItems } = await request.json();
    const {
      city,
      country,
      district,
      email,
      firstName,
      lastName,
      paymentMethod,
      phone,
      shippingCost,
      state,
      streetAddress,
      userId,
      zipCode,
    } = checkoutFormData;

    // Use the Prisma transaction
    const result = await db.$transaction(async (prisma) => {
      // Create order and order items within the transaction
      const newOrder = await prisma.Order.create({
        data: {
          userId,
          firstName,
          lastName,
          email,
          phone,
          streetAddress,
          city,
          district,
          zipCode,
          state,
          country,
          shippingCost: parseFloat(shippingCost),
          paymentMethod,
          orderNumber: generateOrderNumber(8),
        },
      });

      const newOrderItems = await prisma.orderItem.createMany({
        data: orderItems.map((item) => ({
          productId: item.id,
          vendorId: item.vendorId,
          quantity: parseInt(item.qty),
          price: parseFloat(item.salePrice),
          // Ensure you associate the items with the order
          orderId: newOrder.id,
          imageUrl: item.imageUrl,
          title: item.title,
        })),
      });

      // Calculate total amount for each product and create a sale for each
      const sales = await Promise.all(
        orderItems.map(async (item) => {
          const totalAmount = parseFloat(item.salePrice) * parseInt(item.qty);

          const newSale = await prisma.Sale.create({
            data: {
              orderId: newOrder.id,
              productTitle: item.title,
              productImage: item.imageUrl,
              productPrice: parseFloat(item.salePrice),
              productQty: parseInt(item.qty),
              productId: item.id,
              vendorId: item.vendorId,
              total: totalAmount,
            },
          });

          return newSale;
        })
      );

      return { newOrder, newOrderItems, sales };
    });

    console.log(result.newOrder, result.newOrderItems, result.sales);

    // Return the response
    return NextResponse.json(result.newOrder);
    // return new Response(JSON.stringify(newOrder), {
    //   status: 200,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to Create Order",
        error,
      },
      { status: 500 }
    );
    // return new Response(
    //   JSON.stringify({
    //     message: "Failed to create Order",
    //     error: error.message,
    //   }),
    //   {
    //     status: 500,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
  }
}

export async function GET(request) {
  try {
    const orders = await db.Order.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        orderItems: true,
      },
    });
    return NextResponse.json(orders);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Orders",
        error,
      },
      { status: 500 }
    );
  }
}
