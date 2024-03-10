import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// create image links for different resolutions
export const createImageLinks = (link) => {
  if (!link) return false;

  const qualities = ["50x50", "150x150", "500x500"];

  return (
    qualities.map((quality) => ({
      quality,
      link: link.includes("150x150")
        ? link.replace("150x150", quality)
        : link.replace("50x50", quality),
    })) || false
  );
};
