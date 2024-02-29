import Link from "next/link";
import Image from "next/image";
import { PlayButton } from "./play-button";

export const HorizontalPlaylist = () => {
  return (
    <Link
      href="/"
      className="bg-neutral-200/10 rounded-md overflow-hidden flex  items-center justify-between gap-x-2 md:hover:bg-neutral-200/20 transition duration-300 group"
    >
      <div className="flex items-center gap-x-2">
        <Image src="/playlist.jpg" width={60} height={60} alt="playlist" />
        <p className="font-bold text-neutral-300">Playlist</p>
      </div>
      <div className="p-2 opacity-0 group-hover:opacity-100">
        <PlayButton size="md" />
      </div>
    </Link>
  );
};
