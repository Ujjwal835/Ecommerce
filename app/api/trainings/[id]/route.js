import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const training = await db.Training.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(training);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Trainng",
        error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingTraining = await db.Training.findUnique({
      where: {
        id,
      },
    });
    if (!existingTraining) {
      return NextResponse.json(
        {
          data: null,
          message: "Training not Found",
        },
        { status: 404 }
      );
    }
    const deletedTraining = await db.Training.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedTraining);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Delete Training",
        error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    // receive the data
    const {
      title,
      categoryId,
      description,
      imageUrl,
      content,
      isActive,
      slug,
    } = await request.json();
    const existingTraining = await db.Training.findUnique({
      where: {
        id,
      },
    });
    if (!existingTraining) {
      return NextResponse.json(
        {
          data: null,
          message: `Not Found`,
        },
        { status: 404 }
      );
    }

    const updatedTraining = await db.Training.update({
      where: { id },
      data: {
        title,
        categoryId,
        description,
        imageUrl,
        content,
        isActive,
        slug,
      },
    });
    return NextResponse.json(updatedTraining);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Update Training",
        error,
      },
      { status: 500 }
    );
  }
}
