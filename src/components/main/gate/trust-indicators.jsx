import { Award, Clock, Shield, ThumbsUp } from "lucide-react";

export function TrustIndicators() {
  return (
    <section className="bg-white py-10 border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Clock className="h-12 w-12 text-[#32750a] mb-3" />
            <h3 className="font-bold text-lg">Same-Day Service</h3>
            <p className="text-sm text-gray-600">Fast response times</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="h-12 w-12 text-[#32750a] mb-3" />
            <h3 className="font-bold text-lg">Licensed & Insured</h3>
            <p className="text-sm text-gray-600">Professional technicians</p>
          </div>
          <div className="flex flex-col items-center">
            <Award className="h-12 w-12 text-[#32750a] mb-3" />
            <h3 className="font-bold text-lg">5-Star Rated</h3>
            <p className="text-sm text-gray-600">Top-rated in Dallas</p>
          </div>
          <div className="flex flex-col items-center">
            <ThumbsUp className="h-12 w-12 text-[#32750a] mb-3" />
            <h3 className="font-bold text-lg">Satisfaction Guaranteed</h3>
            <p className="text-sm text-gray-600">100% customer satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
