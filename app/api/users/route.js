import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import base64url from "base64url";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";

export async function POST(request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    // extract the credentials
    const { name, email, password, role } = await request.json();
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
          message: `User with this email (${email}) Already Exists in the database`,
        },
        { status: 409 }
      );
    }
    // Encrypt the password=>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // generating token
    const rawToken = uuidv4();
    console.log(rawToken);
    // encode the token using base64url-safe format
    const token = base64url.encode(rawToken);

    // create new user
    const newUser = await db.User.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        verificationToken: token,
      },
    });
    console.log(newUser);

    // send the email if user role == farmer
    if (role === "FARMER") {
      const userId = newUser.id;
      const linkText = "Verify Account";
      const redirectUrl = `onboarding/${userId}?token=${token}`;
      const description =
        " Thank you, for Creating an Account with Us. We request you to click on the link Below in order to complete your onboarding Process. Thankyou";
      const subject = "Account Verification - Jindal Shop ";
      const sendMail = await resend.emails.send({
        from: "JindalShop <info@lifeeasyway.com>",
        to: email,
        subject: subject,
        react: EmailTemplate({ name, redirectUrl, linkText,description,subject }),
      });
      console.log(sendMail);
    }
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

export async function GET(request) {
  try {
    const users = await db.User.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Users",
        error,
      },
      { status: 500 }
    );
  }
}
