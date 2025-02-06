import Image from "next/image";

export default function StorageBinRacksHeroSection() {
  return (
    <section className="relative  flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image width={1920} height={1080} src="/STORAGE BIN RACKS.jpg" alt="Storage Bin Racks" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="text-center relative z-10 text-white px-4 py-36">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">STORAGE BIN RACKS</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Maximize your storage space with our innovative overhead system</p>
        <button className="bg-green-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-600 transition-colors">Started From - Only $299</button>
      </div>
    </section>
  );
}
