import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // const farmerData = await request.json();
    const {
      name,
      phone,
      email,
      physicalAddress,
      contactPerson,
      contactPersonPhone,
      terms,
      notes,
      isActive,
      code,
      profileImageUrl,
    } = await request.json();

    const newFarmer = {
      name,
      phone,
      email,
      physicalAddress,
      contactPerson,
      contactPersonPhone,
      terms,
      notes,
      isActive,
      code,
      profileImageUrl,
    };
    console.log(newFarmer);
    return NextResponse.json(newFarmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Create Farmer",
        error,
      },
      { status: 500 }
    );
  }
}
