"use client";

import { useEffect } from "react";

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Defer non-critical resources
    const deferNonCriticalResources = () => {
      // Find all non-critical scripts and add defer attribute
      document.querySelectorAll("script:not([defer]):not([async])").forEach((script) => {
        if (!script.hasAttribute("src")) return;
        if (script.getAttribute("src")?.includes("analytics") || script.getAttribute("src")?.includes("tracking")) {
          script.setAttribute("defer", "");
        }
      });
    };

    // Preload critical assets
    const preloadCriticalAssets = () => {
      const criticalImages = ["/hero-garage.jpg", "/door1.jpg", "/expertise.jpg"];

      criticalImages.forEach((imagePath) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = imagePath;
        document.head.appendChild(link);
      });
    };

    // Implement intersection observer for lazy loading
    const setupLazyLoading = () => {
      const lazyElements = document.querySelectorAll(".lazy-load");

      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const element = entry.target;

                if (element.tagName === "IMG") {
                  const img = element;
                  if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove("lazy-load");
                    observer.unobserve(element);
                  }
                } else {
                  element.classList.add("in-viewport");
                  observer.unobserve(element);
                }
              }
            });
          },
          {
            rootMargin: "200px",
          }
        );

        lazyElements.forEach((element) => {
          observer.observe(element);
        });
      }
    };

    // Execute optimizations
    deferNonCriticalResources();
    preloadCriticalAssets();
    setupLazyLoading();

    // Clean up on component unmount
    return () => {
      // Clean up any event listeners if needed
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}
