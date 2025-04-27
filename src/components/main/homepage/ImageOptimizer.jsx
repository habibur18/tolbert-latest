"use client";

import { useEffect, useState } from "react";

export default function ImageOptimizer() {
  const [supportsWebP, setSupportsWebP] = useState(false);

  useEffect(() => {
    // Check if browser supports WebP
    const checkWebPSupport = async () => {
      try {
        const webPCheck = document.createElement("canvas");
        if (webPCheck.getContext && webPCheck.getContext("2d")) {
          const result = webPCheck.toDataURL("image/webp").indexOf("data:image/webp") === 0;
          setSupportsWebP(result);
        } else {
          setSupportsWebP(false);
        }
      } catch (e) {
        setSupportsWebP(false);
      }
    };

    checkWebPSupport();

    // Apply WebP format to background images if supported
    if (supportsWebP) {
      document.querySelectorAll <
        HTMLElement >
        "[data-bg-webp]".forEach((element) => {
          const webpUrl = element.getAttribute("data-bg-webp");
          if (webpUrl) {
            element.style.backgroundImage = `url(${webpUrl})`;
          }
        });
    }

    // Implement responsive image loading based on viewport
    const handleResponsiveImages = () => {
      const viewportWidth = window.innerWidth;
      document.querySelectorAll <
        HTMLImageElement >
        "[data-src-mobile], [data-src-tablet], [data-src-desktop]".forEach((img) => {
          const mobileSrc = img.getAttribute("data-src-mobile");
          const tabletSrc = img.getAttribute("data-src-tablet");
          const desktopSrc = img.getAttribute("data-src-desktop");

          if (viewportWidth < 640 && mobileSrc) {
            img.src = mobileSrc;
          } else if (viewportWidth < 1024 && tabletSrc) {
            img.src = tabletSrc;
          } else if (desktopSrc) {
            img.src = desktopSrc;
          }
        });
    };

    handleResponsiveImages();
    window.addEventListener("resize", handleResponsiveImages);

    return () => {
      window.removeEventListener("resize", handleResponsiveImages);
    };
  }, [supportsWebP]);

  return null;
}
