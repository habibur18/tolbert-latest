import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Phone, Shield } from "lucide-react";

export function EmergencyContact() {
  return (
    <section className="relative overflow-hidden bg-green-500 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#22c55e1a_1px,transparent_1px),linear-gradient(-45deg,#22c55e1a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div>
            <Badge variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
              24/7 Emergency Service
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Need Immediate Assistance?</h2>
            <p className="mt-4 text-lg text-white/90">Our expert technicians are available around the clock to help with your garage door emergency</p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2">
                <Phone className="h-4 w-4" />
                (469) 909-0956
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                Request Service
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2 text-white">
                <Clock className="h-5 w-5" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Shield className="h-5 w-5" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
