export default function TrustIndicators() {
  return (
    <div className="relative z-10 bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 text-center">
          <div className="rounded-lg bg-[#32750a]/5 p-4 transition-all hover:bg-[#32750a]/10">
            <div className="text-2xl font-bold text-[#32750a]">2000+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="rounded-lg bg-[#32750a]/5 p-4 transition-all hover:bg-[#32750a]/10">
            <div className="text-2xl font-bold text-[#32750a]">5/5</div>
            <div className="text-sm text-gray-600">Customer Rating</div>
          </div>
          <div className="rounded-lg bg-[#32750a]/5 p-4 transition-all hover:bg-[#32750a]/10">
            <div className="text-2xl font-bold text-[#32750a]">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="rounded-lg bg-[#32750a]/5 p-4 transition-all hover:bg-[#32750a]/10">
            <div className="text-2xl font-bold text-[#32750a]">100%</div>
            <div className="text-sm text-gray-600">Satisfaction Guarantee</div>
          </div>
        </div>
      </div>
    </div>
  );
}
