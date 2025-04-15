"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatPhoneNumber, isValidEmail, isValidUSPhoneNumber, simulateServerRequest } from "@/lib/utils";
import { ArrowRight, Check, ChevronLeft, Loader2, Send, Sparkles } from "lucide-react";
import { useEffect, useRef, useState, useTransition } from "react";

// Define the services offered
const SERVICES = [
  { id: "gate_installation", label: "Gate Installation", icon: "🏡" },
  { id: "gate_repair", label: "Gate Repair", icon: "🔧" },
  { id: "garage_repair", label: "Garage Door Repair", icon: "🚪" },
  { id: "garage_installation", label: "Garage Door Installation", icon: "🔌" },
  { id: "spring", label: "Spring Replacement", icon: "🔄" },
  { id: "opener", label: "Opener Installation", icon: "⚡" },
  { id: "maintenance", label: "Maintenance Service", icon: "🛠️" },
  { id: "other", label: "Other Services", icon: "✨" },
];

export function HeroForm() {
  // Form state
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [otherService, setOtherService] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [typedQuestion, setTypedQuestion] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [otherServiceError, setOtherServiceError] = useState(false);

  const formRef = useRef(null);
  const fullQuestion = "Which services are you interested in?";

  // Typing effect for the question
  useEffect(() => {
    if (step === 1) {
      setTypedQuestion("");
      setIsTyping(true);

      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < fullQuestion.length) {
          const nextChar = fullQuestion.charAt(i);
          setTypedQuestion((prev) => prev + nextChar);
          i++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [step]);

  // Form validation
  useEffect(() => {
    if (step === 2) {
      const checkFormValidity = () => {
        const form = formRef.current;
        if (form) {
          const nameInput = form.elements.namedItem("fullName");
          const nameValid = nameInput && nameInput.value.trim() !== "";
          const phoneValid = isValidUSPhoneNumber(phoneValue);
          const emailValid = isValidEmail(emailValue);

          setPhoneError(!phoneValid && phoneValue.length > 0);
          setEmailError(!emailValid && emailValue.length > 0);

          setFormValid(nameValid && phoneValid && emailValid);
        }
      };

      // Initial check
      checkFormValidity();

      // Add event listeners to form inputs
      const inputs = document.querySelectorAll("input[required], textarea[required]");
      inputs.forEach((input) => {
        input.addEventListener("input", checkFormValidity);
      });

      return () => {
        inputs.forEach((input) => {
          input.removeEventListener("input", checkFormValidity);
        });
      };
    }
  }, [step, phoneValue, emailValue]);

  // Handle service selection
  const handleServiceToggle = (serviceId) => {
    // Add haptic feedback if supported
    if (navigator && navigator.vibrate) {
      navigator.vibrate(50);
    }

    setSelectedServices((prev) => {
      if (prev.includes(serviceId)) {
        return prev.filter((id) => id !== serviceId);
      } else {
        return [...prev, serviceId];
      }
    });
  };

  // Handle phone input with formatting
  const handlePhoneChange = (e) => {
    // Get only digits from the input
    const digits = e.target.value.replace(/\D/g, "");

    // Format the phone number
    const formattedPhone = formatPhoneNumber(digits);

    // Update the input value with the formatted phone number
    setPhoneValue(formattedPhone);
  };

  // Handle email input with validation
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmailValue(email);

    // Validate email as user types, but only show error if there's some input
    if (email.length > 0) {
      setEmailError(!isValidEmail(email));
    } else {
      setEmailError(false);
    }
  };

  // Validate other service description
  const validateOtherService = (text) => {
    // Check if there are at least two words (non-whitespace characters separated by whitespace)
    const words = text.trim().split(/\s+/);
    return words.length >= 2 && words[0] !== "" && words[1] !== "";
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation check
    if (!isValidEmail(emailValue) || !isValidUSPhoneNumber(phoneValue)) {
      setEmailError(!isValidEmail(emailValue));
      setPhoneError(!isValidUSPhoneNumber(phoneValue));
      return;
    }

    // Get form data
    const formData = new FormData(e.currentTarget);

    // Extract raw phone number (digits only)
    const rawPhoneNumber = phoneValue.replace(/\D/g, "");

    // Create a data object with the form values
    const formDataObj = {};
    formData.forEach((value, key) => {
      // Skip the phone and email fields as we'll add them manually
      if (key !== "phone" && key !== "email") {
        formDataObj[key] = value;
      }
    });

    // Combine the form data with selected services and cleaned phone number
    const formDataWithServices = {
      services: selectedServices,
      otherService: otherService,
      ...formDataObj,
      phone: rawPhoneNumber,
      formattedPhone: phoneValue,
      email: emailValue,
      timestamp: new Date().toISOString(),
    };

    // Log the submission data
    console.log("Form submission:", formDataWithServices);

    // Mock submission with delay
    startTransition(async () => {
      try {
        // Simulate server request with 2-second delay
        await simulateServerRequest(formDataWithServices, 2000);
        setIsSubmitted(true);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    });
  };

  // Reset form after submission
  const resetForm = () => {
    setStep(1);
    setSelectedServices([]);
    setOtherService("");
    setPhoneValue("");
    setEmailValue("");
    setPhoneError(false);
    setEmailError(false);
    setIsSubmitted(false);
    setTypedQuestion("");
    setIsTyping(true);
    setFormValid(false);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  // Calculate progress percentage
  const progressPercentage = step === 1 ? 50 : 100;

  return (
    <div className="bg-black/30 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
          <p className="text-green-100 text-lg mb-6">We've received your request and will contact you shortly with your free estimate.</p>
          <Button onClick={resetForm} className="bg-white text-[#32750a] hover:bg-white/90 font-medium px-6 py-2 rounded-full">
            <Sparkles className="mr-2 h-4 w-4" />
            Request Another Estimate
          </Button>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Get Your Free Estimate</h3>

          {/* Progress indicator */}
          <div className="relative h-2 w-full bg-green-800/50 rounded-full overflow-hidden mb-6">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-500 ease-in-out" style={{ width: `${progressPercentage}%` }} />
          </div>

          {step === 1 ? (
            /* Step 1: Service Selection */
            <div className="space-y-5 animate-fadeIn">
              <div className="min-h-[40px]">
                <h3 className="text-xl font-medium text-white mb-4">
                  {typedQuestion}
                  {isTyping && <span className="animate-pulse">|</span>}
                </h3>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES.map((service) =>
                    service.id !== "other" ? (
                      <div key={service.id} className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors duration-200 ${selectedServices.includes(service.id) ? "bg-green-600/70 shadow-lg" : "bg-white/10 hover:bg-white/20"}`} onClick={() => handleServiceToggle(service.id)}>
                        <div className="text-xl mr-1">{service.icon}</div>
                        <span className="text-white text-sm font-medium">{service.label}</span>

                        {selectedServices.includes(service.id) && (
                          <div className="ml-auto bg-white rounded-full p-0.5">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div key={service.id} className="col-span-1 sm:col-span-2">
                        <div className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors duration-200 ${selectedServices.includes(service.id) ? "bg-green-600/70 shadow-lg" : "bg-white/10 hover:bg-white/20"}`} onClick={() => handleServiceToggle(service.id)}>
                          <div className="text-xl mr-1">{service.icon}</div>
                          <span className="text-white text-sm font-medium">{service.label}</span>

                          {selectedServices.includes(service.id) && (
                            <div className="ml-auto bg-white rounded-full p-0.5">
                              <Check className="h-3 w-3 text-green-600" />
                            </div>
                          )}
                        </div>

                        {selectedServices.includes("other") && (
                          <Input
                            value={otherService}
                            onChange={(e) => {
                              setOtherService(e.target.value);
                              setOtherServiceError(!validateOtherService(e.target.value) && e.target.value.trim() !== "");
                            }}
                            onBlur={() => {
                              if (otherService.trim() !== "") {
                                setOtherServiceError(!validateOtherService(otherService));
                              }
                            }}
                            placeholder="Please specify your service needs"
                            className="bg-white/20 border-0 mt-2 text-white placeholder:text-white/70"
                          />
                        )}
                        {otherServiceError && <p className="text-red-400 text-xs mt-1">Please provide a detailed description (at least two words).</p>}
                      </div>
                    )
                  )}
                </div>
              </div>

              <Button type="button" onClick={() => setStep(2)} disabled={selectedServices.length === 0 || (selectedServices.includes("other") && !validateOtherService(otherService))} className={`w-full ${selectedServices.length > 0 && (!selectedServices.includes("other") || validateOtherService(otherService)) ? "bg-gradient-to-r from-green-500 to-green-600 hover:bg-green-500" : "bg-gray-500 cursor-not-allowed"} text-white font-bold text-lg py-6 rounded-lg transition-all duration-300`}>
                <ArrowRight className="mr-2 h-5 w-5" />
                Continue to Contact Info
              </Button>
            </div>
          ) : (
            /* Step 2: Contact Information */
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 animate-fadeIn">
              {/* Selected services summary */}
              <div className="bg-white/10 p-4 rounded-lg mb-4">
                <h4 className="text-white font-medium mb-3">You selected:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedServices.map((serviceId) => (
                    <div key={serviceId} className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <span className="mr-1">{SERVICES.find((s) => s.id === serviceId)?.icon}</span>
                      {SERVICES.find((s) => s.id === serviceId)?.label}
                      {serviceId === "other" && otherService ? `: ${otherService}` : ""}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <input type="text" id="fullName" name="fullName" className="block rounded-lg px-4 pb-2.5 pt-5 w-full text-base text-white bg-white/10 border-0 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 peer h-14" placeholder=" " required />
                <label htmlFor="fullName" className="absolute text-base text-white/70 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-focus:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Full Name
                </label>
              </div>

              <div className="relative">
                <input type="tel" id="phone" name="phone" value={phoneValue} onChange={handlePhoneChange} className={`block rounded-lg px-4 pb-2.5 pt-5 w-full text-base text-white bg-white/10 border-0 appearance-none focus:outline-none focus:ring-2 ${phoneError ? "focus:ring-red-500 ring-2 ring-red-500" : "focus:ring-green-500"} peer h-14`} placeholder=" " required />
                <label htmlFor="phone" className={`absolute text-base ${phoneError ? "text-red-400" : "text-white/70 peer-focus:text-green-400"} duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}>
                  Phone Number
                </label>
                {phoneError && <p className="text-red-400 text-xs mt-1">Please enter a valid US phone number</p>}
              </div>

              <div className="relative">
                <input type="email" id="email" name="email" value={emailValue} onChange={handleEmailChange} className={`block rounded-lg px-4 pb-2.5 pt-5 w-full text-base text-white bg-white/10 border-0 appearance-none focus:outline-none focus:ring-2 ${emailError ? "focus:ring-red-500 ring-2 ring-red-500" : "focus:ring-green-500"} peer h-14`} placeholder=" " required />
                <label htmlFor="email" className={`absolute text-base ${emailError ? "text-red-400" : "text-white/70 peer-focus:text-green-400"} duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}>
                  Email Address
                </label>
                {emailError && <p className="text-red-400 text-xs mt-1">Please enter a valid email address</p>}
              </div>

              <div className="relative">
                <textarea id="message" name="message" className="block rounded-lg px-4 pb-2.5 pt-5 w-full text-base text-white bg-white/10 border-0 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 peer min-h-[100px] resize-none" placeholder=" "></textarea>
                <label htmlFor="message" className="absolute text-base text-white/70 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-focus:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Tell us about your project (Optional)
                </label>
              </div>

              <div className="flex gap-4">
                <Button type="button" onClick={() => setStep(1)} className="w-1/3 bg-white/20 hover:bg-white/30 text-white font-medium py-6 rounded-lg">
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  Back
                </Button>

                <Button type="submit" className={`w-2/3 ${formValid ? "bg-gradient-to-r from-green-500 to-green-600 hover:bg-green-500" : "bg-gray-500 cursor-not-allowed"} text-white font-bold text-lg py-6 rounded-lg transition-all duration-300`} disabled={!formValid || isPending}>
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Get Free Estimate
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </>
      )}
    </div>
  );
}
