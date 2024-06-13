import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      categoryId,
      description,
      imageUrl,
      content,
      isActive,
      slug,
    } = await request.json();
    const newTraining = {
      title,
      categoryId,
      description,
      imageUrl,
      content,
      isActive,
      slug,
    };
    console.log(newTraining);
    return NextResponse.json(newTraining);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Create Training",
        error,
      },
      { status: 500 }
    );
  }
}
