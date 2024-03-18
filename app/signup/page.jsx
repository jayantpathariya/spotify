"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";

import { cn } from "@/lib/utils";

const schema = yup.object().shape({
  fullname: yup
    .string()
    .required("Fullname is required")
    .min(3, "Fullname is too short"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password is too short"),
});

const SignupPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/auth/signup", data);

      if (res.status === 201) {
        toast.success("Signup successful!");
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <header className="pl-3">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={150} height={150} />
        </Link>
      </header>
      <main className="text-neutral-100 flex items-center justify-center">
        <div className="max-w-sm p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-10">
            Sign up to start listening
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-2 mb-6">
              <label htmlFor="fullname" className="font-bold">
                Fullname
              </label>
              <input
                id="fullname"
                type="text"
                placeholder="John Doe"
                className={cn(
                  "bg-neutral-900 py-3 px-4 rounded-md text-neutral-100 border border-neutral-700 hover:border-neutral-200 outline-none focus:ring-1 ring-neutral-200",
                  errors?.fullname?.message && "border-red-500"
                )}
                {...register("fullname", { required: true })}
              />
              {errors?.fullname?.message && (
                <p className="text-red-500">{errors.fullname.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-y-2 mb-6">
              <label htmlFor="email" className="font-bold">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@domain.com"
                className={cn(
                  "bg-neutral-900 py-3 px-4 rounded-md text-neutral-100 border border-neutral-700 hover:border-neutral-200 outline-none focus:ring-1 ring-neutral-200",
                  errors?.email?.message && "border-red-500"
                )}
                {...register("email", { required: true })}
              />
              {errors?.email?.message && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-y-2 mb-6">
              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="*********"
                className={cn(
                  "bg-neutral-900 py-3 px-4 rounded-md text-neutral-100 border border-neutral-700 hover:border-neutral-200 outline-none focus:ring-1 ring-neutral-200",
                  errors?.password?.message && "border-red-500"
                )}
                {...register("password", { required: true })}
              />
              {errors?.password?.message && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-y-8">
              <button
                type="submit"
                className="text-neutral-950 bg-green-500 w-full py-3 px-4 rounded-full font-bold hover:bg-green-500/90"
              >
                Sign up
              </button>
              <div className="flex items-center w-full gap-x-4">
                <span className="w-full inline-block bg-neutral-800 h-0.5" />
                <span>or</span>
                <span className="w-full inline-block bg-neutral-800 h-0.5" />
              </div>
              <button
                type="button"
                className="text-neutral-250 py-3 px-4 rounded-full font-bold border border-neutral-800 flex items-center justify-center gap-x-4 hover:border-neutral-200 transition"
                onClick={() => signIn("google")}
              >
                <FcGoogle size={24} />
                <span>Sign up with Google</span>
              </button>
            </div>
          </form>
          <span className="w-full inline-block bg-neutral-800 h-0.5 mt-8" />
          <p className="mt-8 text-neutral-400 font-semibold text-center">
            Already have an account?{" "}
            <Link href="/login" className="underline text-neutral-200">
              Log in here
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignupPage;
