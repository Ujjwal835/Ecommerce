import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, couponCode, expiryDate, isActive } = await request.json();
    const newCoupon = await db.Coupon.create({
      data: {
        title,
        couponCode,
        expiryDate,
        isActive,
      },
    });
    console.log(newCoupon);
    return NextResponse.json(newCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Create Coupon",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const coupons = await db.Coupon.findMany({
      orderBy: {
        expiryDate: "asc",
      },
    });
    return NextResponse.json(coupons);
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
