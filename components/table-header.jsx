"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { PiDotsThreeBold } from "react-icons/pi";
import { toast } from "sonner";

import { PlayButton } from "@/components/play-button";
import { cn } from "@/lib/utils";

export const TableHeader = ({ playlist }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePlaylist = async () => {
    try {
      const res = await axios.post(`/api/playlist`, {
        ...playlist,
        action: "like",
        isLiked: isLiked ? false : true,
      });

      if (res.status === 200) {
        getIsPlaylistLiked();
        toast.success(`Playlist ${isLiked ? "unliked" : "liked"}`);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getIsPlaylistLiked = useCallback(async () => {
    try {
      const res = await axios(`/api/playlist/is-liked/${playlist.id}`);
      const data = res.data;
      setIsLiked(data.liked);
    } catch (error) {
      console.error(error);
    }
  }, [playlist.id]);

  useEffect(() => {
    getIsPlaylistLiked();
  }, [getIsPlaylistLiked]);

  console.log(isLiked);

  return (
    <div className="hidden md:flex gap-x-6 items-center">
      <PlayButton size="lg" />
      <button onClick={handleLikePlaylist}>
        <FiHeart
          className={cn("text-4xl", isLiked && "text-red-500 fill-red-500")}
        />
      </button>
      <button>
        <PiDotsThreeBold className="text-4xl" />
      </button>
    </div>
  );
};
