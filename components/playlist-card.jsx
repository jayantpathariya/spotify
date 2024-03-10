import Link from "next/link";
import Image from "next/image";

import { PlayButton } from "./play-button";

export const PlaylistCard = ({ title, images, type, link }) => {
  return (
    <Link
      href={`/${type}/${link}`}
      className="lg:p-4 inline-block lg:bg-neutral-900 rounded-md lg:hover:bg-neutral-800 transition duration-300 ease-in-out group"
    >
      <div className="relative">
        <Image
          src={images[2].link}
          width={180}
          height={180}
          alt={`${title} playlist cover`}
          className="w-full rounded-md mb-3"
        />
        <PlayButton
          className="absolute bottom-2 right-2 translate-y-2 opacity-0  group-hover:opacity-100 transition duration-300 group-hover:translate-y-0"
          size="md"
        />
      </div>
      <div className="mt-3">
        <p className="text-neutral-200 font-bold line-clamp-1 mb-1">{title}</p>
        <div className="hidden lg:inline-block">
          <p className="text-sm line-clamp-2">
            Pritam, Rishi Kumar, Vishal-Shekhar and more
          </p>
        </div>
      </div>
    </Link>
  );
};
