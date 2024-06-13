import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, imageUrl, description, isActive, marketIds } =
      await request.json();
    const newCategory = {
      title,
      slug,
      imageUrl,
      description,
      isActive,
      marketIds,
    };
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
