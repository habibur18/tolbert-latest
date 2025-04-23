import Image from "next/image";

export function OurStory() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#32750a]/10 rounded-full z-0 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#32750a]/20 rounded-full z-0 animate-pulse" style={{ animationDelay: "1s" }}></div>

            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform -rotate-3 hover:rotate-0 transition-transform">
                  <Image src="/gate/story/all-members.avif" alt="Tolbert Garage Door founding" width={250} height={300} className="w-full h-full object-cover" />
                </div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
                  <Image src="/Tolbert and his team.jpg" alt="Tolbert Garage Door team" width={250} height={300} className="w-full h-full object-cover" />
                </div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
                  <Image src="/gate/with-community.jpg" alt="Tolbert Garage Door Community event" width={250} height={300} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
                  <Image src="/gate/tolbert installing garage door.jpg" alt="Tolbert Garage Door installation" width={250} height={300} className="w-full h-full object-cover" />
                </div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform -rotate-3 hover:rotate-0 transition-transform">
                  <Image src="/gate/Tolbert Garage Door community.jpg" alt="Tolbert Garage Door community" width={250} height={300} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-block bg-[#32750a]/10 px-4 py-2 rounded-full text-[#32750a] font-medium">Our Story</div>
            <h2 className="text-4xl md:text-5xl font-bold">The Tolbert Gate & Garage Door Journey</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Founded in 2008 by the Tolbert family, our company began with a simple mission: to provide Dallas homeowners with exceptional gate and garage door solutions that combine beauty, function, and security.</p>
            <p className="text-xl text-gray-600 leading-relaxed">What started as a small family business has grown into Dallas's favorite gate and garage door specialist, with over 15 years of craftsmanship excellence and thousands of happy customers across the Dallas-Fort Worth area.</p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#32750a]">15+</div>
                <p className="text-lg text-gray-600 mt-2">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#32750a]">5,000+</div>
                <p className="text-lg text-gray-600 mt-2">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#32750a]">20+</div>
                <p className="text-lg text-gray-600 mt-2">Expert Technicians</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#32750a]">100%</div>
                <p className="text-lg text-gray-600 mt-2">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
