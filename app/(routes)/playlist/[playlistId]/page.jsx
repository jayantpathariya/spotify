import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import { PiDotsThreeBold } from "react-icons/pi";

import { PlayButton } from "@/components/play-button";
import { Table } from "@/components/table";

const PlaylistPage = () => {
  return (
    <div>
      <div className="flex gap-x-4 p-4">
        <Image
          src="/playlist.jpg"
          width={250}
          height={250}
          alt="playlist poster"
          className="w-64 h-60 rounded-md"
        />
        <div className="self-end">
          <span className="text-neutral-200">Playlist</span>
          <h1 className="text-8xl font-extrabold text-neutral-200 mb-2">
            Daily mix 1
          </h1>
          <p className="font-semibold">
            Pritam, Rishi Kumar, Vishal-Shekhar and more
          </p>
          <p>Spotify · 2021 · 50 songs · 3 hr 30 min</p>
        </div>
      </div>
      <div className="mt-6 bg-gradient-to-b from-[#514d70]/40 to-[20rem] p-4">
        <div className="flex gap-x-6 items-center">
          <PlayButton size="lg" />
          <button>
            <FiHeart className="text-4xl" />
          </button>
          <button>
            <PiDotsThreeBold className="text-4xl" />
          </button>
        </div>
        <div className="mt-6 p-2">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
