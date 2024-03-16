import { NextResponse } from "next/server";
import { compare, hash } from "bcrypt";

import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    connectToDatabase();

    const user = await User.findOne({
      "personal_info.email": email,
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "User does not exist",
        },
        { status: 400 }
      );
    }

    const isPasswordCorrect = await compare(
      password,
      user.personal_info.password
    );

    if (!isPasswordCorrect) {
      return NextResponse.json(
        {
          message: "Invalid credentials",
        },
        { status: 400 }
      );
    }

    const { personal_info, _id } = user;

    return NextResponse.json(
      {
        message: "Login successful",
        data: {
          user: {
            id: _id,
            email: personal_info.email,
            fullname: personal_info.fullname,
            profile_picture: personal_info.profile_picture,
          },
        },
      },
      { status: 200 }
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
