"use client";

import Image from "next/image";
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

import { SeekBar } from "./seek-bar";
import { useState } from "react";

export const Player = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="w-full items-center justify-between hidden lg:flex">
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-4">
          <Image
            src="/playlist.jpg"
            width={50}
            height={50}
            alt="song poster"
            className="w-14 rounded-md"
          />
          <div>
            <p className="font-bold text-neutral-200">Raat Bhar</p>
            <p className="text-sm line-clamp-1">Arijit Singh, Shreya Ghoshal</p>
          </div>
        </div>
        <button className="hover:text-neutral-200 hover:scale-105 transition duration-200">
          <FiHeart className="text-lg" />
        </button>
      </div>
      <div className="flex flex-col items-center gap-y-2 w-[40%]">
        <div className="flex items-center gap-x-5">
          <button className="hover:text-neutral-200 transition cursor-auto disabled:opacity-50 disabled:hover:text-neutral-400">
            <LuShuffle className="text-lg" />
          </button>
          <button className="hover:text-neutral-200 transition disabled:opacity-50 disabled:hover:text-neutral-400">
            <GiPreviousButton className="text-2xl" />
          </button>
          <button className="w-9 h-9 bg-neutral-200 flex items-center justify-center rounded-full hover:scale-105 transition duration-200">
            <RiPlayFill className="text-2xl text-neutral-950" />
          </button>
          <button className="hover:text-neutral-200 transition disabled:opacity-50 disabled:hover:text-neutral-400">
            <GiNextButton className="text-2xl" />
          </button>
          <button className="hover:text-neutral-200 transition disabled:opacity-50 disabled:hover:text-neutral-400">
            <LuRepeat className="text-lg" />
          </button>
        </div>
        <div className="w-full">
          <SeekBar className="w-full" />
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <button className="hover:scale-105 hover:text-neutral-200 transition duration-200">
          <HiOutlineQueueList className="text-xl" />
        </button>
        <div className="flex gap-x-2">
          <button className="hover:text-neutral-200 transition duration-200">
            <RxSpeakerLoud className="text-lg" />
          </button>
          <SeekBar className="w-[120px]" />
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
