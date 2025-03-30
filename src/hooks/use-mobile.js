"use client";

import { useEffect, useState } from "react";
import { useWindowSize } from "./use-window-size";

export function useMobile() {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width < 768); // Adjust the breakpoint as needed
  }, [width]);

  return isMobile;
}
