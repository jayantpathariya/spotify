import Image from "next/image";

export const LibraryPlaylist = ({ title }) => {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        src="/playlist.jpg"
        alt="playlist"
        width={60}
        height={60}
        className="rounded-md w-16"
      />
      <div>
        <p className="text-neutral-200 font-bold">{title}</p>
        <p className="text-sm">
          <span>Playlist</span>
          <span>•</span>
          <span>Jayant</span>
        </p>
      </div>
    </div>
  );
};
