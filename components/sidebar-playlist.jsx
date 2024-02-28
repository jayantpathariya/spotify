import Link from "next/link";
import Image from "next/image";

export const SidebarPlaylist = ({ playlist }) => {
  return (
    <Link
      href="/"
      className="flex items-center gap-x-2 font-semibold hover:bg-neutral-900 p-1 rounded-sm"
    >
      <Image
        src={playlist.image}
        alt={playlist.name}
        height={50}
        width={50}
        className="rounded-md"
      />
      <div>
        <p className="text-neutral-200">{playlist.name}</p>
        <p className="text-sm">Playlist • Jayant</p>
      </div>
    </Link>
  );
};
