"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

export const Header = ({ scrolled, color }) => {
  const pathname = usePathname();
  const router = useRouter();

  const query = pathname?.split("/")[2]
    ? pathname?.split("/")[2]?.replaceAll("%20", " ")
    : "";

  const [value, setValue] = useState(query);
  const bgColor = color ? `bg-[${color}]` : "bg-orange-800/30";

  const handleSearch = (e) => {
    setValue(e.target.value);
    router.push(`/search/${e.target.value}`);
  };

  const isAuth = false;

  return (
    <header
      className={cn(
        "hidden sticky left-0 top-0 z-50 p-4 lg:flex items-center justify-between",
        scrolled && bgColor
      )}
    >
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-2">
          <button
            className="bg-neutral-900 w-8 h-8 p-2 rounded-full flex items-center justify-center"
            onClick={() => router.back()}
          >
            <BsChevronLeft className="text-lg" />
          </button>
          <button
            className="bg-neutral-900 w-8 h-8 p-2 rounded-full flex items-center justify-center"
            onClick={() => router.forward()}
          >
            <BsChevronRight className="text-lg" />
          </button>
        </div>
        <div
          className={cn(
            "relative w-[300px] hidden lg:block",
            !pathname.includes("/search") && "lg:hidden"
          )}
        >
          <GoSearch className="absolute left-2 top-3 text-xl text-neutral-400" />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="bg-neutral-800 py-3 px-4 rounded-full pl-8 w-full placeholder:text-neutral-500 text-neutral-200 text-sm"
            value={value}
            onChange={handleSearch}
          />
        </div>
      </div>
      {isAuth ? (
        <Link href="/login" className="p-1 bg-neutral-900 rounded-full">
          <Image
            src="/profile-image.jpg"
            width={26}
            height={26}
            alt="profile image"
            className="rounded-full h-7 w-7"
          />
        </Link>
      ) : (
        <div className="flex items-center gap-x-2">
          <Link
            href="/signup"
            className="px-4 py-2 font-bold hover:scale-105 hover:text-neutral-200 transition-transform"
          >
            Sign up
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 bg-neutral-200 text-neutral-700 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};
