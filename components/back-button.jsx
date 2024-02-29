"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

export const BackButton = ({ className }) => {
  const router = useRouter();

  return (
    <button
      className={cn("lg:hidden p-4", className)}
      onClick={() => router.back()}
    >
      <FaArrowLeft className=" text-2xl text-neutral-200" />
    </button>
  );
};
