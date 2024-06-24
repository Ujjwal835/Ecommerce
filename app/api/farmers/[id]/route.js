import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const farmer = await db.FarmerProfile.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(farmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Farmer",
        error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingFarmer = await db.FarmerProfile.findUnique({
      where: {
        id,
      },
    });
    if (!existingFarmer) {
      return NextResponse.json(
        {
          data: null,
          message: "Farmer not Found",
        },
        { status: 404 }
      );
    }
    const deletedFarmer = await db.FarmerProfile.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedFarmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Delete Farmer",
        error,
      },
      { status: 500 }
    );
  }
}
