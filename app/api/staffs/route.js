import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      name,
      email,
      password,
      phone,
      physicalAddress,
      notes,
      isActive,
      code,
      dob,
      aadharNumber,
    } = await request.json();
    const newStaff = {
      name,
      email,
      password,
      phone,
      physicalAddress,
      notes,
      isActive,
      code,
      dob,
      aadharNumber,
    };
    console.log(newStaff);
    return NextResponse.json(newStaff);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Create Staff",
        error,
      },
      { status: 500 }
    );
  }
}
