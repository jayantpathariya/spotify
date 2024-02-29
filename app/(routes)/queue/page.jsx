import Image from "next/image";
import { RiPlayFill } from "react-icons/ri";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

import { Table } from "@/components/table";
import { BackButton } from "@/components/back-button";

const QueuePage = () => {
  return (
    <div className="p-4">
      <BackButton className="p-0 mb-4" />
      <h1 className="text-2xl font-bold text-neutral-200">Queue</h1>
      <h2 className="font-semibold mt-4">Now playing</h2>

      <div className="flex justify-between md:grid grid-cols-table items-center hover:bg-neutral-200/10 p-2 md:rounded-md group cursor-pointer">
        <div className="hidden md:block">
          <span className="justify-self-center group-hover:hidden">{1}</span>
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

      <h2 className="font-semibold mt-8 mb-2">Next from: Playlist</h2>
      <Table startIndex={2} showHeader={false} />
    </div>
  );
};

export default QueuePage;
