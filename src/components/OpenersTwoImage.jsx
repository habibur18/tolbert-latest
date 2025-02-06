import Image from "next/image";
import Link from "next/link";

export function OpenersTwoImage() {
  const isFiliped = Math.random() < 0.5;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 pb-12">
      <div>
        <div className="relative">
          <Image src="/personwithpc.jpg" alt="Person using computer" width={600} height={400} className="w-full" />
          <div className="absolute top-0 left-0  bg-green-600 rounded-md bg-opacity-80 text-white text-center p-4">Choose the right garage door opener</div>
        </div>
        <Link href="https://www.liftmaster.com/garage-door-opener-selector" target="_blank" className="block mt-4  transition-colors w-full bg-green-600 hover:bg-green-800 text-white font-semibold text-center py-2 rounded-md">
          What To Do Before You Call Tolbert Garage Door
        </Link>
      </div>
      <div>
        <div className="relative">
          <Image src="/personwithopeners.png" alt="Installed garage door opener" width={600} height={400} className="w-full" />
          <div className="absolute top-0 right-0  bg-green-600 rounded-md bg-opacity-80 text-white text-center p-4">Give us a call 📞</div>
        </div>
        <Link href="tel:4699090956" target="_blank" className="block mt-4  transition-colors w-full bg-green-600 hover:bg-green-800 text-white font-semibold text-center py-2 rounded-md">
          (469) 909-0956
        </Link>
      </div>
    </div>
  );
}
