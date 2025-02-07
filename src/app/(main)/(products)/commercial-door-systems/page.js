import CommercialDoorSystemsContactForm from "@/components/CommercialDoorSystemsContactForm";
import CommercialDoorSystemsProductCard from "@/components/CommercialDoorSystemsProductCard";
import { Card } from "@/components/ui/card";
import { Building2, CheckCircle2, Phone } from "lucide-react";

export default function CommercialDoorSystemsPage() {
  const products = [
    {
      id: "4400",
      title: "Premium Commercial/Industrial Steel Panel",
      series: "4400/4401",
      image: "/comercial-door-4400.png",
      specs: {
        gauge: "24 GAUGE STEEL",
        paint: "1.0 MIL PAINT WITH 3 COLOR OPTIONS",
        rValue: "R-VALUE 6.85",
        interior: "VINYL INTERIOR SKIN",
      },
    },
    {
      id: "4500",
      title: "Premium Commercial/Industrial Steel Panel",
      series: "4500/4501",
      image: "/comercial-door-4500.png",
      specs: {
        gauge: "25 GAUGE STEEL",
        paint: "1.0 MIL PAINT WITH 2 COLOR OPTIONS",
        rValue: "R-VALUE 6.85",
        interior: "VINYL INTERIOR SKIN",
      },
    },
    {
      id: "6500",
      title: "Premium Commercial/Industrial Steel Panel",
      series: "6500",
      image: "/comercial-door-6500.png",
      specs: {
        gauge: '25" THICK INSULATED 3 LAYER SANDWICH PANEL',
        paint: "1.0 MIL PAINT WITH 4 COLOR OPTIONS",
        rValue: "R-VALUE 10.25",
        interior: "STEEL INTERIOR SKIN",
      },
    },
    {
      id: "8000",
      title: "Premium Aluminum Full View",
      series: "8000",
      image: "/comercial-door-8000.png",
      specs: {
        gauge: '1/8" GLASS',
        paint: '1/4" GLASS',
        rValue: '1/2" INSULATED GLASS',
        interior: "",
      },
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
          <Building2 className="h-8 w-8 text-green-600" />
          BEST <span className="text-green-600">COMMERCIAL DOOR</span> SYSTEMS IN THE INDUSTRY
        </h1>

        <div className="grid gap-6 max-w-4xl mx-auto">
          <Card className="p-6 bg-green-50 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Complete line of Commercial Door Systems for industrial and commercial buildings, offering advanced solutions for upward acting exterior and interior doors.</p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Full range of sectional doors designed for superior performance and longevity.</p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Ideal for projects requiring excellent thermal values and stringent wind load requirements.</p>
              </div>
            </div>
          </Card>

          <a href="tel:+1-800-555-5555" size="lg" className="bg-green-600 !p-5 flex text-white herobtn hover:bg-green-700 mx-auto">
            <div className="flex">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now (469) 909-0956
            </div>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {products.map((product) => (
          <CommercialDoorSystemsProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <Card className="p-8 bg-green-50">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Confused Which One to Choose?</h2>
            <p className="text-gray-600">Let our experts help you find the perfect commercial door solution for your needs.</p>
          </div>

          <CommercialDoorSystemsContactForm />
        </Card>
      </div>
    </main>
  );
}
