"use client";

import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useDispatch } from "react-redux";

import { PlayButton } from "./play-button";
import { setSong } from "@/redux/songSlice";

export const PlaylistCard = ({ title, images, subtitle, type, link }) => {
  const dispatch = useDispatch();

  const getPlaylistSongs = async () => {
    try {
      const result = await axios(`/api/playlist/${type}/${link}`);
      const data = result.data;

      dispatch(
        setSong({
          song: data.list[0],
          index: 0,
          playlist: data.list,
          playlistName: data.title,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    getPlaylistSongs();
    console.log("play");
  };

  return (
    <Link
      href={`/${type}/${link}`}
      className="lg:p-4 inline-block lg:bg-neutral-900 rounded-md lg:hover:bg-neutral-800 transition duration-300 ease-in-out group h-full"
    >
      <div className="relative">
        <Image
          src={images}
          width={180}
          height={180}
          alt={`${title} playlist cover`}
          className="w-full rounded-md mb-3"
        />
        <PlayButton
          className="absolute bottom-2 right-2 translate-y-2 opacity-0  group-hover:opacity-100 transition duration-300 group-hover:translate-y-0"
          size="md"
          onClick={handlePlay}
        />
      </div>
      <div className="mt-3">
        <p className="text-neutral-200 font-bold line-clamp-1 mb-1">{title}</p>
        <div className="hidden lg:inline-block">
          <p className="text-sm line-clamp-2">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};
