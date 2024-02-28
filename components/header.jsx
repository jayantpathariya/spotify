import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const Header = () => {
  return (
    <header className="hidden sticky left-0 top-0 z-50 p-4 lg:flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <button className="bg-neutral-900 w-8 h-8 p-2 rounded-full flex items-center justify-center">
          <BsChevronLeft className="text-lg" />
        </button>
        <button className="bg-neutral-900 w-8 h-8 p-2 rounded-full flex items-center justify-center">
          <BsChevronRight className="text-lg" />
        </button>
      </div>
      <div className="p-1 bg-neutral-900 rounded-full">
        <Image
          src="/profile-image.jpg"
          width={26}
          height={26}
          alt="profile image"
          className="rounded-full h-7 w-7"
        />
      </div>
    </header>
  );
};
