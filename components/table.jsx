import { MdOutlineWatchLater } from "react-icons/md";

import TableItem from "./table-item";

const playlist = [
  {
    id: 1,
    title: "Kesariya",
    album: "Brahmastra (Original Motion Picture Soundtrack)",
    artists: "Pritam, Arijit Singh, Amitabh Bhattacharya",
    duration: "3:56",
    image: "/playlist.jpg",
  },
  {
    id: 2,
    title: "Apna Banale Le",
    album: "Bhediya",
    artists: "Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya",
    duration: "4:12",
    image: "/playlist.jpg",
  },
  {
    id: 3,
    title: "Mann Bharryaa 2.0",
    album: "Mann Bharryaa 2.0",
    artists: "B Praak, Jaani",
    duration: "3:56",
    image: "/playlist.jpg",
  },
  {
    id: 4,
    title: "Kesariya",
    album: "Brahmastra (Original Motion Picture Soundtrack)",
    artists: "Pritam, Arijit Singh, Amitabh Bhattacharya",
    duration: "3:56",
    image: "/playlist.jpg",
  },
  {
    id: 5,
    title: "Apna Banale Le",
    album: "Bhediya",
    artists: "Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya",
    duration: "4:12",
    image: "/playlist.jpg",
  },
  {
    id: 6,
    title: "Mann Bharryaa 2.0",
    album: "Mann Bharryaa 2.0",
    artists: "B Praak, Jaani",
    duration: "3:56",
    image: "/playlist.jpg",
  },
  {
    id: 7,
    title: "Kesariya",
    album: "Brahmastra (Original Motion Picture Soundtrack)",
    artists: "Pritam, Arijit Singh, Amitabh Bhattacharya",
    duration: "3:56",
    image: "/playlist.jpg",
  },
  {
    id: 8,
    title: "Apna Banale Le",
    album: "Bhediya",
    artists: "Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya",
    duration: "4:12",
    image: "/playlist.jpg",
  },
  {
    id: 9,
    title: "Mann Bharryaa 2.0",
    album: "Mann Bharryaa 2.0",
    artists: "B Praak, Jaani",
    duration: "3:56",
    image: "/playlist.jpg",
  },
  {
    id: 10,
    title: "Kesariya",
    album: "Brahmastra (Original Motion Picture Soundtrack)",
    artists: "Pritam, Arijit Singh, Amitabh Bhattacharya",
    duration: "3:56",
    image: "/playlist.jpg",
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
        <TableItem
          key={track.id}
          index={index}
          startIndex={startIndex}
          title={track.title}
          duration={track.duration}
          album={track.album}
          image={track.image}
          artists={track.artists}
        />
      ))}
    </div>
  );
};
