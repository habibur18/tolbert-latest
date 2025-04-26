"use client";

import { Button } from "@/components/ui/button";
import { useConfetti } from "@/context/confetti-context";
import { useToast } from "@/hooks/use-toast";
import { formatPhoneNumber, isValidEmail, isValidUSPhoneNumber, simulateServerRequest } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import GDRFormReview from "./gdr-form-review";
import GDRFormStep1 from "./gdr-form-step1";
import GDRFormStep2 from "./gdr-form-step2";
import GDRFormStep3 from "./gdr-form-step3";

const formSteps = [
  { id: "contact", title: "Contact Information" },
  { id: "property", title: "Property Details" },
  { id: "needs", title: "Your Needs" },
  { id: "review", title: "Review & Submit" },
];

export default function GDRForm() {
  const { toast } = useToast();
  const { showConfetti } = useConfetti();
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    phone: false,
    zipCode: false,
    doorWidth: false,
    doorType: false,
  });

  const validateField = (name, value, checkTouched = true) => {
    // Skip validation for untouched fields unless explicitly checking all
    if (checkTouched && !touched[name]) {
      return "";
    }

    let error = "";

    switch (name) {
      case "fullName":
        if (!value.trim()) {
          error = "Full name is required";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!isValidEmail(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "phone":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!isValidUSPhoneNumber(value)) {
          error = "Please enter a valid 10-digit phone number";
        }
        break;
      case "zipCode":
        if (!value.trim()) {
          error = "ZIP code is required";
        } else if (!/^\d{5}(-\d{4})?$/.test(value.trim())) {
          error = "Please enter a valid ZIP code";
        }
        break;
      case "doorWidth":
        if (!value) {
          error = "Please select a door width";
        }
        break;
      case "doorType":
        if (!value) {
          error = "Please select a door type";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Mark as touched
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate the field
    const error = validateField(name, value, false);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Mark field as touched
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate on blur
    const error = validateField(name, value, false);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateStep = (step) => {
    let isValid = true;
    const newErrors = { ...errors };

    if (step === 0) {
      // Validate contact info
      const fields = ["fullName", "email", "phone"];
      fields.forEach((field) => {
        const error = validateField(field, formData[field], false); // Force validation
        if (error) {
          newErrors[field] = error;
          isValid = false;
        } else {
          newErrors[field] = "";
        }
      });
    } else if (step === 1) {
      // Validate property info
      const fields = ["zipCode", "doorWidth"];
      fields.forEach((field) => {
        const error = validateField(field, formData[field], false); // Force validation
        if (error) {
          newErrors[field] = error;
          isValid = false;
        } else {
          newErrors[field] = "";
        }
      });
    } else if (step === 2) {
      // Validate preferences
      const error = validateField("doorType", formData.doorType, false); // Force validation
      if (error) {
        newErrors.doorType = error;
        isValid = false;
      } else {
        newErrors.doorType = "";
      }
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

      // Show success toast
      toast({
        title: "Quote request submitted!",
        description: "We'll contact you shortly with your free estimate.",
      });

      // Show confetti celebration
      showConfetti();

      // Set success state
      setIsSuccess(true);
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

  const handleSubmitAnother = () => {
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
    setCurrentStep(0);
    setTouched({
      fullName: false,
      email: false,
      phone: false,
      zipCode: false,
      doorWidth: false,
      doorType: false,
    });
    setIsSuccess(false);
  };

  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="relative">
      {isSuccess ? (
        <div className="text-center py-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">Your garage door replacement quote request has been submitted successfully. Our team will contact you shortly with your personalized estimate.</p>
          <Button type="button" onClick={handleSubmitAnother} className="bg-primary hover:bg-primary/90">
            Submit Another Request
          </Button>
        </div>
      ) : (
        <>
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

          <form onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="wait">
              <motion.div key={currentStep} variants={variants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }}>
                {currentStep === 0 && <GDRFormStep1 formData={formData} errors={errors} handleChange={handleChange} handleBlur={handleBlur} />}

                {currentStep === 1 && <GDRFormStep2 formData={formData} errors={errors} handleChange={handleChange} handleBlur={handleBlur} />}

                {currentStep === 2 && <GDRFormStep3 formData={formData} errors={errors} handleChange={handleChange} handleBlur={handleBlur} />}

                {currentStep === 3 && <GDRFormReview formData={formData} formattedPhone={formatPhoneNumber(formData.phone)} />}
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
                <Button type="button" onClick={nextStep} className="bg-primary hover:bg-primary/90 flex items-center gap-1" disabled={Object.values(errors).some((error) => error !== "")}>
                  Next <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button type="button" onClick={handleSubmit} className="bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Get Your Free Quote"}
                </Button>
              )}
            </div>
          </form>
        </>
      )}
    </div>
  );
}
