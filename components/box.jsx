import { cn } from "@/lib/utils";

export const Box = ({ children, className }) => {
  return (
    <div
      className={cn("bg-neutral-950 p-4 rounded-md overflow-hidden", className)}
    >
      {children}
    </div>
  );
};
