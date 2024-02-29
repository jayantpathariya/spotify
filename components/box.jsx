import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export const Box = forwardRef(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-neutral-950 p-4 lg:rounded-md overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
});

Box.displayName = "Box";
