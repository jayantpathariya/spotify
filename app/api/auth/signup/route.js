import { NextResponse } from "next/server";
import { hash } from "bcrypt";

import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";

export async function POST(req) {
  try {
    const { fullname, email, password } = await req.json();

    connectToDatabase();

    const userExists = await User.findOne({
      "personal_info.email": email,
    });

    if (userExists) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 12);

    await User.create({
      personal_info: {
        fullname,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        message: "Signup successful",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred",
      },
      { status: 500 }
    );
  }
}
