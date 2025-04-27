"use client";

import { useEffect } from "react";

export default function FontOptimizer() {
  useEffect(() => {
    // Add font-display: swap to all font faces
    const addFontDisplaySwap = () => {
      const styleSheets = document.styleSheets;
      for (let i = 0; i < styleSheets.length; i++) {
        try {
          const styleSheet = styleSheets[i];
          const rules = styleSheet.cssRules || styleSheet.rules;

          if (!rules) continue;

          for (let j = 0; j < rules.length; j++) {
            const rule = rules[j];
            if (rule instanceof CSSFontFaceRule) {
              if (!rule.style.fontDisplay) {
                rule.style.fontDisplay = "swap";
              }
            }
          }
        } catch (e) {
          // Skip cross-origin stylesheets
          continue;
        }
      }
    };

    // Preload critical fonts
    const preloadCriticalFonts = () => {
      const criticalFonts = [
        { href: "/fonts/main-font.woff2", type: "font/woff2" },
        { href: "/fonts/heading-font.woff2", type: "font/woff2" },
      ];

      criticalFonts.forEach((font) => {
        // Check if preload link already exists
        const existingLink = document.querySelector(`link[rel="preload"][href="${font.href}"]`);
        if (!existingLink) {
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "font";
          link.type = font.type;
          link.href = font.href;
          link.crossOrigin = "anonymous";
          document.head.appendChild(link);
        }
      });
    };

    // Execute optimizations
    addFontDisplaySwap();
    preloadCriticalFonts();

    // Clean up on component unmount
    return () => {
      // No cleanup needed
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}
