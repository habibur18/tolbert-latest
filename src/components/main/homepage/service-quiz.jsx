"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useConfetti } from "@/context/confetti-context";
import { useMobile } from "@/hooks/use-mobile";
import { formatPhoneNumber, isValidEmail, isValidUSPhoneNumber, simulateServerRequest } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Loader2, Send, Sparkles } from "lucide-react";
import { useEffect, useRef, useState, useTransition } from "react";

// Define the services offered
const SERVICES = [
  { id: "repair", label: "Garage Door Repair", icon: "🔧" },
  { id: "installation", label: "New Garage Door Installation", icon: "🚪" },
  { id: "opener", label: "Garage Door Opener Repair/Installation", icon: "🔌" },
  { id: "spring", label: "Broken Spring Replacement", icon: "🔄" },
  { id: "cable", label: "Cable Repair", icon: "⚡" },
  { id: "panel", label: "Panel Replacement", icon: "📋" },
  { id: "track", label: "Track Alignment/Repair", icon: "⚙️" },
  { id: "maintenance", label: "Preventive Maintenance", icon: "🛠️" },
  { id: "other", label: "Other Services", icon: "✨" },
];

export function ServiceQuiz() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [otherService, setOtherService] = useState("");
  const [isPending, startTransition] = useTransition();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [otherServiceError, setOtherServiceError] = useState(false);
  const [typedQuestion, setTypedQuestion] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [formValid, setFormValid] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState(false);
  const isMobile = useMobile();
  const { showConfetti } = useConfetti();

  const formRef = useRef(null);
  const fullQuestion = "Which services are you interested in?";

  // Typing effect for the question - Fixed to ensure "W" is included
  useEffect(() => {
    if (step === 1) {
      setTypedQuestion("");
      setIsTyping(true);

      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < fullQuestion.length) {
          // Ensure we're getting the correct character
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

  // Form validation including phone number and email
  useEffect(() => {
    if (step === 2) {
      const checkFormValidity = () => {
        const form = formRef.current;
        if (form) {
          const nameValid = form.elements.namedItem("fullName").value.trim() !== "";
          const phoneValid = isValidUSPhoneNumber(phoneValue);
          const emailValid = isValidEmail(emailValue);

          setPhoneError(!phoneValid && phoneValue.length > 0);
          setEmailError(!emailValid && emailValue.length > 0);

          setFormValid(nameValid && phoneValid && emailValid);
        }
      };

      // Add event listeners to form inputs
      const inputs = document.querySelectorAll("input[required], textarea[required]");
      inputs.forEach((input) => {
        input.addEventListener("input", checkFormValidity);
      });

      // Initial check
      checkFormValidity();

      return () => {
        inputs.forEach((input) => {
          input.removeEventListener("input", checkFormValidity);
        });
      };
    }
  }, [step, phoneValue, emailValue]);

  const handleServiceToggle = (serviceId) => {
    // Add haptic feedback if supported
    if (navigator.vibrate) {
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

  const handlePhoneChange = (e) => {
    // Get only digits from the input
    const digits = e.target.value.replace(/\D/g, "");

    // Format the phone number
    const formattedPhone = formatPhoneNumber(digits);

    // Update the input value with the formatted phone number
    setPhoneValue(formattedPhone);
  };

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

  const validateOtherService = (text) => {
    // Check if there are at least two words (non-whitespace characters separated by whitespace)
    const words = text.trim().split(/\s+/);
    return words.length >= 2 && words[0] !== "" && words[1] !== "";
  };

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
      phone: rawPhoneNumber, // Use the raw phone number
      formattedPhone: phoneValue, // Also include the formatted version
      email: emailValue,
      timestamp: new Date().toISOString(),
    };

    // Log the submission data
    console.log("Form submission:", formDataWithServices);

    // Mock submission with 3-second delay
    startTransition(async () => {
      try {
        // Simulate server request with 3-second delay
        await simulateServerRequest(formDataWithServices, 3000);

        setIsSubmitted(true);
        // Show confetti across the entire website
        showConfetti();
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error state if needed
      }
    });
  };

  const resetForm = () => {
    setStep(1);
    setSelectedServices([]);
    setOtherService("");
    setIsSubmitted(false);
    setTypedQuestion("");
    setIsTyping(true);
    setFormValid(false);
    setPhoneValue("");
    setPhoneError(false);
    setEmailValue("");
    setEmailError(false);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  // Calculate progress percentage
  const progressPercentage = step === 1 ? 50 : 100;

  return (
    <div className="space-y-6 relative">
      {/* Progress indicator */}
      <div className="relative h-2 w-full bg-green-800/50 rounded-full overflow-hidden">
        <motion.div className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-500" initial={{ width: step === 1 ? "0%" : "50%" }} animate={{ width: `${progressPercentage}%` }} transition={{ duration: 0.5, ease: "easeInOut" }} />
      </div>

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="flex flex-col items-center justify-center py-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.2,
              }}
              className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6"
            >
              <Check className="w-12 h-12 text-white" />
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-2">Thank You Boss For Your Time 💖💖💖!</h3>
            <p className="text-green-100 text-lg mb-8">We've received your request and will contact you shortly with your free estimate.</p>

            <Button onClick={resetForm} className="bg-white text-green-700 hover:bg-green-100 font-medium px-6 py-2 rounded-full">
              <Sparkles className="mr-2 h-4 w-4" />
              Request Another Estimate
            </Button>
          </motion.div>
        ) : step === 1 ? (
          /* Step 1: Service Selection */
          <motion.form key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.3 }} className="space-y-6">
            <div className="min-h-[40px]">
              <h3 className="text-2xl font-semibold text-white mb-4 drop-shadow-sm">
                {typedQuestion}
                {isTyping && <span className="animate-pulse">|</span>}
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {SERVICES.map((service) =>
                service.id !== "other" ? (
                  <motion.div key={service.id} className="relative" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <motion.div className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${selectedServices.includes(service.id) ? "bg-green-600/70 shadow-lg" : "bg-white/10 hover:bg-white/20"} transition-colors duration-200`} onClick={() => handleServiceToggle(service.id)}>
                      <div className="text-2xl mr-2">{service.icon}</div>
                      <span className="text-white text-lg font-medium">{service.label}</span>

                      {selectedServices.includes(service.id) && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto bg-white rounded-full p-1">
                          <Check className="h-4 w-4 text-green-600" />
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div key={service.id} className="space-y-2" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <motion.div className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${selectedServices.includes(service.id) ? "bg-green-600/70 shadow-lg" : "bg-white/10 hover:bg-white/20"} transition-colors duration-200`} onClick={() => handleServiceToggle(service.id)}>
                      <div className="text-2xl mr-2">{service.icon}</div>
                      <span className="text-white text-lg font-medium">{service.label}</span>

                      {selectedServices.includes(service.id) && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto bg-white rounded-full p-1">
                          <Check className="h-4 w-4 text-green-600" />
                        </motion.div>
                      )}
                    </motion.div>

                    {selectedServices.includes("other") && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
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
                          className={`bg-white/90 rounded-md h-12 !text-lg mt-2 border-0 focus:ring-2 ${otherServiceError ? "ring-2 ring-red-500 focus:ring-red-500" : "focus:ring-green-500"}`}
                        />
                        {otherServiceError && <p className="text-red-500 text-sm mt-1 px-1">Please provide a detailed description of your custom needs (at least two words).</p>}
                      </motion.div>
                    )}
                  </motion.div>
                )
              )}
            </div>

            <Button type="button" onClick={() => setStep(2)} disabled={selectedServices.length === 0 || (selectedServices.includes("other") && !validateOtherService(otherService))} className={`w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-xl h-14 rounded-lg font-semibold shadow-lg ${selectedServices.length === 0 || (selectedServices.includes("other") && !validateOtherService(otherService)) ? "opacity-50 cursor-not-allowed" : "transform transition-transform duration-200"}`}>
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.form>
        ) : (
          /* Step 2: Contact Information */
          <motion.form ref={formRef} key="step2" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.3 }} onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4 drop-shadow-sm">Almost there! Tell us how to reach you</h3>

            {/* Selected services summary */}
            <motion.div className="bg-white/10 p-4 rounded-lg mb-4" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              <h4 className="text-white font-semibold mb-3 text-lg">You selected:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedServices.map((serviceId) => (
                  <motion.div
                    key={serviceId}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-base flex items-center shadow-md font-medium"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 15,
                      delay: Math.random() * 0.3 + 0.3,
                    }}
                  >
                    <span className="mr-1">{SERVICES.find((s) => s.id === serviceId)?.icon}</span>
                    {SERVICES.find((s) => s.id === serviceId)?.label}
                    {serviceId === "other" && otherService ? `: ${otherService}` : ""}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-4">
              <div className="md:flex md:gap-2 w-full space-y-4 md:space-y-0">
                {/* Full Name Field */}
                <div className="relative w-full ">
                  <input type="text" id="fullName" name="fullName" className="block rounded-lg px-4 pb-2.5 pt-5 w-full text-lg text-gray-900 bg-white/90 border-0 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 peer h-14 shadow-md" placeholder=" " required />
                  <label htmlFor="fullName" className="absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Full Name
                  </label>
                </div>

                {/* Phone Field with US formatting */}
                <div className="relative w-full">
                  <input type="tel" id="phone" name="phone" value={phoneValue} onChange={handlePhoneChange} className={`block rounded-lg px-4 pb-2.5 pt-5 w-full text-lg text-gray-900 bg-white/90 border-0 appearance-none focus:outline-none focus:ring-2 ${phoneError ? "focus:ring-red-500 ring-2 ring-red-500" : "focus:ring-green-500"} peer h-14 shadow-md`} placeholder=" " required />
                  <label htmlFor="phone" className={`absolute text-lg ${phoneError ? "text-red-500" : "text-gray-500 peer-focus:text-green-600"} duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}>
                    Phone Number
                  </label>
                  {phoneError && <p className="text-red-500 text-sm mt-1">Please enter a valid US phone number (10 digits)</p>}
                </div>
              </div>

              {/* Email Field with strict validation */}
              <div className="relative">
                <input type="email" id="email" name="email" value={emailValue} onChange={handleEmailChange} className={`block rounded-lg px-4 pb-2.5 pt-5 w-full text-lg text-gray-900 bg-white/90 border-0 appearance-none focus:outline-none focus:ring-2 ${emailError ? "focus:ring-red-500 ring-2 ring-red-500" : "focus:ring-green-500"} peer h-14 shadow-md`} placeholder=" " required />
                <label htmlFor="email" className={`absolute text-lg ${emailError ? "text-red-500" : "text-gray-500 peer-focus:text-green-600"} duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}>
                  Email Address
                </label>
                {emailError && <p className="text-red-500 text-sm mt-1">Please enter a valid email address (e.g., name@example.com)</p>}
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea id="message" name="message" rows={2} className="block rounded-lg px-4 pb-2.5 pt-5 w-full text-lg text-gray-900 bg-white/90 border-0 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 peer min-h-[120px] shadow-md resize-y" placeholder=" "></textarea>
                <label htmlFor="message" className="absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Additional Details (Optional)
                </label>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-1">
                <Button type="button" onClick={() => setStep(1)} variant="outline" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20 h-14 rounded-lg font-medium">
                  <ArrowLeft className="mr-2 h-5 w-5" /> Back
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-[2]">
                <Button type="submit" className={`w-full ${formValid ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500" : "bg-gray-400"} text-xl h-14 rounded-lg font-semibold shadow-lg transition-all duration-300`} disabled={isPending || !formValid}>
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      <span className="hidden sm:inline">Get</span> Free Estimate
                    </>
                  )}
                </Button>
              </motion.div>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
