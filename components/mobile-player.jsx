"use client";

import Image from "next/image";
import axios from "axios";
import { FiHeart } from "react-icons/fi";
import { RiPlayFill } from "react-icons/ri";
import { MdOutlinePause } from "react-icons/md";
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

import { useImageColor } from "@/hooks/use-image-color";
import { cn } from "@/lib/utils";
import { MobileSeekBar } from "./mobile-seekbar";
import { usePlayer } from "@/hooks/use-player";
import { PlayerModal } from "./player-modal";

export const MobilePlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSongLiked, setIsSongLiked] = useState(false);
  const { currentSong } = useSelector((state) => state.song);

  const { data: session } = useSession();

  const color = useImageColor(currentSong?.image);
  let bgColor = "#000";

  const generateBgColor = (color) => {
    if (color !== "transparent") {
      bgColor = `${color}E6`;
    }

    return bgColor;
  };

  const { isPlaying, seek, duration, handleTogglePlay } = usePlayer();

  const handleLike = async (e) => {
    e.stopPropagation();

    if (session) {
      const res = await axios.patch(`/api/songs/${currentSong?.id}`, {
        ...currentSong,
        action: "like",
        isLiked: isSongLiked ? false : true,
      });
      if (res.status === 200) {
        getIsSongLiked();
        toast.success(`Song ${isSongLiked ? "unliked" : "liked"}`);
      } else {
        toast.error("Something went wrong");
      }
    } else {
      toast.error("You need to login to like a song");
    }
  };

  const getIsSongLiked = useCallback(async () => {
    if (session && currentSong?.id) {
      const response = await axios(`/api/songs/${currentSong?.id}/is-liked`);
      setIsSongLiked(response.data.isLiked);
    }
  }, [currentSong?.id, session]);

  useEffect(() => {
    getIsSongLiked();
  }, [getIsSongLiked]);

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
        <button onClick={handleLike}>
          <FiHeart
            className={cn(
              "text-xl ",
              isSongLiked && "text-red-500 fill-red-500"
            )}
          />
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
      <PlayerModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isLiked={isSongLiked}
        setIsLiked={setIsSongLiked}
      />
    </div>
  );
};
