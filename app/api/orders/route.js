import db from "@/lib/db";
import { generateOrderNumber } from "@/lib/generateOrderNumber";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { checkoutFormData, orderItems } = await request.json();
    // const existingTraining = await db.Training.findUnique({
    //   where: {
    //     slug,
    //   },
    // });
    // if (existingTraining) {
    //   return NextResponse.json(
    //     {
    //       data: null,
    //       message: "Training with that Name Already Exists",
    //     },
    //     { status: 409 }
    //   );
    // }
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
    // create order
    const newOrder = await db.Order.create({
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
      },
    });

    // create orderNumber

    // create orderItems and associate with this order
    const newOrderItems = await db.OrderItem.createMany({
      data: orderItems.map((item) => ({
        productId: item.id,
        quantity: parseInt(item.qty),
        price: parseFloat(item.salePrice),
        orderId: newOrder.id,
        imageUrl: item.imageUrl,
        title: item.title,
        orderNumber: generateOrderNumber(8),
      })),
    });
    console.log(newOrder, newOrderItems);
    return NextResponse.json(newOrder);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Create Order",
        error,
      },
      { status: 500 }
    );
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
