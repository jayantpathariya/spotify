"use client";

import Sheet from "react-modal-sheet";
import Image from "next/image";
import axios from "axios";
import { useSelector } from "react-redux";
import { IoChevronDownOutline } from "react-icons/io5";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { LuShuffle, LuRepeat } from "react-icons/lu";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { RiPlayFill } from "react-icons/ri";
import { MdOutlinePause } from "react-icons/md";
import { useSession } from "next-auth/react";
import { useCallback, useEffect } from "react";
import { toast } from "sonner";

import { ModalSeekBar } from "./modal-seekbar";
import { usePlayer } from "@/hooks/use-player";
import { cn } from "@/lib/utils";
import { useImageColor } from "@/hooks/use-image-color";

export const PlayerModal = ({ isOpen, setIsOpen, isLiked, setIsLiked }) => {
  const { currentSong, songs, index } = useSelector((state) => state.song);
  const { data: session } = useSession();

  const color = useImageColor(currentSong?.image || "/default-cover.jpg");

  const {
    isPlaying,
    seek,
    duration,
    handleTogglePlay,
    handleSeek,
    handleNextSong,
    handlePrevSong,
    handleShuffleSongs,
  } = usePlayer();

  const onClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const handleLike = async (e) => {
    e.stopPropagation();

    if (session) {
      const res = await axios.patch(`/api/songs/${currentSong?.id}`, {
        ...currentSong,
        action: "like",
        isLiked: isLiked ? false : true,
      });
      if (res.status === 200) {
        getIsSongLiked();
        toast.success(`Song ${isLiked ? "unliked" : "liked"}`);
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
      setIsLiked(response.data.isLiked);
    }
  }, [currentSong?.id, session, setIsLiked]);

  useEffect(() => {
    getIsSongLiked();
  }, [getIsSongLiked]);

  return (
    <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Sheet.Container>
        <Sheet.Content
          style={{
            backgroundColor: color,
          }}
        >
          <Sheet.Header className="py-5 px-4 flex items-center justify-between">
            <button onClick={onClose}>
              <IoChevronDownOutline className="text-2xl text-neutral-200" />
            </button>
            <button>
              <PiDotsThreeOutlineFill className="text-xl text-neutral-200" />
            </button>
          </Sheet.Header>
          <Sheet.Scroller className="p-4  w-full pb-6 pt-0">
            <div className="w-full mt-5">
              <Image
                src={
                  currentSong?.image?.replace("150x150", "500x500") ||
                  "/default-cover.jpg"
                }
                alt={`${currentSong?.title} poster`}
                width={300}
                height={300}
                className="w-full h-full shadow-lg "
              />
            </div>
            <div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h1
                    className="text-2xl font-extrabold text-neutral-200 mt-4 line-clamp-1"
                    dangerouslySetInnerHTML={{
                      __html: currentSong?.title,
                    }}
                  />
                  <p
                    className="text-sm text-neutral-300 mt-1 line-clamp-1"
                    dangerouslySetInnerHTML={{
                      __html: currentSong?.subtitle,
                    }}
                  />
                </div>
                <button onClick={handleLike}>
                  <FiHeart
                    className={cn(
                      "text-2xl text-neutral-300",
                      isLiked && "text-red-500 fill-red-500"
                    )}
                  />
                </button>
              </div>
              <div className="mt-4">
                <div>
                  <ModalSeekBar
                    value={seek}
                    max={duration}
                    onChange={handleSeek}
                  />
                  <div className="flex items-center justify-between text-neutral-300">
                    <span className="text-xs">
                      {new Date(seek * 1000).toISOString().substr(14, 5) ||
                        "--:--"}
                    </span>
                    <span className="text-xs">
                      {new Date(duration ? duration * 1000 : 0)
                        .toISOString()
                        .substr(14, 5) || "--:--"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <button
                    className="text-neutral-200"
                    onClick={handleShuffleSongs}
                  >
                    <LuShuffle className="text-2xl" />
                  </button>
                  <button
                    onClick={handlePrevSong}
                    className={cn(
                      "text-neutral-200",
                      index === 0 && "pointer-events-none text-neutral-400"
                    )}
                  >
                    <GiPreviousButton className="text-4xl " />
                  </button>
                  <button
                    className="w-14 h-14 bg-neutral-200 flex items-center justify-center rounded-full hover:scale-105 transition duration-200"
                    onClick={handleTogglePlay}
                  >
                    {isPlaying ? (
                      <MdOutlinePause className="text-3xl text-neutral-950" />
                    ) : (
                      <RiPlayFill className="text-3xl text-neutral-950" />
                    )}
                  </button>
                  <button
                    onClick={handleNextSong}
                    className={cn(
                      "text-neutral-200",
                      index === songs?.length - 1 &&
                        "pointer-events-none text-neutral-400"
                    )}
                  >
                    <GiNextButton className="text-4xl" />
                  </button>
                  <button>
                    <LuRepeat className="text-2xl text-neutral-300" />
                  </button>
                </div>
              </div>
            </div>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};
