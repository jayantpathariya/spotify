"use client";

import Link from "next/link";
import { useMemo, useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { GoHomeFill, GoSearch, GoPlus } from "react-icons/go";
import { TbPlaylist } from "react-icons/tb";
import { IoIosList } from "react-icons/io";

import { Box } from "./box";
import { NavItem } from "./nav-item";
import { Badge } from "./badge";
import { SidebarPlaylist } from "./sidebar-playlist";
import { cn } from "@/lib/utils";

const playlists = [
  {
    id: 1,
    name: "Playlist 1",
    image: "/playlist.jpg",
  },
  {
    id: 2,
    name: "Playlist 2",
    image: "/playlist.jpg",
  },
  {
    id: 3,
    name: "Playlist 3",
    image: "/playlist.jpg",
  },
  {
    id: 4,
    name: "Playlist 4",
    image: "/playlist.jpg",
  },
  {
    id: 5,
    name: "Playlist 5",
    image: "/playlist.jpg",
  },
  {
    id: 6,
    name: "Playlist 6",
    image: "/playlist.jpg",
  },
  {
    id: 7,
    name: "Playlist 7",
    image: "/playlist.jpg",
  },
  {
    id: 8,
    name: "Playlist 8",
    image: "/playlist.jpg",
  },
  {
    id: 9,
    name: "Playlist 8",
    image: "/playlist.jpg",
  },
  {
    id: 10,
    name: "Playlist 8",
    image: "/playlist.jpg",
  },
  {
    id: 11,
    name: "Playlist 8",
    image: "/playlist.jpg",
  },
  {
    id: 12,
    name: "Playlist 8",
    image: "/playlist.jpg",
  },
  {
    id: 13,
    name: "Playlist 8",
    image: "/playlist.jpg",
  },
  {
    id: 14,
    name: "Playlist 8",
    image: "/playlist.jpg",
  },
  {
    id: 15,
    name: "Playlist 8",
    image: "/playlist.jpg",
  },
  {
    id: 16,
    name: "Playlist 8",
    image: "/playlist.jpg",
  },
  {
    id: 17,
    name: "Playlist 8",
    image: "/playlist.jpg",
  },
  {
    id: 18,
    name: "Playlist 8",
    image: "/playlist.jpg",
  },
  {
    id: 19,
    name: "Playlist 8",
    image: "/playlist.jpg",
  },
  {
    id: 20,
    name: "Playlist 8",
    image: "/playlist.jpg",
  },
  {
    id: 21,
    name: "Playlist 8",
    image: "/playlist.jpg",
  },
  {
    id: 22,
    name: "Playlist 8",
    image: "/playlist.jpg",
  },
  {
    id: 23,
    name: "Playlist 23",
    image: "/playlist.jpg",
  },
];

export const Sidebar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const scrollYRef = useRef(null);

  const pathname = usePathname();

  const routes = useMemo(() => {
    return [
      {
        name: "Home",
        active: !pathname.includes("/search"),
        href: "/",
        icon: GoHomeFill,
      },
      {
        name: "Search",
        active: pathname.includes("/search"),
        href: "/search",
        icon: GoSearch,
      },
    ];
  }, [pathname]);

  useEffect(() => {
    const element = scrollYRef.current;

    const handleScroll = () => {
      if (element) {
        setScrollY(element.scrollTop);
      }
    };
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <nav className="h-full flex flex-col gap-y-2">
      <Box className="flex flex-col gap-y-4">
        {routes.map((route) => (
          <NavItem key={route.name} {...route} />
        ))}
      </Box>

      <Box className="h-full p-0 overflow-hidden">
        <div
          className={cn(
            "bg-neutral-950 p-4",
            scrollY > 10 && "shadow-md shadow-black"
          )}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/your-library"
              className="flex items-center gap-x-2 font-bold hover:text-neutral-200 transition duration-300"
            >
              <TbPlaylist className="text-2xl" />
              <span>Your Library</span>
            </Link>
            <button className="hover:bg-neutral-900 hover:text-neutral-200 p-1 rounded-full transition duration-300">
              <GoPlus className="text-2xl" />
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-neutral-200">
            <Badge title="Playlists" />
            <Badge title="Artists" />
            <Badge title="Albums" />
          </div>
        </div>

        <div
          ref={scrollYRef}
          className="p-4 pt-0 h-[calc(100%-6rem)] overflow-y-scroll"
        >
          <div className="flex items-center justify-between">
            {showSearch ? (
              <div className="relative">
                <input
                  type="text"
                  autoFocus
                  className="bg-neutral-800 py-1 px-2 outline-none pl-8 text-sm mt-1 rounded-sm"
                  onBlur={() => setShowSearch(false)}
                  placeholder="Search in Your Library"
                />
                <GoSearch className="text-lg absolute top-2 left-2" />
              </div>
            ) : (
              <button
                className="hover:bg-neutral-900 hover:text-neutral-200 p-2 rounded-full transition duration-300"
                onClick={() => setShowSearch(true)}
              >
                <GoSearch className="text-lg" />
              </button>
            )}
            <button className="text-sm flex items-center gap-x-1 hover:text-neutral-200 hover:scale-105 transition">
              <span>Recents</span>
              <IoIosList className="text-xl" />
            </button>
          </div>
          <div className="mt-2 flex flex-col gap-y-2">
            {playlists.map((playlist) => (
              <SidebarPlaylist key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </div>
      </Box>
    </nav>
  );
};
