"use client";

import { cn } from "@/lib/utils";
import * as Slider from "@radix-ui/react-slider";

export const MobileSeekBar = ({
  defaultValue = 0,
  value,
  max = 100,
  step = 1,
  className,
}) => {
  return (
    <form className="absolute -bottom-[13%] w-full pr-4">
      <Slider.Root
        className={cn(
          "relative flex items-center select-none touch-none h-5",
          className
        )}
        defaultValue={[defaultValue]}
        value={[value]}
        max={max}
        step={step}
        disabled
      >
        <Slider.Track className="bg-neutral-800 relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-white rounded-full h-full" />
        </Slider.Track>
      </Slider.Root>
    </form>
  );
};
