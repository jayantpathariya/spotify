"use client";

import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

import { BackButton } from "@/components/back-button";
import TableItem from "@/components/table-item";
import { Playlist } from "@/components/playlist";
import { Table } from "@/components/table";
import { TopResultCard } from "@/components/top-result-card";
import { ResultSongs } from "@/components/result-songs";

const QueryPage = ({ params }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      {/* mobile ui */}
      <div className="lg:hidden">
        <div className="flex items-center gap-x-4 p-4">
          <BackButton className="p-0" />
          <div className="relative lg:hidden w-full">
            <GoSearch className="text-2xl text-neutral-900 absolute left-2 top-2" />
            <input
              type="text"
              placeholder="What do you want to listen to?"
              className="w-full outline-none py-2 pl-10 pr-8 text-neutral-800 placeholder:text-neutral-800 rounded-md"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            {value && (
              <button onClick={() => setValue("")}>
                <RxCross1 className="text-lg text-neutral-900 absolute right-2 top-2.5" />
              </button>
            )}
          </div>
        </div>

        <TableItem
          index={1}
          startIndex={0}
          image="/playlist.jpg"
          title="Kesariya"
          artists="Pritam, Arijit Singh, Amitabh Bhattacharya"
          album="Brahmastra (Original Motion Picture Soundtrack)"
          duration="3:56"
        />

        <div className="p-2">
          <Playlist title="Featuring Arijit Singh" />
        </div>
        <Table />
      </div>
      {/* desktop ui */}
      <div className="grid grid-cols-6 gap-4 p-4">
        <div className="col-span-2">
          <h2 className="text-2xl text-neutral-100 font-bold mb-1">
            Top result
          </h2>
          <TopResultCard />
        </div>
        <div className="col-span-4">
          <h2 className="text-2xl text-neutral-100 font-bold mb-2">Songs</h2>
          <ResultSongs />
        </div>
      </div>
      <div className="p-4">
        <Playlist title="Artists" />
        <Playlist title="Songs" />
        <Playlist title="Playlists" />
      </div>
    </div>
  );
};

export default QueryPage;
