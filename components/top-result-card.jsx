import Image from "next/image";

import { PlayButton } from "./play-button";

export const TopResultCard = ({ title, image, subtitle, type }) => {
  return (
    <div className="bg-neutral-900 p-4 rounded-md hover:bg-neutral-800/80 cursor-pointer relative group transition duration-300">
      <Image
        src={image}
        alt={`${title} image`}
        width={90}
        height={90}
        className="w-24 rounded-md"
      />
      <div className="mt-2">
        <p className="text-neutral-100 text-3xl font-bold mt-4 line-clamp-1">
          {title}
        </p>
        <p className="text-sm text-neutral-200 line-clamp-1">
          <span className="text-neutral-400 mt-2 capitalize">{type} </span>
          {subtitle && " • "} {subtitle}
        </p>
      </div>
      <PlayButton
        size="md"
        className="opacity-0 absolute bottom-4 right-4 group-hover:opacity-100 transition duration-300 ease-in-out"
      />
    </div>
  );
};
