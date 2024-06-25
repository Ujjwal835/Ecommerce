import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const coupon = await db.Coupon.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(coupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Coupon",
        error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingCoupon = await db.Coupon.findUnique({
      where: {
        id,
      },
    });
    if (!existingCoupon) {
      return NextResponse.json(
        {
          data: null,
          message: "Coupon not Found",
        },
        { status: 404 }
      );
    }
    const deletedCoupon = await db.Coupon.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Delete Coupon",
        error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    // receive the data
    const { title, couponCode, expiryDate, isActive } = await request.json();
    const existingCoupon = await db.Coupon.findUnique({
      where: {
        id,
      },
    });
    if (!existingCoupon) {
      return NextResponse.json(
        {
          data: null,
          message: `Not Found`,
        },
        { status: 404 }
      );
    }

    const updatedCoupon = await db.Coupon.update({
      where: { id },
      data: {
        title,
        couponCode,
        expiryDate,
        isActive,
      },
    });
    return NextResponse.json(updatedCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Update Coupon",
        error,
      },
      { status: 500 }
    );
  }
}
