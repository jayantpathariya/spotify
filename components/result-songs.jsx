import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import { PiDotsThreeBold } from "react-icons/pi";
import { RiPlayFill } from "react-icons/ri";

export const ResultSongs = ({ playlist }) => {
  return (
    <div className="flex flex-col">
      {playlist.map((song) => (
        <div
          className="flex items-center gap-x-2 justify-between hover:bg-neutral-200/10 p-2 rounded-md group"
          key={song.id}
        >
          <div className="flex items-center gap-x-2">
            <div className="relative">
              <div className="text-neutral-200 rounded-md bg-neutral-900/40 w-full h-full text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <RiPlayFill className="text-3xl" />
              </div>
              <Image
                src={song.image}
                alt={`${song.title} image`}
                width={42}
                height={42}
                className="w-12 rounded-md"
              />
            </div>
            <div>
              <p
                className="text-neutral-100 line-clamp-1"
                dangerouslySetInnerHTML={{ __html: song.title }}
              />
              <p
                className="line-clamp-1 text-sm"
                dangerouslySetInnerHTML={{ __html: song.subtitle }}
              />
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <button className="opacity-0 hover:text-neutral-200 transition group-hover:opacity-100">
              <FiHeart className="text-lg" />
            </button>
            <span>3:56</span>
            <button className="opacity-0 group-hover:opacity-100 hover:text-neutral-200 transition">
              <PiDotsThreeBold className="text-xl" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
