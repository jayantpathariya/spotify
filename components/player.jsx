"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FiHeart } from "react-icons/fi";
import { LuShuffle, LuRepeat } from "react-icons/lu";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { RiPlayFill } from "react-icons/ri";
import { MdOutlinePause, MdFullscreenExit, MdFullscreen } from "react-icons/md";
import {
  RxSpeakerLoud,
  RxSpeakerQuiet,
  RxSpeakerModerate,
  RxSpeakerOff,
} from "react-icons/rx";
import { HiOutlineQueueList } from "react-icons/hi2";
import { useSelector } from "react-redux";

import { SeekBar } from "./seek-bar";
import { cn } from "@/lib/utils";
import { usePlayer } from "@/hooks/use-player";

export const Player = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const {
    isPlaying,
    seek,
    volume,
    duration,
    handleTogglePlay,
    handleVolumeChange,
    handleSeek,
    handleMute,
    handleNextSong,
    handlePrevSong,
    handleShuffleSongs,
  } = usePlayer();

  const router = useRouter();
  const pathname = usePathname();

  const { currentSong } = useSelector((state) => state.song);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  console.log(currentSong);

  return (
    <div className="w-full items-center justify-between hidden lg:flex">
      <div className="flex items-center gap-x-4 w-1/4">
        <div className="flex items-center gap-x-4">
          <Image
            src={currentSong?.image}
            width={50}
            height={50}
            alt="song poster"
            className="w-14 rounded-md"
          />
          <div>
            <p
              className="font-bold text-neutral-200 line-clamp-1"
              dangerouslySetInnerHTML={{
                __html: currentSong?.title,
              }}
            />
            <p
              className="text-sm line-clamp-1"
              dangerouslySetInnerHTML={{
                __html: currentSong?.subtitle,
              }}
            />
          </div>
        </div>
        <button className="hover:text-neutral-200 hover:scale-105 transition duration-200">
          <FiHeart className="text-lg" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-1 w-[40%]">
        <div className="flex items-center gap-x-5">
          <button
            className="hover:text-neutral-200 transition cursor-auto disabled:opacity-50 disabled:hover:text-neutral-400"
            onClick={handleShuffleSongs}
          >
            <LuShuffle className="text-lg" />
          </button>
          <button
            className="hover:text-neutral-200 transition disabled:opacity-50 disabled:hover:text-neutral-400"
            onClick={handlePrevSong}
          >
            <GiPreviousButton className="text-2xl" />
          </button>
          <button
            className="w-9 h-9 bg-neutral-200 flex items-center justify-center rounded-full hover:scale-105 transition duration-200"
            onClick={handleTogglePlay}
          >
            {isPlaying ? (
              <MdOutlinePause className="text-2xl text-neutral-950" />
            ) : (
              <RiPlayFill className="text-2xl text-neutral-950" />
            )}
          </button>
          <button
            className="hover:text-neutral-200 transition disabled:opacity-50 disabled:hover:text-neutral-400"
            onClick={handleNextSong}
          >
            <GiNextButton className="text-2xl" />
          </button>
          <button className="hover:text-neutral-200 transition disabled:opacity-50 disabled:hover:text-neutral-400">
            <LuRepeat className="text-lg" />
          </button>
        </div>
        <div className="flex items-center w-full gap-x-2">
          <span className="text-sm">
            {new Date(seek * 1000).toISOString().substr(14, 5) || "--:--"}
          </span>
          <div className="w-full shrink-0">
            <SeekBar
              className="w-full"
              value={seek}
              max={duration}
              onChange={handleSeek}
            />
          </div>
          <span className="text-sm">
            {new Date(duration ? duration * 1000 : 0)
              .toISOString()
              .substr(14, 5) || "--:--"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <button
          className={cn(
            "hover:scale-105 hover:text-neutral-200 transition duration-200",
            pathname === "/queue" && "text-green-500"
          )}
          onClick={() => router.push("/queue")}
        >
          <HiOutlineQueueList className="text-xl" />
        </button>
        <div className="flex gap-x-2">
          <button
            className="hover:text-neutral-200 transition duration-200"
            onClick={handleMute}
          >
            {volume > 0.5 ? (
              <RxSpeakerLoud className="text-lg" />
            ) : volume > 0.1 ? (
              <RxSpeakerModerate className="text-lg" />
            ) : volume > 0 ? (
              <RxSpeakerQuiet className="text-lg" />
            ) : (
              <RxSpeakerOff className="text-lg" />
            )}
          </button>
          <SeekBar
            className="w-[120px]"
            value={volume}
            max={1}
            step={0.01}
            onChange={handleVolumeChange}
          />
        </div>
        <button
          onClick={toggleFullScreen}
          className="hover:scale-105 hover:text-neutral-200 transition duration-200"
        >
          {isFullscreen ? (
            <MdFullscreenExit className="text-2xl" />
          ) : (
            <MdFullscreen className="text-2xl" />
          )}
        </button>
      </div>
    </div>
  );
};
