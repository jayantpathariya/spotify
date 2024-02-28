"use client";

import { useMemo } from "react";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { usePathname } from "next/navigation";

import { Box } from "./box";
import { NavItem } from "./nav-item";

export const Sidebar = () => {
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

  return (
    <nav className="h-full flex flex-col gap-y-2">
      <Box className="flex flex-col gap-y-4">
        {routes.map((route) => (
          <NavItem key={route.name} {...route} />
        ))}
      </Box>
      <Box className="h-full">Playlist</Box>
    </nav>
  );
};
