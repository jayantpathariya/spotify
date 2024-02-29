import Image from "next/image";
import { RiPlayFill } from "react-icons/ri";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

import { Table } from "@/components/table";
import { BackButton } from "@/components/back-button";
import TableItem from "@/components/table-item";

const QueuePage = () => {
  return (
    <div className="p-4">
      <BackButton className="p-0 mb-4" />
      <h1 className="text-3xl font-extrabold mt-4 text-neutral-200">Queue</h1>
      <h2 className="font-semibold mt-4">Now playing</h2>

      <TableItem
        index={1}
        startIndex={0}
        image="/playlist.jpg"
        title="Kesariya"
        artists="Pritam, Arijit Singh, Amitabh Bhattacharya"
        album="Brahmastra (Original Motion Picture Soundtrack)"
        duration="3:56"
      />

      <h2 className="font-semibold mt-8 mb-2">Next from: Playlist</h2>
      <Table startIndex={2} showHeader={false} />
    </div>
  );
};

export default QueuePage;
