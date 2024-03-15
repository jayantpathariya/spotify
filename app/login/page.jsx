import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div>
      <header className="pl-3">
        <Image src="/logo.svg" alt="logo" width={150} height={150} />
      </header>
      <main className="text-neutral-100 flex items-center justify-center">
        <div className="max-w-sm p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-10">
            Login to start listening
          </h1>
          <form>
            <div className="flex flex-col gap-y-2 mb-6">
              <label htmlFor="email" className="font-bold">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@domain.com"
                className="bg-neutral-900 py-3 px-4 rounded-md text-neutral-100 border border-neutral-700 hover:border-neutral-200 outline-none focus:ring-1 ring-neutral-200"
              />
            </div>
            <div className="flex flex-col gap-y-2 mb-6">
              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="*********"
                className="bg-neutral-900 py-3 px-4 rounded-md text-neutral-100 border border-neutral-700 hover:border-neutral-200 outline-none focus:ring-1 ring-neutral-200"
              />
            </div>
            <div className="flex flex-col gap-y-8">
              <button className="text-neutral-950 bg-green-500 w-full py-3 px-4 rounded-full font-bold hover:bg-green-500/90">
                Login
              </button>
              <div className="flex items-center w-full gap-x-4">
                <span className="w-full inline-block bg-neutral-800 h-0.5" />
                <span>or</span>
                <span className="w-full inline-block bg-neutral-800 h-0.5" />
              </div>
              <button className="text-neutral-250 py-3 px-4 rounded-full font-bold border border-neutral-800 flex items-center justify-center gap-x-4 hover:border-neutral-200 transition">
                <FcGoogle size={24} />
                <span>Login with Google</span>
              </button>
            </div>
          </form>
          <span className="w-full inline-block bg-neutral-800 h-0.5 mt-8" />
          <p className="mt-8 text-neutral-400 font-semibold text-center">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline text-neutral-200">
              Sign up here
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
