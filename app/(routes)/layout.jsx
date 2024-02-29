"use client";

import { useState, useEffect, useRef } from "react";

import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { useImageColor } from "@/hooks/use-image-color";
import { cn } from "@/lib/utils";

const SiteLayout = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  const scrollYRef = useRef(null);

  useEffect(() => {
    const element = scrollYRef.current;

    const handleScroll = () => {
      if (element) {
        setScrollY(element.scrollTop);
      }
    };
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const color = useImageColor("/playlist.jpg");
  const bgColor = color ? `from-[${color}]` : "from-orange-800/30";

  return (
    <Box className="h-full p-0 overflow-y-scroll" ref={scrollYRef}>
      <div
        className={cn(
          "h-full bg-gradient-to-b from-orange-800/30 to-[20rem] relative",
          color && bgColor
        )}
      >
        <Header scrolled={scrollY > 80} color={color} />
        <div className="p-4">{children}</div>
      </div>
    </Box>
  );
};

export default SiteLayout;
