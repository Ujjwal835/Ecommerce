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

    // check if user already exists in the db
    const existingUser = await db.User.findUnique({
      where: {
        id: farmerData.userId,
      },
    });
    if (!existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: `No User Found`,
        },
        { status: 404 }
      );
    }
    // if user already there then update verification and insert the other details for farmer
    // update the verification in the user
    // update email verified
    const updatedUser = await db.User.update({
      where: {
        id: farmerData.userId,
      },
      data: {
        emailVerified: true,
      },
    });

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

// export async function GET(request) {
//   try {
//     const profiles = await db.FarmerProfile.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//     return NextResponse.json(profiles);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         message: "Failed to Fetch Farmer Profiles",
//         error,
//       },
//       { status: 500 }
//     );
//   }
// }
export async function GET(request) {
  try {
    const farmers = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        role: "FARMER",
      },
      include: {
        farmerProfile: true,
      },
    });
    return NextResponse.json(farmers);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Farmers",
        error,
      },
      { status: 500 }
    );
  }
}
