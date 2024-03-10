"use client";

import { cn } from "@/lib/utils";
import * as Slider from "@radix-ui/react-slider";

export const SeekBar = ({
  defaultValue = 0,
  max = 100,
  step = 1,
  onChange,
  className,
  value,
}) => {
  return (
    <form>
      <Slider.Root
        className={cn(
          "relative flex items-center select-none touch-none h-5 group",
          className
        )}
        defaultValue={[defaultValue]}
        max={max}
        value={[value]}
        step={step}
        onValueChange={onChange}
      >
        <Slider.Track className="bg-neutral-800 relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-white rounded-full h-full hover:bg-green-500 group-hover:bg-green-500" />
        </Slider.Track>
        <Slider.Thumb
          className="w-3 h-3 bg-white focus:outline-none rounded-full shadow-md hidden group-hover:block"
          aria-label="Volume"
        />
      </Slider.Root>
    </form>
  );
};
