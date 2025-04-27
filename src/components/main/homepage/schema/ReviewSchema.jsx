export default function ReviewSchema() {
  const reviews = [
    {
      author: "Sav W",
      datePublished: "2023-06-15",
      reviewBody: "Never expected to call for help and get serviced the same day. Brandon and CJ were amazing and got my commercial doors fixed right away. I loved the confidence that they both had when figuring out what was needed to fix my doors and the cost was extremely reasonable. Tolbert garage doors are my new go to for my garage door repairs! Thank you!",
      reviewRating: 5,
    },
    {
      author: "Evan Johnson",
      datePublished: "2023-05-22",
      reviewBody: "Great folks. They came out next day and fixed my garage door within hours. Also came in WAY under other estimates we were getting. Thanks so much for taking care of us!",
      reviewRating: 5,
    },
    {
      author: "Jerry Wascom",
      datePublished: "2023-04-10",
      reviewBody: "Kevin was great. He was here on time, told me the price and went right to work. He did a great job replacing both springs and tuning up the entire system. The door works better than it ever has.",
      reviewRating: 5,
    },
    {
      author: "Brittany Craft",
      datePublished: "2023-03-15",
      reviewBody: "Great customer service, great company and great technicians! They did an amazing job on our garage door replacement and we couldn't be happier! The installation was quick and they cleaned up everything afterward.",
      reviewRating: 5,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tolbert Garage Door Repair",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "180",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      datePublished: review.datePublished,
      reviewBody: review.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.reviewRating,
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
