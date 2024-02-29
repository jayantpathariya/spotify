import Image from "next/image";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiPlayFill } from "react-icons/ri";

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

export const Table = () => {
  return (
    <div role="table">
      <div className="grid grid-cols-table border-b border-neutral-600 mb-4 p-2 text-sm ">
        <span className="justify-self-center">#</span>
        <span>Title</span>
        <span>Album</span>
        <span className="justify-self-center">
          <MdOutlineWatchLater />
        </span>
      </div>
      {playlist.map((track, index) => (
        <div
          key={track.id}
          className="grid grid-cols-table items-center hover:bg-neutral-200/10 p-2 rounded-md group"
        >
          <span className="justify-self-center group-hover:hidden">
            {index + 1}
          </span>
          <RiPlayFill className="text-xl justify-self-center hidden group-hover:block" />
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
          <div>
            <p className="text-sm line-clamp-1">
              Brahmastra (Original Motion Picture Soundtrack)
            </p>
          </div>
          <div className="justify-self-center">
            <span>3:56</span>
          </div>
        </div>
      ))}
    </div>
  );
};
