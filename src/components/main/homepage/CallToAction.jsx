import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Phone } from "lucide-react";

function WelcomeCallToAction() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button size="lg" className="group w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
        <Phone className="mr-2 h-4 w-4" />
        Call (555) 123-4567
        <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 ease-in-out">
          <ArrowRight className="ml-2 h-4 w-4" />
        </span>
      </Button>
      <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5 hover:border-primary/80 transition-all duration-300">
        <Calculator className="mr-2 h-4 w-4" /> Free Estimate
      </Button>
    </div>
  );
}

export default WelcomeCallToAction;
