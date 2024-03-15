"use client";

import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import { RiPlayFill } from "react-icons/ri";
import { MdOutlinePause } from "react-icons/md";
import { useSelector } from "react-redux";
import { useState } from "react";

import { useImageColor } from "@/hooks/use-image-color";
import { cn } from "@/lib/utils";
import { MobileSeekBar } from "./mobile-seekbar";
import { usePlayer } from "@/hooks/use-player";
import { PlayerModal } from "./player-modal";

export const MobilePlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentSong } = useSelector((state) => state.song);

  const color = useImageColor(currentSong?.image);
  let bgColor = "#000";

  const generateBgColor = (color) => {
    if (color !== "transparent") {
      bgColor = `${color}E6`;
    }

    return bgColor;
  };

  const { isPlaying, seek, duration, handleTogglePlay } = usePlayer();

  console.log("color", color);

  return (
    <div
      className={cn(
        "sticky bottom-[10.2%] left-0 right-0 rounded-md p-2 flex items-center justify-between gap-x-2 m-2 lg:hidden"
      )}
      style={{
        backgroundColor: generateBgColor(color),
      }}
      onClick={() => setIsOpen(true)}
    >
      <div className="flex items-center gap-x-2">
        <Image
          src={currentSong?.image || "/default-cover.jpg"}
          alt={`${currentSong?.title} poster`}
          width={50}
          height={50}
          className="w-18 rounded-md"
        />
        <div>
          <p
            className="font-bold line-clamp-1"
            dangerouslySetInnerHTML={{
              __html: currentSong?.title,
            }}
          />
          <p
            className="text-xs line-clamp-1"
            dangerouslySetInnerHTML={{
              __html: currentSong?.subtitle,
            }}
          />
        </div>
      </div>
      <div className="flex items-center gap-x-3 text-neutral-200">
        <button>
          <FiHeart className="text-2xl" />
        </button>
        <button onClick={handleTogglePlay}>
          {isPlaying ? (
            <MdOutlinePause className="text-2xl" />
          ) : (
            <RiPlayFill className="text-2xl" />
          )}
        </button>
      </div>
      <MobileSeekBar value={seek} max={duration} />
      <PlayerModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
