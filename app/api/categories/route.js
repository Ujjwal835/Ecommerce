import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, imageUrl, description, isActive } =
      await request.json();
    const existingCategory = await db.Category.findUnique({
      where: {
        slug,
      },
    });
    if (existingCategory) {
      return NextResponse.json(
        {
          data: null,
          message: "Category Already Exists",
        },
        { status: 409 }
      );
    }

    const newCategory = await db.Category.create({
      data: {
        title,
        slug,
        imageUrl,
        description,
        isActive,
      },
    });
    console.log(newCategory);
    return NextResponse.json(newCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Create Category",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const categories = await db.Category.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        products: true,
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Categories",
        error,
      },
      { status: 500 }
    );
  }
}
