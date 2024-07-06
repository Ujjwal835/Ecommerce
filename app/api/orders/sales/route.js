import db from "@/lib/db";
import { generateOrderNumber } from "@/lib/generateOrderNumber";
import { NextResponse } from "next/server";
export async function GET(request) {
  try {
    const sales = await db.Sale.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(sales);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Sales",
        error,
      },
      { status: 500 }
    );
  }
}
