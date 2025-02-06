"use client";

import ScreenProductListing from "@/components/ScreenProductListing";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-green-700">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Transform Your Garage Space</h1>
          <p className="text-xl md:text-2xl max-w-2xl">The most versatile retractable garage screen system on the market</p>
        </div>
      </section>

      <ScreenProductListing />

      {/* Features Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Why Choose Our Garage Screens?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">See It In Action</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="aspect-video bg-green-200 rounded-lg overflow-hidden">
                  <iframe className="w-full h-full" src={video.link} title={video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-green-800">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">The Perfect Solution for Your Garage</h2>
            <p className="text-lg mb-8">The Lifestyle garage door screen is a fully retractable garage screen door that works with your existing garage door. Features an industry first, fully retractable passage door for ease of entry and exit without having to retract the entire system.</p>
            <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors">View Catalog</button>
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: <span className="text-white text-2xl">🔄</span>,
    title: "Fully Retractable",
    description: "Easy to open and close with our spring-loaded system",
  },
  {
    icon: <span className="text-white text-2xl">🚪</span>,
    title: "Passage Door",
    description: "Convenient entry and exit without retracting the entire screen",
  },
  {
    icon: <span className="text-white text-2xl">⚡</span>,
    title: "Quick Installation",
    description: "Professional installation with minimal modification needed",
  },
];

const videos = [
  {
    title: "Installation Guide",
    duration: "13:04",
    thumbnail: "/video-1.jpg",
    link: "https://www.youtube.com/embed/EUy4FTzZbiM",
  },
  {
    title: "Track Assembly",
    duration: "8:16",
    thumbnail: "/video-2.jpg",
    link: "https://www.youtube.com/embed/qC3TlHxQW3g",
  },
  {
    title: "Product Overview",
    duration: "4:16",
    thumbnail: "/video-3.jpg",
    link: "https://www.youtube.com/embed/D4GAS1vR_dc",
  },
];
