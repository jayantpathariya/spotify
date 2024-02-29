"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { TbPlaylist } from "react-icons/tb";

export const MobileNav = () => {
  const pathname = usePathname();

  const routes = useMemo(() => {
    return [
      {
        name: "Home",
        active:
          !pathname.includes("/search") && !pathname.includes("/your-library"),
        href: "/",
        icon: GoHomeFill,
      },
      {
        name: "Search",
        active: pathname.includes("/search"),
        href: "/search",
        icon: GoSearch,
      },
      {
        name: "Your Library",
        active: pathname.includes("/your-library"),
        href: "/your-library",
        icon: TbPlaylist,
      },
    ];
  }, [pathname]);

  return (
    <div className="flex w-full items-center justify-between lg:hidden p-2">
      {routes.map((route) => (
        <Link
          key={route.name}
          href={route.href}
          className={cn(
            "flex flex-col items-center gap-y-1",
            route.active && "text-neutral-200"
          )}
        >
          <route.icon className="text-3xl" />
          <span className={cn("text-xs", route.active && "font-bold")}>
            {route.name}
          </span>
        </Link>
      ))}
    </div>
  );
};
