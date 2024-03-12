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

      // Get the original color data
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;

      // Darken the color using two methods:

      // Method 1: Simple darkening (adjust factor for desired darkness)
      const darkenFactor = 0.5; // Experiment with values between 0 and 1
      const newR = Math.floor(r * darkenFactor);
      const newG = Math.floor(g * darkenFactor);
      const newB = Math.floor(b * darkenFactor);

      // Method 2: Shift towards black (consider combining with method 1)
      const blackenFactor = 0.2; // Experiment with values between 0 and 1
      const newR2 = Math.max(0, r - Math.floor(r * blackenFactor));
      const newG2 = Math.max(0, g - Math.floor(g * blackenFactor));
      const newB2 = Math.max(0, b - Math.floor(b * blackenFactor));

      // Choose between the two methods or combine them for better control:
      const finalRed = newR; // Choose newR or newR2
      const finalGreen = newG; // Choose newG or newG2
      const finalBlue = newB; // Choose newB or newB2

      const hex = `#${(
        (finalRed << 16) |
        (finalGreen << 8) |
        finalBlue
      ).toString(16)}`;
      setColor(hex);
    };
  }, [src]);

  return color;
};
