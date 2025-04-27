"use client";

import { usePathname } from "next/navigation";

export default function SeoOptimizer({ metadata, structuredData }) {
  const pathname = usePathname();

  // This component doesn't render anything visible
  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </>
  );
}
