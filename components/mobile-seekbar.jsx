"use client";

import { cn } from "@/lib/utils";
import * as Slider from "@radix-ui/react-slider";

export const MobileSeekBar = ({
  defaultValue = 0,
  max = 100,
  step = 1,
  onChange,
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
        max={max}
        step={step}
        onChange={onChange}
        disabled
      >
        <Slider.Track className="bg-neutral-800 relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-white rounded-full h-full" />
        </Slider.Track>
      </Slider.Root>
    </form>
  );
};
