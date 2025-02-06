import Link from "next/link";

export function OpenersHeroSection() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {" "}
      {/* Added w-full and overflow-hidden */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full" /* Added w-full and h-full */
        style={{
          backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5e6aa248258607287e4c3afb/1612816387810-GXNKH9FJRMIRYZL1EYFN/liftmaster-large.jpg')`,
          /* Removed backgroundSize: "100% 100%",  Let bg-cover handle it */
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative h-full w-full flex flex-col items-center justify-center text-white">
        {" "}
        {/* Added w-full */}
        <h1 className="text-5xl font-bold mb-6 text-center">
          {" "}
          {/* Added text-center for better mobile experience */}
          Garage Door Openers
        </h1>
        <Link href="https://www.liftmaster.com/garage-door-opener-selector" target="_blank" className="bg-green-600 px-8 py-3 text-white font-bold rounded-md">
          LAUNCH SELECTOR TOOL
        </Link>
      </div>
    </div>
  );
}
