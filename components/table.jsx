import { MdOutlineWatchLater } from "react-icons/md";

import TableItem from "./table-item";
import { formatArtists } from "@/lib/utils";

export const Table = ({ startIndex = 1, showHeader = true, playlist }) => {
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
          title={track?.title}
          duration={track?.more_info?.duration}
          album={track?.more_info.album}
          image={track?.image}
          artists={
            track?.subtitle || formatArtists(track?.more_info?.artistMap)
          }
        />
      ))}
    </div>
  );
};
