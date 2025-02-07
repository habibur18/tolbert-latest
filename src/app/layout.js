import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Tolbert Garage Door",
          "image": "https://www.tolbertgaragedoor.com/logo.png",
          "telephone": "1-877-711-0541",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dallas",
            "addressRegion": "TX",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 32.7767,
            "longitude": -96.7970
          },
          "url": "https://www.tolbertgaragedoor.com",
          "priceRange": "$$",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "sameAs": [
            "https://www.facebook.com/TolbertGarageDoor",
            "https://twitter.com/TolbertGarage",
            "https://www.instagram.com/tolbertgaragedoor"
          ]
        }
      `,
        }}
      /> */}
    </html>
  );
}
