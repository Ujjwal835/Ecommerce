import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    /*
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
      products,
      landSize,
      mainCrop,
      userId,
    */

    const farmerData = await request.json();

    const newFarmer = await db.FarmerProfile.create({
      data: {
        name: farmerData.name,
        phone: farmerData.phone,
        email: farmerData.email,
        physicalAddress: farmerData?.physicalAddress,
        contactPerson: farmerData?.contactPerson,
        contactPersonPhone: farmerData?.contactPersonPhone,
        landSize: parseFloat(farmerData.landSize),
        mainCrop: farmerData.mainCrop,
        products: farmerData.products,
        profileImageUrl: farmerData?.imageUrl,
        terms: farmerData?.terms,
        notes: farmerData?.notes,
        isActive: farmerData.isActive,
        code: farmerData.code,
        userId: farmerData.userId,
      },
    });
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

export async function GET(request) {
  try {
    const profiles = await db.FarmerProfile.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(profiles);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Farmer Profiles",
        error,
      },
      { status: 500 }
    );
  }
}
