import Image from "next/image";
import { PlayButton } from "./play-button";

export const TopResultCard = () => {
  return (
    <div className="bg-neutral-900 p-4 rounded-md cursor-pointer relative group">
      <Image
        src="/playlist.jpg"
        alt="song poster"
        width={90}
        height={90}
        className="w-24 rounded-md"
      />
      <div className="mt-2">
        <p className="text-neutral-100 text-3xl font-bold mt-4 line-clamp-1">
          Kesariya
        </p>
        <p className="text-sm text-neutral-200 line-clamp-1">
          <span className="text-neutral-400 mt-2">Song • </span>
          Pritam, Arijit Singh, Amitabh Bhattacharya
        </p>
      </div>
      <PlayButton
        size="md"
        className="opacity-0 absolute bottom-4 right-4 group-hover:opacity-100 transition duration-300 ease-in-out"
      />
    </div>
  );
};
