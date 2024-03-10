import Image from "next/image";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { RiPlayFill } from "react-icons/ri";

import { secondsToMinutes } from "@/lib/utils";

const TableItem = ({
  index,
  startIndex,
  image,
  title,
  artists,
  album,
  duration,
}) => {
  return (
    <div className="flex justify-between md:grid grid-cols-table items-center hover:bg-neutral-200/10 p-2 md:rounded-md group cursor-pointer">
      <div className="hidden md:block">
        <span className="justify-self-center group-hover:hidden">
          {index + startIndex}
        </span>
        <RiPlayFill className="text-xl justify-self-center hidden group-hover:block" />
      </div>
      <div className="flex items-center gap-x-2">
        <Image
          src={image}
          width={50}
          height={50}
          alt="playlist poster"
          className="w-11 h-11 rounded-md"
        />
        <div>
          <p
            className="text-neutral-200 line-clamp-1"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <p className="text-sm line-clamp-1">{artists}</p>
        </div>
      </div>
      <div className="hidden md:block">
        <p className="text-sm line-clamp-1">{album}</p>
      </div>
      <div className="justify-self-center hidden md:block">
        <span>{secondsToMinutes(duration)}</span>
      </div>
      <button className="md:hidden">
        <PiDotsThreeVerticalBold className="text-2xl" />
      </button>
    </div>
  );
};

export default TableItem;
