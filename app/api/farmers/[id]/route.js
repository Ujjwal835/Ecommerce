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

// export async function PUT(request, { params: { id } }) {
//   try {
//     // receive the data
//     const farmerData = await request.json();
//     const existingFarmer = await db.FarmerProfile.findUnique({
//       where: {
//         id,
//       },
//     });
//     if (!existingFarmer) {
//       return NextResponse.json(
//         {
//           data: null,
//           message: `Not Found`,
//         },
//         { status: 404 }
//       );
//     }

//     const updatedFarmer = await db.FarmerProfile.update({
//       where: { id },
//       data: {
//         name: farmerData.name,
//         phone: farmerData.phone,
//         email: farmerData.email,
//         physicalAddress: farmerData?.physicalAddress,
//         contactPerson: farmerData?.contactPerson,
//         contactPersonPhone: farmerData?.contactPersonPhone,
//         landSize: parseFloat(farmerData.landSize),
//         mainCrop: farmerData.mainCrop,
//         products: farmerData.products,
//         profileImageUrl: farmerData?.imageUrl,
//         terms: farmerData?.terms,
//         notes: farmerData?.notes,
//         isActive: farmerData.isActive,
//         code: farmerData.code,
//         userId: farmerData.userId,
//       },
//     });
//     return NextResponse.json(updatedFarmer);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         message: "Failed to Update Farmer",
//         error,
//       },
//       { status: 500 }
//     );
//   }
// }

export async function PUT(request, { params: { id } }) {
  try {
    // Receive the data
    const farmerData = await request.json();

    // Ensure `id` is the correct `userId` from `farmerData`
    const userId = farmerData.userId;

    // Find the existing FarmerProfile using userId
    const existingFarmer = await db.FarmerProfile.findUnique({
      where: {
        userId,
      },
      include: {
        user: true, // Include User relationship if needed
      },
    });

    if (!existingFarmer) {
      return NextResponse.json(
        {
          data: null,
          message: `Farmer with userId ${userId} not found`,
        },
        { status: 404 }
      );
    }

    // Update FarmerProfile
    const updatedFarmer = await db.FarmerProfile.update({
      where: { userId },
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

    // If there's an associated User, update User details if needed
    if (existingFarmer.user) {
      await db.User.update({
        where: { id: existingFarmer.user.id }, // Use user's ID
        data: {
          // Update user fields if necessary
          name: farmerData.name,
          email: farmerData.email,
        },
      });
    }

    return NextResponse.json(updatedFarmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Update Farmer Profile",
        error,
      },
      { status: 500 }
    );
  }
}
