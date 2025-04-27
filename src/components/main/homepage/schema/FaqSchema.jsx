export default function FaqSchema() {
  const faqs = [
    {
      question: "How much does it cost to repair a garage door?",
      answer: "Garage door repair costs typically range from $89 to $299 depending on the issue. Simple repairs like sensor alignment or track adjustments start at $89, while spring replacements average $189-$249 for a pair. Opener repairs typically cost $129-$199. We provide free estimates and transparent pricing before any work begins.",
    },
    {
      question: "How long does a garage door repair take?",
      answer: "Most garage door repairs can be completed in 1-2 hours. Simple issues like sensor alignment or track adjustments may take 30-60 minutes, while spring replacements or opener installations typically take 1-2 hours. Our technicians arrive with fully-stocked trucks to complete most repairs in a single visit.",
    },
    {
      question: "What are the signs that my garage door springs need replacement?",
      answer: "Signs that your garage door springs need replacement include: 1) The door feels heavy or difficult to lift manually, 2) You hear a loud bang or snapping noise when operating the door, 3) The door appears crooked or uneven when opening/closing, 4) Visible gaps or stretching in the springs, or 5) The door won't stay open when raised halfway. Springs typically last 7-10 years depending on usage.",
    },
    {
      question: "Can you repair my garage door same-day?",
      answer: "Yes, we offer same-day garage door repair service throughout the DFW area. For emergency repairs, we can often arrive within 1-2 hours. Our technicians carry common replacement parts in their trucks, allowing us to complete most repairs in a single visit. Call us before noon for the best chance of same-day service.",
    },
    {
      question: "How much does a new garage door cost?",
      answer: "New garage door prices range from $699 to $3,500+ depending on material, style, size, and features. Basic steel doors start around $699-$999, mid-range insulated doors cost $1,000-$1,800, and premium carriage house or custom wood doors range from $1,800-$3,500+. Installation is typically included in our pricing. We offer free in-home consultations to provide an exact quote for your specific needs.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
