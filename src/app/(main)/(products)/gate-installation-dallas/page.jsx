import GarageGatePage from "@/components/main/gate/garage-door-page";

export const metadata = {
  title: "Dallas's Custom Gate & Garage Door Specialist || Tolbert Garage Door || Dallas, TX",
  description: "Custom gates and garage door solutions for Dallas homeowners. Professional installation, repair, and maintenance services with a focus on quality and security.",
  keywords: ["garage door repair Dallas", "custom gate installation", "automatic gate systems", "garage door opener installation", "emergency garage door service", "residential gates Dallas", "commercial garage doors", "gate repair near me", "garage door spring replacement", "security gates Dallas", "same day garage door service", "Tolbert Garage Door", "Dallas gate contractor", "Fort Worth garage door company"].join(", "),
  icons: "/Tolbert Garage Door Logo.png",
  openGraph: {
    title: "Tolbert Garage Door - Dallas's Elite Gate & Garage Door Specialist",
    description: "Custom gates and garage door solutions for Dallas homeowners. Professional installation, repair, and maintenance services with a focus on quality and security.",
    images: [
      {
        url: "https://example.com/images/tolbert-garage-door-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tolbert Garage Door Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolbert Garage Door - Dallas's Elite Gate & Garage Door Specialist",
    description: "Custom gates and garage door solutions for Dallas homeowners. Professional installation, repair, and maintenance services with a focus on quality and security.",
    images: ["https://example.com/images/tolbert-garage-door-twitter.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GarageDoorPage() {
  return <GarageGatePage />;
}
