"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button className="p-4 lg:hidden" onClick={() => router.back()}>
      <FaArrowLeft className=" text-2xl text-neutral-200" />
    </button>
  );
};
