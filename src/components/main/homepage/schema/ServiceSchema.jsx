export default function ServiceSchema() {
  const services = [
    {
      "@type": "Service",
      name: "Garage Door Repair",
      description: "Professional garage door repair services including spring replacement, cable repair, and opener troubleshooting.",
      provider: {
        "@type": "LocalBusiness",
        name: "Tolbert Garage Door Repair",
      },
      areaServed: "Dallas-Fort Worth Metroplex",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Garage Door Repair Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Spring Replacement",
              description: "Professional replacement of broken garage door springs",
              price: "189.00",
              priceCurrency: "USD",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Opener Repair",
              description: "Diagnosis and repair of garage door opener issues",
              price: "129.00",
              priceCurrency: "USD",
            },
          },
        ],
      },
    },
    {
      "@type": "Service",
      name: "Garage Door Installation",
      description: "Professional installation of new garage doors with a variety of styles and materials to choose from.",
      provider: {
        "@type": "LocalBusiness",
        name: "Tolbert Garage Door Repair",
      },
      areaServed: "Dallas-Fort Worth Metroplex",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Garage Door Installation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Steel Door Installation",
              description: "Installation of durable steel garage doors",
              price: "699.00",
              priceCurrency: "USD",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Carriage House Door Installation",
              description: "Installation of elegant carriage house style garage doors",
              price: "1099.00",
              priceCurrency: "USD",
            },
          },
        ],
      },
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: service,
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
