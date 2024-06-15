import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
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
        slug,
      },
    });
    if (existingTraining) {
      return NextResponse.json(
        {
          data: null,
          message: "Training with that Name Already Exists",
        },
        { status: 409 }
      );
    }

    const newTraining = await db.Training.create({
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
    console.log(newTraining);
    return NextResponse.json(newTraining);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Create Training",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const trainings = await db.Training.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(trainings);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Trainings",
        error,
      },
      { status: 500 }
    );
  }
}
