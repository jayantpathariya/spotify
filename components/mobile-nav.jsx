import Link from "next/link";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { TbPlaylist } from "react-icons/tb";

export const MobileNav = () => {
  return (
    <div className="flex items-center justify-between lg:hidden">
      <Link href="/" className="flex flex-col items-center gap-y-1">
        <GoHomeFill className="text-3xl" />
        <span className="text-xs">Home</span>
      </Link>
      <Link href="/search" className="flex flex-col items-center gap-y-1">
        <GoSearch className="text-3xl" />
        <span className="text-xs">Search</span>
      </Link>
      <Link href="/" className="flex flex-col items-center gap-y-1">
        <TbPlaylist className="text-3xl" />
        <span className="text-xs"> Your Library</span>
      </Link>
    </div>
  );
};
