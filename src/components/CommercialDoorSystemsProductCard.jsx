// CommercialDoorSystemsProducts

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gauge, Layout, PaintBucket, Thermometer } from "lucide-react";
import Image from "next/image";

export default function CommercialDoorSystemsProductCard({ title, series, image, specs }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="relative p-0">
        <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md">{series}</div>
        <Image width={300} height={300} src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-center" />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-4 text-green-700">{title}</CardTitle>
        {specs && (
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-green-500" />
              <span className="text-sm">{specs.gauge}</span>
            </div>
            <div className="flex items-center gap-2">
              <PaintBucket className="h-5 w-5 text-green-500" />
              <span className="text-sm">{specs.paint}</span>
            </div>
            <div className="flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-green-500" />
              <span className="text-sm">{specs.rValue}</span>
            </div>
            <div className="flex items-center gap-2">
              <Layout className="h-5 w-5 text-green-500" />
              <span className="text-sm">{specs.interior}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
