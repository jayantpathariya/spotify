"use client";

import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import { RiPlayFill } from "react-icons/ri";

import { useImageColor } from "@/hooks/use-image-color";
import { cn } from "@/lib/utils";

export const MobilePlayer = () => {
  const color = useImageColor("/playlist.jpg");
  const bgColor = color ? `bg-[${color}]` : "bg-orange-800/30";

  return (
    <div
      className={cn(
        "sticky bottom-[10.2%] left-1 w-[96%] rounded-md p-2 flex items-center justify-between gap-x-2 m-2 lg:hidden",
        bgColor && "bg-[#514d70]"
      )}
    >
      <div className="flex items-center gap-x-4">
        <Image
          src="/playlist.jpg"
          alt="song poster"
          width={50}
          height={50}
          className="w-18 rounded-md"
        />
        <div>
          <p className="font-bold text-neutral-200 line-clamp-1">Raat Bhar</p>
          <p className="text-xs line-clamp-1">Arijit Singh, Shreya Ghoshal</p>
        </div>
      </div>
      <div className="flex items-center gap-x-3 text-neutral-200">
        <button>
          <FiHeart className="text-2xl" />
        </button>
        <button>
          <RiPlayFill className="text-3xl" />
        </button>
      </div>
    </div>
  );
};
