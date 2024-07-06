import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const order = await db.Order.findUnique({
      where: {
        id,
      },
      include: {
        orderItems: true,
      },
    });
    return NextResponse.json(order);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch an Order",
        error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingOrder = await db.Order.findUnique({
      where: {
        id,
      },
    });
    if (!existingOrder) {
      return NextResponse.json(
        {
          data: null,
          message: "Order not Found",
        },
        { status: 404 }
      );
    }
    const deletedOrder = await db.Order.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedOrder);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Delete Order",
        error,
      },
      { status: 500 }
    );
  }
}

// export async function PUT(request, { params: { id } }) {
//   try {
//     const existingOrder = await db.Order.findUnique({
//       where: {
//         id,
//       },
//     });
//     if (!existingOrder) {
//       return NextResponse.json(
//         {
//           data: null,
//           message: "Order not Found",
//         },
//         { status: 404 }
//       );
//     }
//     const deletedOrder = await db.Order.delete({
//       where: {
//         id,
//       },
//     });
//     return NextResponse.json(deletedOrder);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         message: "Failed to Delete Order",
//         error,
//       },
//       { status: 500 }
//     );
//   }
// }
