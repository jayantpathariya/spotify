import { LibraryPlaylist } from "@/components/library-playlist";
import Image from "next/image";
import { GoPlus, GoSearch } from "react-icons/go";

const YourLibraryPage = () => {
  return (
    <div>
      <div className="p-4 flex items-center justify-between">
        <h1 className="text-neutral-100 font-bold text-2xl mt-4">
          Your Library
        </h1>
        <div className="flex items-center gap-x-4 mt-4">
          <button>
            <GoSearch className="text-2xl text-neutral-100" />
          </button>
          <button>
            <GoPlus className="text-3xl text-neutral-100" />
          </button>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-y-4">
        <LibraryPlaylist title="Hindi Songs" />
        <LibraryPlaylist title="Favorite" />
        <LibraryPlaylist title="Old is Gold" />
        <LibraryPlaylist title="Rock" />
        <LibraryPlaylist title="Pop" />
        <LibraryPlaylist title="Hip Hop" />
        <LibraryPlaylist title="Jazz" />
        <LibraryPlaylist title="Classical" />
      </div>
    </div>
  );
};

export default YourLibraryPage;
