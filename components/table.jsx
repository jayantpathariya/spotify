import Image from "next/image";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiPlayFill } from "react-icons/ri";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const playlist = [
  {
    id: 1,
    title: "Kesariya",
    album: "Brahmastra (Original Motion Picture Soundtrack)",
    duration: "3:56",
  },
  {
    id: 2,
    title: "Kesariya",
    album: "Brahmastra (Original Motion Picture Soundtrack)",
    duration: "3:56",
  },
  {
    id: 3,
    title: "Kesariya",
    album: "Brahmastra (Original Motion Picture Soundtrack)",
    duration: "3:56",
  },
  {
    id: 4,
    title: "Kesariya",
    album: "Brahmastra (Original Motion Picture Soundtrack)",
    duration: "3:56",
  },
  {
    id: 5,
    title: "Kesariya",
    album: "Brahmastra (Original Motion Picture Soundtrack)",
    duration: "3:56",
  },
  {
    id: 6,
    title: "Kesariya",
    album: "Brahmastra (Original Motion Picture Soundtrack)",
    duration: "3:56",
  },
  {
    id: 7,
    title: "Kesariya",
    album: "Brahmastra (Original Motion Picture Soundtrack)",
    duration: "3:56",
  },
  {
    id: 8,
    title: "Kesariya",
    album: "Brahmastra (Original Motion Picture Soundtrack)",
    duration: "3:56",
  },
  {
    id: 9,
    title: "Kesariya",
    album: "Brahmastra (Original Motion Picture Soundtrack)",
    duration: "3:56",
  },
  {
    id: 10,
    title: "Kesariya",
    album: "Brahmastra (Original Motion Picture Soundtrack)",
    duration: "3:56",
  },
];

export const Table = ({ startIndex = 1, showHeader = true }) => {
  return (
    <div role="table">
      {showHeader && (
        <div className="hidden md:grid grid-cols-table border-b border-neutral-600 mb-4 p-2 text-sm ">
          <span className="justify-self-center">#</span>
          <span>Title</span>
          <span>Album</span>
          <span className="justify-self-center">
            <MdOutlineWatchLater />
          </span>
        </div>
      )}
      {playlist.map((track, index) => (
        <div
          key={track.id}
          className="flex justify-between md:grid grid-cols-table items-center hover:bg-neutral-200/10 p-2 md:rounded-md group cursor-pointer"
        >
          <div className="hidden md:block">
            <span className="justify-self-center group-hover:hidden">
              {index + startIndex}
            </span>
            <RiPlayFill className="text-xl justify-self-center hidden group-hover:block" />
          </div>
          <div className="flex items-center gap-x-2">
            <Image
              src="/playlist.jpg"
              width={50}
              height={50}
              alt="playlist poster"
              className="w-11 h-11 rounded-md"
            />
            <div>
              <p className="text-neutral-200">Kesariya</p>
              <p className="text-sm line-clamp-1">
                Pritam, Arijit Singh, Amitabh Bhattacharya
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-sm line-clamp-1">
              Brahmastra (Original Motion Picture Soundtrack)
            </p>
          </div>
          <div className="justify-self-center hidden md:block">
            <span>3:56</span>
          </div>
          <button className="md:hidden">
            <PiDotsThreeVerticalBold className="text-2xl" />
          </button>
        </div>
      ))}
    </div>
  );
};
