"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useConfetti } from "@/context/confetti-context";
import { cn, formatPhoneNumber, isValidEmail, isValidUSPhoneNumber, simulateServerRequest } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle, ChevronRight, Home, Phone, PenToolIcon as Tool } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Door types with images
const doorTypes = [
  { value: "sectional", label: "Sectional", image: "/placeholder.svg?height=100&width=100" },
  { value: "rolling", label: "Rolling", image: "/placeholder.svg?height=100&width=100" },
  { value: "sliding", label: "Sliding", image: "/placeholder.svg?height=100&width=100" },
  { value: "swing", label: "Swing", image: "/placeholder.svg?height=100&width=100" },
];

// Door counts
const doorCounts = [
  { value: "1", label: "1 Door" },
  { value: "2", label: "2 Doors" },
  { value: "3", label: "3 Doors" },
  { value: "4+", label: "4+ Doors" },
];

export default function QuoteForm({ steps }) {
  const { showConfetti } = useConfetti();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: "",
    doorType: "",
    doorCount: "",
    propertyType: "",
    urgency: "",
    preferredTime: "",
    details: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    zipCode: "",
  });

  // Validate phone number in real-time
  useEffect(() => {
    if (formData.phone) {
      const digits = formData.phone.replace(/\D/g, "");

      // Only show error if they've entered something but it's not complete
      if (digits.length > 0 && digits.length !== 10) {
        setErrors((prev) => ({
          ...prev,
          phone: "Please enter a complete 10-digit US phone number",
        }));
      } else {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
    }
  }, [formData.phone]);

  // Validate email in real-time
  useEffect(() => {
    if (formData.email) {
      if (!isValidEmail(formData.email)) {
        setErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address",
        }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }
  }, [formData.email]);

  // Validate zip code in real-time
  useEffect(() => {
    if (formData.zipCode) {
      // US zip codes are 5 digits
      const zipRegex = /^\d{5}$/;
      if (!zipRegex.test(formData.zipCode)) {
        setErrors((prev) => ({
          ...prev,
          zipCode: "Please enter a valid 5-digit zip code",
        }));
      } else {
        setErrors((prev) => ({ ...prev, zipCode: "" }));
      }
    }
  }, [formData.zipCode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Extract only digits
      const digits = value.replace(/\D/g, "");
      // Format the phone number
      const formattedPhone = formatPhoneNumber(digits);
      setFormData((prev) => ({ ...prev, [name]: formattedPhone }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing (except for phone and email which are validated in real-time)
    if (errors[name] && name !== "phone" && name !== "email") {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (currentStep === 4) {
      // Validate name
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
        valid = false;
      }

      // Validate phone
      if (!formData.phone) {
        newErrors.phone = "Phone number is required";
        valid = false;
      } else if (!isValidUSPhoneNumber(formData.phone)) {
        newErrors.phone = "Please enter a valid 10-digit US phone number";
        valid = false;
      }

      // Validate email
      if (!formData.email) {
        newErrors.email = "Email is required";
        valid = false;
      } else if (!isValidEmail(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        valid = false;
      }

      // Validate address
      if (!formData.address.trim()) {
        newErrors.address = "Service address is required";
        valid = false;
      }

      // Validate zip code
      if (!formData.zipCode) {
        newErrors.zipCode = "Zip code is required";
        valid = false;
      } else if (!/^\d{5}$/.test(formData.zipCode)) {
        newErrors.zipCode = "Please enter a valid 5-digit zip code";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleNext = async () => {
    if (currentStep < steps.length) {
      if (validateForm()) {
        setCurrentStep((prev) => prev + 1);
      }
    } else {
      if (validateForm()) {
        // Submit form
        setIsSubmitting(true);
        try {
          console.log("Form submitted:", formData);
          await simulateServerRequest(formData, 2000);
          setIsSubmitted(true);
          showConfetti();
        } catch (error) {
          console.error("Error submitting form:", error);
        } finally {
          setIsSubmitting(false);
        }
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
    setFormData({
      serviceType: "",
      doorType: "",
      doorCount: "",
      propertyType: "",
      urgency: "",
      preferredTime: "",
      details: "",
      name: "",
      phone: "",
      email: "",
      address: "",
      zipCode: "",
    });
    setErrors({
      name: "",
      phone: "",
      email: "",
      address: "",
      zipCode: "",
    });
  };

  // Determine if the current step is valid
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return !!formData.serviceType;
      case 2:
        return !!formData.propertyType && !!formData.doorType && !!formData.doorCount;
      case 3:
        return !!formData.urgency;
      case 4:
        // Check if there are any validation errors
        return !errors.name && !errors.phone && !errors.email && !errors.address && !errors.zipCode && !!formData.name && !!formData.phone && !!formData.email && !!formData.address && !!formData.zipCode;
      default:
        return false;
    }
  };

  return (
    <div className="relative rounded-xl bg-white p-6 shadow-xl">
      {/* Decorative corner accents */}
      <div className="absolute left-0 top-0 h-16 w-16 overflow-hidden">
        <div className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-br-xl border-b-4 border-r-4 border-[#32750a]"></div>
      </div>
      <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">
        <div className="absolute right-0 top-0 h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-bl-xl border-b-4 border-l-4 border-[#32750a]"></div>
      </div>
      <div className="absolute bottom-0 left-0 h-16 w-16 overflow-hidden">
        <div className="absolute bottom-0 left-0 h-4 w-4 -translate-x-1/2 translate-y-1/2 rounded-tr-xl border-r-4 border-t-4 border-[#32750a]"></div>
      </div>
      <div className="absolute bottom-0 right-0 h-16 w-16 overflow-hidden">
        <div className="absolute bottom-0 right-0 h-4 w-4 translate-x-1/2 translate-y-1/2 rounded-tl-xl border-l-4 border-t-4 border-[#32750a]"></div>
      </div>

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Request a Free Estimate or Give Us a Call</h2>

              <p className="text-gray-600">Complete this quick {steps.length}-step form for an instant estimate</p>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="mb-4 flex justify-between">
                {steps.map((step) => (
                  <div key={step.id} className="flex flex-col items-center">
                    <div className={cn("relative flex h-12 w-12 items-center justify-center rounded-full text-sm font-medium transition-all duration-300", step.id < currentStep ? "bg-[#32750a] text-white" : step.id === currentStep ? "bg-[#32750a] text-white ring-4 ring-[#32750a]/20" : "bg-gray-100 text-gray-400")}>
                      {step.id < currentStep ? <CheckCircle className="h-6 w-6" /> : <step.icon className="h-5 w-5" />}

                      {/* Step connector line */}
                      {step.id < steps.length && <div className={cn("absolute left-full top-1/2 h-0.5 w-[calc(100%-1rem)] -translate-y-1/2", step.id < currentStep ? "bg-[#32750a]" : "bg-gray-200")}></div>}
                    </div>
                    <span className={cn("mt-2 text-xs font-medium", step.id <= currentStep ? "text-[#32750a]" : "text-gray-500")}>{step.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 1: Service Type */}
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-4">
                  <div>
                    <Label className="text-base font-medium">What service do you need?</Label>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      {[
                        { value: "installation", label: "New Installation", icon: Tool },
                        { value: "repair", label: "Door Repair", icon: Tool },
                        { value: "opener", label: "Opener Service", icon: Tool },
                        { value: "maintenance", label: "Maintenance", icon: Tool },
                      ].map((service) => (
                        <div key={service.value} className={cn("flex cursor-pointer flex-col items-center justify-center rounded-lg border p-4 text-center transition-all hover:border-[#32750a]/50 hover:bg-[#32750a]/5", formData.serviceType === service.value ? "border-[#32750a] bg-[#32750a]/10 ring-1 ring-[#32750a]/20" : "border-gray-200")} onClick={() => handleSelectChange("serviceType", service.value)}>
                          <div className={cn("mb-2 flex h-10 w-10 items-center justify-center rounded-full", formData.serviceType === service.value ? "bg-[#32750a] text-white" : "bg-gray-100 text-gray-500")}>
                            <service.icon className="h-5 w-5" />
                          </div>
                          <span className="text-sm font-medium">{service.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Property Details */}
              {currentStep === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-6">
                  <div>
                    <Label className="text-base font-medium">Property Type</Label>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      {[
                        { value: "residential", label: "Residential", icon: Home },
                        { value: "commercial", label: "Commercial", icon: Home },
                      ].map((type) => (
                        <div key={type.value} className={cn("flex cursor-pointer flex-col items-center justify-center rounded-lg border p-4 text-center transition-all hover:border-[#32750a]/50 hover:bg-[#32750a]/5", formData.propertyType === type.value ? "border-[#32750a] bg-[#32750a]/10 ring-1 ring-[#32750a]/20" : "border-gray-200")} onClick={() => handleSelectChange("propertyType", type.value)}>
                          <div className={cn("mb-2 flex h-10 w-10 items-center justify-center rounded-full", formData.propertyType === type.value ? "bg-[#32750a] text-white" : "bg-gray-100 text-gray-500")}>
                            <type.icon className="h-5 w-5" />
                          </div>
                          <span className="text-sm font-medium">{type.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="mb-2 block text-base font-medium">Door Type</Label>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {doorTypes.map((type) => (
                        <div key={type.value} onClick={() => handleSelectChange("doorType", type.value)} className={cn("cursor-pointer overflow-hidden rounded-lg border transition-all hover:border-[#32750a]/50 hover:shadow-md", formData.doorType === type.value ? "border-[#32750a] ring-1 ring-[#32750a]/20" : "border-gray-200")}>
                          <div className="relative h-20 w-full overflow-hidden bg-gray-100">
                            <Image src={type.image || "/placeholder.svg"} alt={type.label} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                            {formData.doorType === type.value && (
                              <div className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#32750a] text-white">
                                <CheckCircle className="h-4 w-4" />
                              </div>
                            )}
                          </div>
                          <div className={cn("p-2 text-center text-sm", formData.doorType === type.value ? "bg-[#32750a]/10 font-medium" : "")}>{type.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="mb-2 block text-base font-medium">Number of Doors</Label>
                    <div className="flex flex-wrap gap-2">
                      {doorCounts.map((count) => (
                        <div key={count.value} onClick={() => handleSelectChange("doorCount", count.value)} className={cn("cursor-pointer rounded-full border px-4 py-2 text-center text-sm transition-all hover:border-[#32750a]/50", formData.doorCount === count.value ? "border-[#32750a] bg-[#32750a] font-medium text-white" : "border-gray-200 bg-gray-50")}>
                          {count.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Timeline */}
              {currentStep === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-4">
                  <div>
                    <Label className="text-base font-medium">How urgent is your request?</Label>
                    <div className="mt-3 space-y-3">
                      {[
                        {
                          value: "emergency",
                          label: "Emergency (Same Day)",
                          description: "I need help immediately",
                        },
                        { value: "soon", label: "Within a few days", description: "I need service this week" },
                        {
                          value: "scheduled",
                          label: "Scheduled",
                          description: "I'd like to book for a specific date",
                        },
                        {
                          value: "planning",
                          label: "Just planning ahead",
                          description: "I'm researching options",
                        },
                      ].map((option) => (
                        <div key={option.value} className={cn("cursor-pointer rounded-lg border p-4 transition-all hover:border-[#32750a]/50 hover:bg-[#32750a]/5", formData.urgency === option.value ? "border-[#32750a] bg-[#32750a]/10 ring-1 ring-[#32750a]/20" : "border-gray-200")} onClick={() => handleSelectChange("urgency", option.value)}>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{option.label}</p>
                              <p className="text-sm text-gray-500">{option.description}</p>
                            </div>
                            <div className={cn("flex h-6 w-6 items-center justify-center rounded-full border", formData.urgency === option.value ? "border-[#32750a] bg-[#32750a] text-white" : "border-gray-300")}>{formData.urgency === option.value && <CheckCircle className="h-4 w-4" />}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {formData.urgency === "scheduled" && (
                    <div>
                      <Label className="text-base font-medium">Preferred Time</Label>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {[
                          { value: "morning", label: "Morning (8am-12pm)" },
                          { value: "afternoon", label: "Afternoon (12pm-5pm)" },
                          { value: "evening", label: "Evening (5pm-8pm)" },
                          { value: "anytime", label: "Anytime" },
                        ].map((time) => (
                          <div key={time.value} onClick={() => handleSelectChange("preferredTime", time.value)} className={cn("cursor-pointer rounded-full border px-4 py-2 text-center text-sm transition-all hover:border-[#32750a]/50", formData.preferredTime === time.value ? "border-[#32750a] bg-[#32750a] font-medium text-white" : "border-gray-200 bg-gray-50")}>
                            {time.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="details">Additional Details (Optional)</Label>
                    <Textarea id="details" name="details" value={formData.details} onChange={handleInputChange} placeholder="Tell us more about your garage door needs..." className="mt-1" />
                  </div>
                </motion.div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name" className={cn(errors.name && "text-red-500")}>
                        Full Name
                      </Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" required className={cn("mt-1", errors.name && "border-red-500 focus-visible:ring-red-500")} />
                      {errors.name && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle className="h-3 w-3" /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone" className={cn(errors.phone && "text-red-500")}>
                        Phone Number
                      </Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="(469) 909-0956" required className={cn("mt-1", errors.phone && "border-red-500 focus-visible:ring-red-500")} />
                      {errors.phone && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle className="h-3 w-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className={cn(errors.email && "text-red-500")}>
                      Email Address
                    </Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" required className={cn("mt-1", errors.email && "border-red-500 focus-visible:ring-red-500")} />
                    {errors.email && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle className="h-3 w-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="address" className={cn(errors.address && "text-red-500")}>
                        Service Address
                      </Label>
                      <Input id="address" name="address" value={formData.address} onChange={handleInputChange} placeholder="123 Main St, Dallas, TX" required className={cn("mt-1", errors.address && "border-red-500 focus-visible:ring-red-500")} />
                      {errors.address && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle className="h-3 w-3" /> {errors.address}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="zipCode" className={cn(errors.zipCode && "text-red-500")}>
                        Zip Code
                      </Label>
                      <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} placeholder="75001" required maxLength={5} className={cn("mt-1", errors.zipCode && "border-red-500 focus-visible:ring-red-500")} />
                      {errors.zipCode && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle className="h-3 w-3" /> {errors.zipCode}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="consent" className="h-4 w-4 rounded border-gray-300" />
                    <Label htmlFor="consent" className="text-sm text-gray-600">
                      I agree to receive communications about my quote and service
                    </Label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6 flex justify-between">
              {currentStep > 1 ? (
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
              ) : (
                <div></div>
              )}
              <Button onClick={handleNext} className="bg-[#32750a] hover:bg-[#275e08]" disabled={!isStepValid() || isSubmitting}>
                {isSubmitting ? (
                  <>
                    <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    {currentStep === steps.length ? "Get Your Free Quote" : "Next"}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>

            {/* Call directly option */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">Need immediate assistance?</p>
              <a href="tel:214-555-1234" className="mt-1 flex items-center justify-center gap-1 text-[#32750a] hover:underline">
                <Phone className="h-4 w-4" />
                <span className="font-medium">Call (469) 909-0956</span>
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#32750a]/10">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring", stiffness: 200 }}>
                <CheckCircle className="h-12 w-12 text-[#32750a]" />
              </motion.div>
            </div>

            <h2 className="mb-2 text-2xl font-bold text-gray-900">Quote Request Submitted!</h2>
            <p className="mb-6 text-gray-600">Thank you for choosing our services. One of our experts will contact you shortly with your free quote.</p>

            <div className="mb-8 w-full rounded-lg bg-[#32750a]/10 p-4">
              <h3 className="mb-2 font-semibold text-[#32750a]">What happens next?</h3>
              <ol className="space-y-2 text-left text-sm">
                <li className="flex items-start gap-2">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#32750a] text-white">1</div>
                  <span>
                    Our team will review your request <span className="font-medium">(within 30 minutes)</span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#32750a] text-white">2</div>
                  <span>You'll receive a detailed quote via email and text</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#32750a] text-white">3</div>
                  <span>We'll schedule your service at a time that works for you</span>
                </li>
              </ol>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <Button onClick={resetForm} variant="outline" className="flex-1">
                Submit Another Request
              </Button>
              <Button className="flex-1 bg-[#32750a] hover:bg-[#275e08]" onClick={() => (window.location.href = "tel:214-555-1234")}>
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
