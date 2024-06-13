import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, link, imageUrl, isActive } = await request.json();
    const newBanner = {
      title,
      link,
      imageUrl,
      isActive,
    };
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
