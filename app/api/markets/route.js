import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, logoUrl, description, slug, isActive, categoryIds } =
      await request.json();
    const existingMarket = await db.Market.findUnique({
      where: {
        slug,
      },
    });
    if (existingMarket) {
      return NextResponse.json(
        {
          data: null,
          message: "Market Already Exists",
        },
        { status: 409 }
      );
    }

    const newMarket = await db.Market.create({
      data: {
        title,
        logoUrl,
        description,
        slug,
        isActive,
        categoryIds,
      },
    });
    console.log(newMarket);
    return NextResponse.json(newMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Create Market",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const markets = await db.Market.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(markets);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Markets",
        error,
      },
      { status: 500 }
    );
  }
}
