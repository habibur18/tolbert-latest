"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { formatPhoneNumber, isValidEmail, isValidUSPhoneNumber, simulateServerRequest } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const formSteps = [
  { id: "contact", title: "Contact Information" },
  { id: "property", title: "Property Details" },
  { id: "needs", title: "Your Needs" },
  { id: "review", title: "Review & Submit" },
];

export default function GarageDoorForm() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    zipCode: "",
    doorType: "",
    doorWidth: "",
    urgency: "within-week", // Default to "within a week"
    description: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    zipCode: "",
    doorType: "",
    doorWidth: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formattedPhone, setFormattedPhone] = useState("");

  // Handle phone number formatting
  useEffect(() => {
    if (formData.phone) {
      const digits = formData.phone.replace(/\D/g, "");
      setFormattedPhone(formatPhoneNumber(digits));
    }
  }, [formData.phone]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Only keep digits for phone
      const digits = value.replace(/\D/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: digits,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error when user types
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateStep = (step) => {
    let isValid = true;
    const newErrors = { ...errors };

    if (step === 0) {
      // Validate contact info
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required";
        isValid = false;
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
        isValid = false;
      } else if (!isValidEmail(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        isValid = false;
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
        isValid = false;
      } else if (!isValidUSPhoneNumber(formData.phone)) {
        newErrors.phone = "Please enter a valid 10-digit phone number";
        isValid = false;
      }
    } else if (step === 1) {
      // Validate property info
      if (!formData.zipCode.trim()) {
        newErrors.zipCode = "ZIP code is required";
        isValid = false;
      }

      if (!formData.doorWidth) {
        newErrors.doorWidth = "Please select a door width";
        isValid = false;
      }
    } else if (step === 2) {
      // Validate preferences
      if (!formData.doorType) {
        newErrors.doorType = "Please select a door type";
        isValid = false;
      }
      // Note: urgency has a default value, so no validation needed
    }

    setErrors(newErrors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < formSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation before submission
    if (!validateStep(0) || !validateStep(1) || !validateStep(2)) {
      toast({
        title: "Please check your information",
        description: "Some required fields are missing or invalid.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Use the utility function to simulate a server request
      await simulateServerRequest(formData, 1500);

      toast({
        title: "Quote request submitted!",
        description: "We'll contact you shortly with your free estimate.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        zipCode: "",
        doorType: "",
        doorWidth: "",
        urgency: "within-week",
        description: "",
      });
      setFormattedPhone("");
      setCurrentStep(0);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {formSteps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index <= currentStep ? "bg-primary text-white" : "bg-gray-200 text-gray-500"}`}>{index < currentStep ? <CheckCircle2 className="w-5 h-5" /> : index + 1}</div>
              <span className="text-xs mt-1 hidden md:block">{step.title}</span>
            </div>
          ))}
        </div>
        <motion.div className="w-full bg-gray-200 h-2 rounded-full" initial={{ width: "100%" }}>
          <motion.div className="bg-primary h-2 rounded-full" initial={{ width: "0%" }} animate={{ width: `${(currentStep / (formSteps.length - 1)) * 100}%` }} transition={{ duration: 0.3 }} />
        </motion.div>
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          <motion.div key={currentStep} variants={variants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }}>
            {currentStep === 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-primary">Tell us about yourself</h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" name="fullName" placeholder="John Smith" required value={formData.fullName} onChange={handleChange} className={`mt-1 ${errors.fullName ? "border-red-500" : ""}`} />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange} className={`mt-1 ${errors.email ? "border-red-500" : ""}`} />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" placeholder="(214) 555-1234" required value={formattedPhone} onChange={handleChange} className={`mt-1 ${errors.phone ? "border-red-500" : ""}`} />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-primary">Property Information</h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input id="zipCode" name="zipCode" placeholder="75201" required value={formData.zipCode} onChange={handleChange} className={`mt-1 ${errors.zipCode ? "border-red-500" : ""}`} />
                    {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                  </div>

                  <div>
                    <Label htmlFor="doorWidth">Approximate Door Width (feet)</Label>
                    <select id="doorWidth" name="doorWidth" value={formData.doorWidth} onChange={handleChange} className={`w-full rounded-md border ${errors.doorWidth ? "border-red-500" : "border-input"} bg-background px-3 py-2 mt-1`} required>
                      <option value="" disabled>
                        Select door width
                      </option>
                      <option value="single">Single (8-10ft)</option>
                      <option value="double">Double (16-18ft)</option>
                      <option value="custom">Custom size</option>
                      <option value="not-sure">Not sure</option>
                    </select>
                    {errors.doorWidth && <p className="text-red-500 text-sm mt-1">{errors.doorWidth}</p>}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-primary">Your Preferences</h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="doorType">Preferred Door Type</Label>
                    <select id="doorType" name="doorType" value={formData.doorType} onChange={handleChange} className={`w-full rounded-md border ${errors.doorType ? "border-red-500" : "border-input"} bg-background px-3 py-2 mt-1`} required>
                      <option value="" disabled>
                        Select door type
                      </option>
                      <option value="steel">Steel Door</option>
                      <option value="wood">Wood Door</option>
                      <option value="modern">Modern Design</option>
                      <option value="lifestyle">Lifestyle Garage Door</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                    {errors.doorType && <p className="text-red-500 text-sm mt-1">{errors.doorType}</p>}
                  </div>

                  <div>
                    <Label htmlFor="urgency">How soon do you need service?</Label>
                    <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange} className="w-full rounded-md border border-input bg-background px-3 py-2 mt-1">
                      <option value="emergency">Emergency (ASAP)</option>
                      <option value="within-week">Within a week</option>
                      <option value="within-month">Within a month</option>
                      <option value="planning">Just planning</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="description">Additional Details</Label>
                    <Textarea id="description" name="description" placeholder="Tell us about your garage door needs..." rows={3} value={formData.description} onChange={handleChange} className="mt-1" />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-primary">Review Your Information</h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-medium">{formData.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{formData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{formattedPhone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">ZIP Code</p>
                      <p className="font-medium">{formData.zipCode}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Door Type</p>
                      <p className="font-medium capitalize">{formData.doorType.replace("-", " ")}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Door Width</p>
                      <p className="font-medium capitalize">{formData.doorWidth.replace("-", " ")}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Timeframe</p>
                      <p className="font-medium capitalize">{formData.urgency.replace("-", " ")}</p>
                    </div>
                  </div>
                  {formData.description && (
                    <div>
                      <p className="text-sm text-gray-500">Additional Details</p>
                      <p className="font-medium">{formData.description}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex justify-between">
          {currentStep > 0 && (
            <Button type="button" variant="outline" onClick={prevStep} className="flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
          )}
          {currentStep === 0 && <div></div>}

          {currentStep < formSteps.length - 1 ? (
            <Button type="button" onClick={nextStep} className="bg-primary hover:bg-primary/90 flex items-center gap-1">
              Next <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Get Your Free Quote"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
