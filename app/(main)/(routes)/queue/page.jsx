"use client";

import { useSelector } from "react-redux";

import { Table } from "@/components/table";
import { BackButton } from "@/components/back-button";
import TableItem from "@/components/table-item";

const QueuePage = () => {
  const { currentSong, songs, index } = useSelector((state) => state.song);

  return (
    <>
      {currentSong ? (
        <div className="p-4">
          <BackButton className="p-0 mb-4" />
          <h1 className="text-3xl font-extrabold mt-4 text-neutral-200">
            Queue
          </h1>
          <h2 className="font-semibold mt-4">Now playing</h2>

          <TableItem index={1} startIndex={0} track={currentSong} />

          <h2 className="font-semibold mt-8 mb-2">Next from: Playlist</h2>
          <Table
            startIndex={2}
            showHeader={false}
            playlist={songs?.slice(index + 1)}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-extrabold mt-4 text-neutral-200">
              Queue
            </h1>
            <h2 className="font-semibold mt-4">No songs in queue</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default QueuePage;
