"use client";

import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import { RiPlayFill } from "react-icons/ri";
import { MdOutlinePause } from "react-icons/md";
import { useSelector } from "react-redux";

import { useImageColor } from "@/hooks/use-image-color";
import { cn } from "@/lib/utils";
import { MobileSeekBar } from "./mobile-seekbar";
import { usePlayer } from "@/hooks/use-player";

export const MobilePlayer = () => {
  const { currentSong } = useSelector((state) => state.song);

  const color = useImageColor(currentSong?.image);
  const bgColor = `${color}E6`;
  // if bgColor is too light, use a darker color
  const getTextColor = (color) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? "#000" : "#fff";
  };

  const textColor = getTextColor(color);
  const subtitleColor = textColor === "#000" ? "#666" : "#999";

  const { isPlaying, seek, duration, handleTogglePlay } = usePlayer();

  return (
    <div
      className={cn(
        "sticky bottom-[10.2%] left-0 right-0 rounded-md p-2 flex items-center justify-between gap-x-2 m-2 lg:hidden"
      )}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="flex items-center gap-x-2">
        <Image
          src={currentSong?.image}
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
            style={{
              color: textColor,
            }}
          />
          <p
            className="text-xs line-clamp-1"
            dangerouslySetInnerHTML={{
              __html: currentSong?.subtitle,
            }}
            style={{
              color: subtitleColor,
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
    </div>
  );
};
