import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";

async function signIn(credentials) {
  try {
    const { email, password } = credentials;

    connectToDatabase();

    const user = await User.findOne({
      "personal_info.email": email,
    });

    if (!user) {
      throw new Error("No user found");
    }

    const isPasswordValid = await compare(
      password,
      user.personal_info.password
    );

    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    return user;
  } catch (error) {
    throw error;
  }
}

export const authOptions = {
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const user = await signIn(credentials);

          return user;
        } catch (error) {
          console.log(error);
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log({ token, user });
      if (user) {
        token.id = user._id;
        token.email = user.personal_info.email;
        token.fullname = user.personal_info.fullname;
        token.profile_picture = user.personal_info.profile_picture;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.fullname = token.fullname;
        session.user.email = token.email;
        session.user.profile_picture = token.profile_picture;
        session.user.id = token.id;
      }
      // console.log({ session, token });
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
