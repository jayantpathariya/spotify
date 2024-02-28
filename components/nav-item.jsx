import { cn } from "@/lib/utils";
import Link from "next/link";

export const NavItem = ({ name, active, href, icon: Icon }) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-x-4 font-bold hover:text-neutral-100 transition duration-300",
        active && "text-neutral-100"
      )}
    >
      <Icon className="text-2xl" />
      <p>{name}</p>
    </Link>
  );
};
