export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tolbert Garage Door Repair",
    image: "https://tolbertgaragedoor.com/logo.png",
    url: "https://tolbertgaragedoor.com",
    telephone: "(469)-909-0956",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Auto Street",
      addressLocality: "Dallas",
      addressRegion: "TX",
      postalCode: "75001",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.9311534,
      longitude: -96.8947153,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    sameAs: ["https://www.facebook.com/tolbertgaragedoor", "https://twitter.com/TolbertGarage", "https://www.instagram.com/tolbertgaragedoor"],
    areaServed: [
      {
        "@type": "City",
        name: "Dallas",
      },
      {
        "@type": "City",
        name: "Fort Worth",
      },
      {
        "@type": "City",
        name: "Plano",
      },
      {
        "@type": "City",
        name: "Frisco",
      },
      {
        "@type": "City",
        name: "Mesquite",
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
