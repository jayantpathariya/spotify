"use client";

import useEmblaCarousel from "embla-carousel-react";

import { PlaylistCard } from "./playlist-card";

export const Playlist = ({ title }) => {
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
  });

  return (
    <div className="mb-6 last:mb-0">
      <h2 className="mb-2 text-2xl font-bold text-neutral-200">{title}</h2>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex gap-x-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="embla__slide shrink-0 basis-[53%] md:basis-[33.2%] lg:basis-[24.3%] xl:basis-[19.3%] 2xl:basis-[13.5%]"
              >
                <PlaylistCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
