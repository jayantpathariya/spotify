import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import { PiDotsThreeBold } from "react-icons/pi";

import { PlayButton } from "@/components/play-button";
import { Table } from "@/components/table";
import { BackButton } from "@/components/back-button";
import { getPlaylist } from "@/actions/get-playlist";
import { formatArtists, formatDuration } from "@/lib/utils";

const PlaylistPage = async ({ params }) => {
  const { playlistType, playlistId } = params;

  const result = await getPlaylist({
    id: playlistId,
    type: playlistType,
  });

  return (
    <div>
      <div className="sticky top-0">
        <BackButton />
      </div>
      <div className="flex flex-col items-center justify-center lg:justify-start md:flex-row gap-x-4 p-4">
        <Image
          src={result?.images[2]?.link}
          width={250}
          height={250}
          alt={`${result?.title} cover`}
          className="w-48 md:w-60 rounded-md"
        />
        <div className="self-start md:self-end mt-2 md:mt-0">
          <span className="text-neutral-200 hidden md:inline-block capitalize">
            {result?.type}
          </span>
          <h1 className="text-xl md:text-6xl lg:text-8xl font-extrabold text-neutral-200 mb-2 line-clamp-1">
            {result?.title}
          </h1>
          <p className="font-semibold text-sm md:text-base line-clamp-1 mb-1">
            {result?.subtitle || formatArtists(result?.more_info?.artistMap)}
          </p>
          <p className="text-sm md:text-base flex md:block flex-col gap-y-1">
            {/* <span className="text-neutral-200">Spotify </span> */}
            <span className="text-neutral-200 hidden md:inline-block">
              {result?.list_count} {+result?.list_count > 1 ? "songs" : "song"}
            </span>
            <span> {formatDuration(result?.duration)}</span>
          </p>
        </div>
      </div>
      <div className="md:mt-6 bg-gradient-to-b from-[#514d70]/40 to-[20rem] md:p-4">
        <div className="hidden md:flex gap-x-6 items-center">
          <PlayButton size="lg" />
          <button>
            <FiHeart className="text-4xl" />
          </button>
          <button>
            <PiDotsThreeBold className="text-4xl" />
          </button>
        </div>
        <div className="md:mt-6 md:p-2 pt-2">
          <Table playlist={result?.list} />
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
