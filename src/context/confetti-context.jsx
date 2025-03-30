"use client";

import { ConfettiCelebration } from "@/components/main/confetti-celebration";
import { createContext, useContext, useState } from "react";

const ConfettiContext = createContext(undefined);

export function ConfettiProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  const showConfetti = () => {
    setIsVisible(true);
    // Auto-hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 10000);
  };

  const hideConfetti = () => {
    setIsVisible(false);
  };

  return (
    <ConfettiContext.Provider value={{ showConfetti, hideConfetti }}>
      <ConfettiCelebration show={isVisible} pieces={10000} />
      {children}
    </ConfettiContext.Provider>
  );
}

export function useConfetti() {
  const context = useContext(ConfettiContext);
  if (context === undefined) {
    throw new Error("useConfetti must be used within a ConfettiProvider");
  }
  return context;
}
