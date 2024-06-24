import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const farmer = await db.User.findUnique({
      where: {
        id,
      },
      include: {
        farmerProfile: true,
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
    const existingUser = await db.User.findUnique({
      where: {
        id,
      },
    });
    if (!existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "User not Found",
        },
        { status: 404 }
      );
    }
    const deletedUser = await db.User.delete({
      // no need to mention the role here because id is unique
      where: {
        id,
      },
    });
    return NextResponse.json(deletedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Delete User",
        error,
      },
      { status: 500 }
    );
  }
}
