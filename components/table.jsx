import { MdOutlineWatchLater } from "react-icons/md";

import TableItem from "./table-item";

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
          track={track}
          playlist={playlist}
        />
      ))}
    </div>
  );
};
