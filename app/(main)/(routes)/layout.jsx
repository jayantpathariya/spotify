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

  return (
    <Box className="h-full p-0 overflow-y-scroll" ref={scrollYRef}>
      <div
        className={cn(
          "h-full md:bg-gradient-to-b to-[30rem] relative",
          color && "from-[#514d70]"
        )}
      >
        <Header scrolled={scrollY > 80} color={color} />
        <div className="pb-16 lg:pb-0">{children}</div>
      </div>
    </Box>
  );
};

export default SiteLayout;
