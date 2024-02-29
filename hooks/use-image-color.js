import { useEffect, useState } from "react";

export const useImageColor = (src) => {
  const [color, setColor] = useState("transparent");

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, 1, 1);
      //  return hex code of color
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
      const hex = `#${((r << 16) | (g << 8) | b).toString(16)}`;
      setColor(hex);
    };
  }, [src]);

  return color;
};
