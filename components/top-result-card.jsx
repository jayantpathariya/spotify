"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useDispatch } from "react-redux";

import { PlayButton } from "./play-button";
import { setSong } from "@/redux/songSlice";

export const TopResultCard = ({ title, image, subtitle, type, link, id }) => {
  const dispatch = useDispatch();

  const handlePlaySong = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    try {
      const result = await axios(`/api/songs/${id}`);
      const data = result.data;

      dispatch(
        setSong({
          playlist: [],
          song: data[0],
          index: 0,
          playlistName: data.title,
        })
      );
    } catch (error) {
      console.log("[PLAY_SONG]", error);
    }
  };

  return (
    <Link
      className="bg-neutral-900 p-4 rounded-md hover:bg-neutral-800/80 cursor-pointer relative group transition duration-300  w-full hidden lg:inline-block"
      href={`/${type}/${link}`}
    >
      <Image
        src={image}
        alt={`${title} image`}
        width={90}
        height={90}
        className="w-24 rounded-md"
      />
      <div className="mt-2">
        <p className="text-neutral-100 text-3xl font-bold mt-4 line-clamp-1">
          {title}
        </p>
        <p className="text-sm text-neutral-200 line-clamp-1">
          <span className="text-neutral-400 mt-2 capitalize">{type} </span>
          {subtitle && " • "} {subtitle}
        </p>
      </div>
      <PlayButton
        size="md"
        className="opacity-0 absolute bottom-4 right-4 group-hover:opacity-100 transition duration-300 ease-in-out"
        onClick={handlePlaySong}
      />
    </Link>
  );
};
