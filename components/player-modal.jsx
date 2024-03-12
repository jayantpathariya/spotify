"use client";

import Sheet from "react-modal-sheet";
import Image from "next/image";
import { useSelector } from "react-redux";
import { IoChevronDownOutline } from "react-icons/io5";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { LuShuffle, LuRepeat } from "react-icons/lu";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { RiPlayFill } from "react-icons/ri";
import { MdOutlinePause } from "react-icons/md";

import { ModalSeekBar } from "./modal-seekbar";
import { usePlayer } from "@/hooks/use-player";
import { cn } from "@/lib/utils";
import { useImageColor } from "@/hooks/use-image-color";

export const PlayerModal = ({ isOpen, setIsOpen }) => {
  const { currentSong, songs, index } = useSelector((state) => state.song);
  console.log(songs, index);

  const color = useImageColor(currentSong?.image);

  const {
    isPlaying,
    seek,
    duration,
    handleTogglePlay,
    handleSeek,
    handleNextSong,
    handlePrevSong,
    handleShuffleSongs,
  } = usePlayer();

  return (
    <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Sheet.Container>
        <Sheet.Content
          style={{
            backgroundColor: color,
          }}
        >
          <Sheet.Header className="py-5 px-4 flex items-center justify-between">
            <button onClick={() => setIsOpen(false)}>
              <IoChevronDownOutline className="text-2xl text-neutral-200" />
            </button>
            <button>
              <PiDotsThreeOutlineFill className="text-xl text-neutral-200" />
            </button>
          </Sheet.Header>
          <Sheet.Scroller className="p-4 mx-auto w-full">
            <div className="w-full mt-12">
              <Image
                src={currentSong?.image?.replace("150x150", "500x500")}
                alt={`${currentSong?.title} poster`}
                width={300}
                height={300}
                className="w-full h-full shadow-lg "
              />
            </div>
            <div>
              <div className="flex items-center justify-between mt-10">
                <div>
                  <h1
                    className="text-2xl font-extrabold text-neutral-200 mt-4 line-clamp-1"
                    dangerouslySetInnerHTML={{
                      __html: currentSong?.title,
                    }}
                  />
                  <p
                    className="text-sm text-neutral-300 mt-1 line-clamp-1"
                    dangerouslySetInnerHTML={{
                      __html: currentSong?.subtitle,
                    }}
                  />
                </div>
                <button>
                  <FiHeart className="text-2xl text-neutral-300" />
                </button>
              </div>
              <div className="mt-8">
                <div>
                  <ModalSeekBar
                    value={seek}
                    max={duration}
                    onChange={handleSeek}
                  />
                  <div className="flex items-center justify-between text-neutral-300">
                    <span className="text-xs">
                      {new Date(seek * 1000).toISOString().substr(14, 5) ||
                        "--:--"}
                    </span>
                    <span className="text-xs">
                      {new Date(duration ? duration * 1000 : 0)
                        .toISOString()
                        .substr(14, 5) || "--:--"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <button
                    className="text-neutral-200"
                    onClick={handleShuffleSongs}
                  >
                    <LuShuffle className="text-2xl" />
                  </button>
                  <button
                    onClick={handlePrevSong}
                    className={cn(
                      "text-neutral-200",
                      index === 0 && "pointer-events-none text-neutral-400"
                    )}
                  >
                    <GiPreviousButton className="text-4xl " />
                  </button>
                  <button
                    className="w-14 h-14 bg-neutral-200 flex items-center justify-center rounded-full hover:scale-105 transition duration-200"
                    onClick={handleTogglePlay}
                  >
                    {isPlaying ? (
                      <MdOutlinePause className="text-3xl text-neutral-950" />
                    ) : (
                      <RiPlayFill className="text-3xl text-neutral-950" />
                    )}
                  </button>
                  <button
                    onClick={handleNextSong}
                    className={cn(
                      "text-neutral-200",
                      index === songs.length - 1 &&
                        "pointer-events-none text-neutral-400"
                    )}
                  >
                    <GiNextButton className="text-4xl" />
                  </button>
                  <button>
                    <LuRepeat className="text-2xl text-neutral-300" />
                  </button>
                </div>
              </div>
            </div>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};
