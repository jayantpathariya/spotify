"use client";

import axios from "axios";
import Image from "next/image";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { RiPlayFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import { cn, formatArtists, secondsToMinutes } from "@/lib/utils";
import { setSong } from "@/redux/songSlice";

const TableItem = ({ index, startIndex, track, playlist }) => {
  const { currentSong } = useSelector((state) => state.song);

  const dispatch = useDispatch();

  const handleSetSong = async () => {
    if (!track?.download_links) {
      const result = await axios(`/api/songs/${track?.id}`);
      const data = result.data;

      dispatch(
        setSong({
          playlist: [],
          song: data[0],
          index: 0,
          playlistName: data.title,
        })
      );
    } else {
      dispatch(
        setSong({
          song: track,
          index: index,
          playlist: playlist,
          playlistName: "My Playlist",
        })
      );
    }
  };

  return (
    <div
      className="flex justify-between md:grid grid-cols-table items-center hover:bg-neutral-200/10 p-2 md:rounded-md group cursor-pointer"
      onClick={handleSetSong}
    >
      <div className="hidden md:block">
        <span
          className={cn(
            "justify-self-center group-hover:hidden",
            currentSong?.id === track?.id && "text-green-500"
          )}
        >
          {index + startIndex}
        </span>
        <RiPlayFill className="text-xl justify-self-center hidden group-hover:block" />
      </div>
      <div className="flex items-center gap-x-2">
        <Image
          src={track?.image}
          width={50}
          height={50}
          alt="playlist poster"
          className="w-11 h-11 rounded-md"
        />
        <div>
          <p
            className={cn(
              "text-neutral-200 line-clamp-1",
              currentSong?.id === track?.id && "text-green-500"
            )}
            dangerouslySetInnerHTML={{
              __html: track?.title,
            }}
          />
          <p
            className="text-sm line-clamp-1"
            dangerouslySetInnerHTML={{
              __html:
                track?.subtitle || formatArtists(track?.more_info?.artistMap),
            }}
          />
        </div>
      </div>
      <div className="hidden md:block">
        <p className="text-sm line-clamp-1">{track?.more_info?.album}</p>
      </div>
      <div className="justify-self-center hidden md:block">
        <span>{secondsToMinutes(track?.more_info?.duration)}</span>
      </div>
      <button className="md:hidden">
        <PiDotsThreeVerticalBold className="text-2xl" />
      </button>
    </div>
  );
};

export default TableItem;
