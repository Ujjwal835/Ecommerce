import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // const farmerData = await request.json();
    const { title, logoUrl, description, slug, isActive } =
      await request.json();

    const newMarket = {
      title,
      logoUrl,
      description,
      slug,
      isActive,
    };
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
