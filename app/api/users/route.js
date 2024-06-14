import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    // extract the credentials
    const { name, email, password } = await request.json();
        // check if user already exists in the db
    const existingUser = await db.User.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "User Already Exists",
        },
        { status: 409 }
      );
    }
    // Encrypt the password=>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    const newUser = await db.User.create({
      data: { name, email, password: hashedPassword },
    });
    console.log(newUser);
    return NextResponse.json(
      {
        data: newUser,
        message: "User Created Successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Server Error: Something went wrong",
      },
      { status: 500 }
    );
  }
}
