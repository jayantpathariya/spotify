"use client";

import { cn } from "@/lib/utils";
import * as Slider from "@radix-ui/react-slider";

export const ModalSeekBar = ({
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
        <Slider.Track className="bg-neutral-200/50 relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-white rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb className="w-3 h-3 bg-white focus:outline-none rounded-full shadow-md hidden group-hover:block" />
      </Slider.Root>
    </form>
  );
};
