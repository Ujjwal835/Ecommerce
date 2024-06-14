import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, link, imageUrl, isActive } = await request.json();
    const newBanner = await db.Banner.create({
      data: {
        title,
        link,
        imageUrl,
        isActive,
      },
    });
    console.log(newBanner);
    return NextResponse.json(newBanner);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Create Banner",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const banners = await db.Banner.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(banners);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Banner",
        error,
      },
      { status: 500 }
    );
  }
}
