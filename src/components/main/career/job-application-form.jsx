// "use client";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// import { useToast } from "@/hooks/use-toast";
// import { cn } from "@/lib/utils";
// import { AnimatePresence, motion } from "framer-motion";
// import { ArrowLeft, CheckCircle, FileText, Info, Loader2, Search, Upload, X } from "lucide-react";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// // US States with abbreviations
// const US_STATES = [
//   { name: "Alabama", code: "AL" },
//   { name: "Alaska", code: "AK" },
//   { name: "Arizona", code: "AZ" },
//   { name: "Arkansas", code: "AR" },
//   { name: "California", code: "CA" },
//   { name: "Colorado", code: "CO" },
//   { name: "Connecticut", code: "CT" },
//   { name: "Delaware", code: "DE" },
//   { name: "Florida", code: "FL" },
//   { name: "Georgia", code: "GA" },
//   { name: "Hawaii", code: "HI" },
//   { name: "Idaho", code: "ID" },
//   { name: "Illinois", code: "IL" },
//   { name: "Indiana", code: "IN" },
//   { name: "Iowa", code: "IA" },
//   { name: "Kansas", code: "KS" },
//   { name: "Kentucky", code: "KY" },
//   { name: "Louisiana", code: "LA" },
//   { name: "Maine", code: "ME" },
//   { name: "Maryland", code: "MD" },
//   { name: "Massachusetts", code: "MA" },
//   { name: "Michigan", code: "MI" },
//   { name: "Minnesota", code: "MN" },
//   { name: "Mississippi", code: "MS" },
//   { name: "Missouri", code: "MO" },
//   { name: "Montana", code: "MT" },
//   { name: "Nebraska", code: "NE" },
//   { name: "Nevada", code: "NV" },
//   { name: "New Hampshire", code: "NH" },
//   { name: "New Jersey", code: "NJ" },
//   { name: "New Mexico", code: "NM" },
//   { name: "New York", code: "NY" },
//   { name: "North Carolina", code: "NC" },
//   { name: "North Dakota", code: "ND" },
//   { name: "Ohio", code: "OH" },
//   { name: "Oklahoma", code: "OK" },
//   { name: "Oregon", code: "OR" },
//   { name: "Pennsylvania", code: "PA" },
//   { name: "Rhode Island", code: "RI" },
//   { name: "South Carolina", code: "SC" },
//   { name: "South Dakota", code: "SD" },
//   { name: "Tennessee", code: "TN" },
//   { name: "Texas", code: "TX" },
//   { name: "Utah", code: "UT" },
//   { name: "Vermont", code: "VT" },
//   { name: "Virginia", code: "VA" },
//   { name: "Washington", code: "WA" },
//   { name: "West Virginia", code: "WV" },
//   { name: "Wisconsin", code: "WI" },
//   { name: "Wyoming", code: "WY" },
// ];

// export default function JobApplicationForm({ job }) {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     resume: null,
//     experience: "",
//     linkedin: "",
//     website: "",
//     certifications: "",
//     whyInterested: "",
//     relevantExperience: "",
//     authorized: "yes",
//     startDate: "immediately",
//     salaryExpectations: "",
//     coverLetter: "",
//     heardFrom: "",
//     terms: false,
//     contactPermission: false,
//     futurePositions: false,
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [resumeFile, setResumeFile] = useState(null);
//   const fileInputRef = useRef(null);
//   const { toast } = useToast();
//   const [stateOpen, setStateOpen] = useState(false);
//   const [animationComplete, setAnimationComplete] = useState(true);
//   const [formProgress, setFormProgress] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);

//   const totalSteps = 4;

//   // Enhanced animation variants for a quiz-like feel
//   const pageVariants = {
//     initial: (direction) => ({
//       opacity: 0,
//       x: direction > 0 ? "100%" : "-100%",
//       scale: 0.9,
//       rotateY: direction > 0 ? 10 : -10,
//       filter: "blur(10px)",
//     }),
//     animate: {
//       opacity: 1,
//       x: 0,
//       scale: 1,
//       rotateY: 0,
//       filter: "blur(0px)",
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 20,
//         opacity: { duration: 0.4 },
//         scale: { duration: 0.4 },
//         rotateY: { duration: 0.4 },
//         filter: { duration: 0.3 },
//       },
//     },
//     exit: (direction) => ({
//       opacity: 0,
//       x: direction < 0 ? "100%" : "-100%",
//       scale: 0.9,
//       rotateY: direction < 0 ? 10 : -10,
//       filter: "blur(10px)",
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 20,
//         opacity: { duration: 0.3 },
//         scale: { duration: 0.3 },
//         rotateY: { duration: 0.3 },
//         filter: { duration: 0.2 },
//       },
//     }),
//   };

//   // Button animation variants
//   const buttonVariants = {
//     initial: { scale: 1 },
//     hover: {
//       scale: 1.05,
//       boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
//       transition: { type: "spring", stiffness: 400, damping: 10 },
//     },
//     tap: { scale: 0.95 },
//   };

//   // Progress indicator animation
//   const progressIndicatorVariants = {
//     inactive: { scale: 1, backgroundColor: "rgb(243, 244, 246)" },
//     active: {
//       scale: [1, 1.2, 1],
//       backgroundColor: "rgb(50, 117, 10, 0.2)",
//       transition: { duration: 0.5 },
//     },
//     completed: {
//       scale: [1, 1.2, 1],
//       backgroundColor: "rgb(50, 117, 10)",
//       transition: { duration: 0.5 },
//     },
//   };

//   // Calculate form completion percentage
//   useEffect(() => {
//     const calculateProgress = () => {
//       const totalFields = Object.keys(formData).length;
//       const filledFields = Object.entries(formData).filter(([key, value]) => {
//         if (typeof value === "boolean") return value === true;
//         if (value === null) return false;
//         return value !== "";
//       }).length;

//       return Math.round((filledFields / totalFields) * 100);
//     };

//     setFormProgress(calculateProgress());
//   }, [formData]);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     // Clear error when user types
//     if (formErrors[name]) {
//       setFormErrors((prev) => ({
//         ...prev,
//         [name]: null,
//       }));
//     }
//   };

//   const handleSelectChange = (name, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Clear error when user selects
//     if (formErrors[name]) {
//       setFormErrors((prev) => ({
//         ...prev,
//         [name]: null,
//       }));
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Check file type
//       const fileType = file.type;
//       const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

//       if (!validTypes.includes(fileType)) {
//         toast({
//           title: "Invalid file type",
//           description: "Please upload a PDF or Word document",
//           variant: "destructive",
//         });
//         return;
//       }

//       // Check file size (max 5MB)
//       if (file.size > 5 * 1024 * 1024) {
//         toast({
//           title: "File too large",
//           description: "Please upload a file smaller than 5MB",
//           variant: "destructive",
//         });
//         return;
//       }

//       setFormData((prev) => ({
//         ...prev,
//         resume: file,
//       }));
//       setResumeFile(file);

//       // Clear error
//       if (formErrors.resume) {
//         setFormErrors((prev) => ({
//           ...prev,
//           resume: null,
//         }));
//       }

//       // Show success toast
//       toast({
//         title: "Resume uploaded",
//         description: "Your resume has been successfully uploaded",
//         variant: "success",
//       });
//     }
//   };

//   // Handle drag and drop for resume
//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragging(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);

//     const file = e.dataTransfer.files[0];
//     if (file) {
//       // Check file type
//       const fileType = file.type;
//       const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

//       if (!validTypes.includes(fileType)) {
//         toast({
//           title: "Invalid file type",
//           description: "Please upload a PDF or Word document",
//           variant: "destructive",
//         });
//         return;
//       }

//       // Check file size (max 5MB)
//       if (file.size > 5 * 1024 * 1024) {
//         toast({
//           title: "File too large",
//           description: "Please upload a file smaller than 5MB",
//           variant: "destructive",
//         });
//         return;
//       }

//       setFormData((prev) => ({
//         ...prev,
//         resume: file,
//       }));
//       setResumeFile(file);

//       // Clear error
//       if (formErrors.resume) {
//         setFormErrors((prev) => ({
//           ...prev,
//           resume: null,
//         }));
//       }

//       // Show success toast
//       toast({
//         title: "Resume uploaded",
//         description: "Your resume has been successfully uploaded",
//         variant: "success",
//       });
//     }
//   };

//   const removeFile = () => {
//     setFormData((prev) => ({
//       ...prev,
//       resume: null,
//     }));
//     setResumeFile(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   const validateStep = (step) => {
//     const errors = {};

//     if (step === 1) {
//       if (!formData.firstName.trim()) errors.firstName = "First name is required";
//       if (!formData.lastName.trim()) errors.lastName = "Last name is required";
//       if (!formData.email.trim()) errors.email = "Email is required";
//       else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
//       if (!formData.phone.trim()) errors.phone = "Phone number is required";
//       if (!formData.city.trim()) errors.city = "City is required";
//       if (!formData.state) errors.state = "State is required";
//       if (!formData.zip.trim()) errors.zip = "ZIP code is required";
//     }

//     if (step === 2) {
//       if (!formData.resume) errors.resume = "Resume is required";
//       if (!formData.experience) errors.experience = "Years of experience is required";
//     }

//     if (step === 3) {
//       if (!formData.whyInterested.trim()) errors.whyInterested = "This field is required";
//       if (!formData.relevantExperience.trim()) errors.relevantExperience = "This field is required";
//       if (!formData.salaryExpectations) errors.salaryExpectations = "Salary expectation is required";
//     }

//     if (step === 4) {
//       if (!formData.heardFrom) errors.heardFrom = "This field is required";
//       if (!formData.terms) errors.terms = "You must agree to the terms";
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const [direction, setDirection] = useState(1);

//   const handleNext = () => {
//     if (!animationComplete) return;

//     if (validateStep(currentStep)) {
//       setAnimationComplete(false);
//       setDirection(1);
//       setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
//       window.scrollTo({ top: 0, behavior: "smooth" });

//       // Play success sound
//       const audio = new Audio("/success.mp3");
//       audio.volume = 0.3;
//       audio.play().catch((e) => console.log("Audio play failed:", e));

//       // Show success toast
//       toast({
//         title: `Step ${currentStep} completed`,
//         description: currentStep < totalSteps ? "Moving to the next step" : "Ready to submit your application",
//         variant: "success",
//       });
//     } else {
//       // Shake animation for error
//       const formElement = document.getElementById("application-form");
//       if (formElement) {
//         formElement.classList.add("shake-animation");
//         setTimeout(() => {
//           formElement.classList.remove("shake-animation");
//         }, 500);
//       }

//       toast({
//         title: "Please fix the errors",
//         description: "Some required fields are missing or invalid",
//         variant: "destructive",
//       });
//     }
//   };

//   const handlePrevious = () => {
//     if (!animationComplete) return;

//     setAnimationComplete(false);
//     setDirection(-1);
//     setCurrentStep((prev) => Math.max(prev - 1, 1));
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateStep(currentStep)) {
//       toast({
//         title: "Please fix the errors",
//         description: "Some required fields are missing or invalid",
//         variant: "destructive",
//       });
//       return;
//     }

//     setIsSubmitting(true);

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 2000));

//     setIsSubmitting(false);
//     setIsSubmitted(true);

//     // Scroll to top of page
//     window.scrollTo({ top: 0, behavior: "smooth" });

//     // Play success sound
//     const audio = new Audio("/success.mp3");
//     audio.volume = 0.5;
//     audio.play().catch((e) => console.log("Audio play failed:", e));
//   };

//   const goToStep = (step) => {
//     if (step < currentStep) {
//       setAnimationComplete(false);
//       setDirection(-1);
//       setCurrentStep(step);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   // Progress indicator animation
//   const progressWidth = ((currentStep - 1) / (totalSteps - 1)) * 100;

//   // Handle animation completion
//   const handleAnimationComplete = () => {
//     setAnimationComplete(true);
//   };

//   // Add shake animation for form errors
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = `
//       .shake-animation {
//         animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
//       }
//       @keyframes shake {
//         10%, 90% { transform: translate3d(-1px, 0, 0); }
//         20%, 80% { transform: translate3d(2px, 0, 0); }
//         30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
//         40%, 60% { transform: translate3d(4px, 0, 0); }
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen bg-gray-50 py-12">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <motion.div
//             initial={{ opacity: 0, y: 50, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{
//               type: "spring",
//               stiffness: 100,
//               damping: 15,
//               duration: 0.8,
//             }}
//             className="bg-white rounded-xl shadow-md overflow-hidden p-8 text-center"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 200,
//                 damping: 20,
//                 delay: 0.3,
//               }}
//               className="flex justify-center mb-6"
//             >
//               <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
//                 <CheckCircle className="h-10 w-10 text-green-600" />
//               </div>
//             </motion.div>

//             <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="text-3xl font-bold text-gray-900 mb-4">
//               Application Submitted!
//             </motion.h1>

//             <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} className="text-lg text-gray-600 mb-8">
//               Thank you for applying to the {job.title} position at Tolbert Garage Door. We've received your application and will review it shortly.
//             </motion.p>

//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }} className="bg-gray-50 p-6 rounded-lg mb-8">
//               <h2 className="text-lg font-semibold mb-2">What happens next?</h2>
//               <ol className="text-left text-gray-700 space-y-2">
//                 <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.5 }} className="flex items-start">
//                   <span className="bg-[#32750a] text-white rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">1</span>
//                   <span>Our hiring team will review your application (typically within 48 hours).</span>
//                 </motion.li>
//                 <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.5 }} className="flex items-start">
//                   <span className="bg-[#32750a] text-white rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">2</span>
//                   <span>If your qualifications match our needs, we'll contact you to schedule an initial assessment.</span>
//                 </motion.li>
//                 <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.5 }} className="flex items-start">
//                   <span className="bg-[#32750a] text-white rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">3</span>
//                   <span>You'll receive an email confirmation with a copy of your application for your records.</span>
//                 </motion.li>
//               </ol>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.5 }} className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
//                 <Button className="bg-[#32750a] hover:bg-[#32750a]/90 w-full" asChild>
//                   <Link href="/careers">Browse More Jobs</Link>
//                 </Button>
//               </motion.div>

//               <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
//                 <Button variant="outline" className="w-full" asChild>
//                   <Link href="/">Return to Homepage</Link>
//                 </Button>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="container mx-auto px-4 max-w-3xl">
//         <Link href={`/careers/${job.slug}`} className="inline-flex items-center text-[#32750a] hover:underline mb-6">
//           <ArrowLeft size={16} className="mr-2" />
//           Back to job details
//         </Link>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//           <Card className="overflow-hidden" id="application-form">
//             <CardHeader className="border-b">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <CardTitle className="text-2xl">Apply for {job.title}</CardTitle>
//                   <CardDescription>Complete the application form below to apply for this position at Tolbert Garage Door.</CardDescription>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-sm text-gray-500 mb-1">Form completion</div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
//                       <motion.div className="h-full bg-[#32750a]" initial={{ width: 0 }} animate={{ width: `${formProgress}%` }} transition={{ duration: 0.5 }} />
//                     </div>
//                     <span className="text-sm font-medium">{formProgress}%</span>
//                   </div>
//                 </div>
//               </div>
//             </CardHeader>

//             <form onSubmit={handleSubmit}>
//               {/* Progress Steps */}
//               <div className="p-6 border-b">
//                 <div className="flex justify-between items-center mb-2">
//                   {Array.from({ length: totalSteps }).map((_, index) => (
//                     <div key={index} className="flex items-center">
//                       <motion.div variants={progressIndicatorVariants} initial="inactive" animate={currentStep > index + 1 ? "completed" : currentStep === index + 1 ? "active" : "inactive"} className={`h-10 w-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${currentStep > index + 1 ? "bg-[#32750a] text-white" : currentStep === index + 1 ? "bg-[#32750a]/20 border-2 border-[#32750a] text-[#32750a]" : "bg-gray-100 text-gray-400"}`} onClick={() => index + 1 < currentStep && goToStep(index + 1)}>
//                         {currentStep > index + 1 ? <CheckCircle className="h-5 w-5" /> : <span>{index + 1}</span>}
//                       </motion.div>
//                       {index < totalSteps - 1 && (
//                         <div className="relative h-1 w-10 sm:w-16 md:w-24 bg-gray-200">
//                           <motion.div className="absolute top-0 left-0 h-full bg-[#32750a]" initial={{ width: index < currentStep - 1 ? "100%" : "0%" }} animate={{ width: index < currentStep - 1 ? "100%" : "0%" }} transition={{ duration: 0.5 }} />
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>

//                 {/* Progress bar */}
//                 <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
//                   <motion.div className="h-full bg-[#32750a] rounded-full" initial={{ width: 0 }} animate={{ width: `${progressWidth}%` }} transition={{ duration: 0.5 }} />
//                 </div>
//               </div>

//               <div className="relative overflow-hidden">
//                 <AnimatePresence mode="wait" custom={direction} onExitComplete={handleAnimationComplete}>
//                   <motion.div key={currentStep} custom={direction} variants={pageVariants} initial="initial" animate="animate" exit="exit" onAnimationComplete={handleAnimationComplete} className="relative">
//                     {currentStep === 1 && (
//                       <div className="space-y-6">
//                         <CardHeader>
//                           <CardTitle>Personal Information</CardTitle>
//                           <CardDescription>Tell us about yourself so we can get to know you better.</CardDescription>
//                         </CardHeader>
//                         <CardContent className="space-y-4">
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div className="space-y-2">
//                               <Label htmlFor="firstName" className={formErrors.firstName ? "text-destructive" : ""}>
//                                 First Name *
//                               </Label>
//                               <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Enter your first name" className={formErrors.firstName ? "border-destructive" : ""} />
//                               {formErrors.firstName && <p className="text-sm text-destructive">{formErrors.firstName}</p>}
//                             </div>
//                             <div className="space-y-2">
//                               <Label htmlFor="lastName" className={formErrors.lastName ? "text-destructive" : ""}>
//                                 Last Name *
//                               </Label>
//                               <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter your last name" className={formErrors.lastName ? "border-destructive" : ""} />
//                               {formErrors.lastName && <p className="text-sm text-destructive">{formErrors.lastName}</p>}
//                             </div>
//                           </div>

//                           <div className="space-y-2">
//                             <Label htmlFor="email" className={formErrors.email ? "text-destructive" : ""}>
//                               Email Address *
//                             </Label>
//                             <Input id="email" name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Enter your email address" className={formErrors.email ? "border-destructive" : ""} />
//                             {formErrors.email && <p className="text-sm text-destructive">{formErrors.email}</p>}
//                           </div>

//                           <div className="space-y-2">
//                             <Label htmlFor="phone" className={formErrors.phone ? "text-destructive" : ""}>
//                               Phone Number *
//                             </Label>
//                             <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="Enter your phone number" className={formErrors.phone ? "border-destructive" : ""} />
//                             {formErrors.phone && <p className="text-sm text-destructive">{formErrors.phone}</p>}
//                           </div>

//                           <div className="space-y-2">
//                             <Label htmlFor="address">Address</Label>
//                             <Input id="address" name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter your street address" />
//                           </div>

//                           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                             <div className="space-y-2">
//                               <Label htmlFor="city" className={formErrors.city ? "text-destructive" : ""}>
//                                 City *
//                               </Label>
//                               <Input id="city" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className={formErrors.city ? "border-destructive" : ""} />
//                               {formErrors.city && <p className="text-sm text-destructive">{formErrors.city}</p>}
//                             </div>
//                             <div className="space-y-2">
//                               <Label htmlFor="state" className={formErrors.state ? "text-destructive" : ""}>
//                                 State *
//                               </Label>
//                               <Popover open={stateOpen} onOpenChange={setStateOpen}>
//                                 <PopoverTrigger asChild>
//                                   <Button variant="outline" role="combobox" aria-expanded={stateOpen} className={cn("w-full justify-between", !formData.state && "text-muted-foreground", formErrors.state && "border-destructive")}>
//                                     {formData.state ? US_STATES.find((state) => state.name === formData.state || state.code === formData.state)?.name || formData.state : "Select state..."}
//                                     <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                                   </Button>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-full p-0">
//                                   <Command>
//                                     <CommandInput placeholder="Search state..." />
//                                     <CommandList>
//                                       <CommandEmpty>No state found.</CommandEmpty>
//                                       <CommandGroup className="max-h-60 overflow-auto">
//                                         {US_STATES.map((state) => (
//                                           <CommandItem
//                                             key={state.code}
//                                             value={state.name}
//                                             onSelect={() => {
//                                               handleSelectChange("state", state.name);
//                                               setStateOpen(false);
//                                             }}
//                                           >
//                                             {state.name} ({state.code})
//                                           </CommandItem>
//                                         ))}
//                                       </CommandGroup>
//                                     </CommandList>
//                                   </Command>
//                                 </PopoverContent>
//                               </Popover>
//                               {formErrors.state && <p className="text-sm text-destructive">{formErrors.state}</p>}
//                             </div>
//                             <div className="space-y-2">
//                               <Label htmlFor="zip" className={formErrors.zip ? "text-destructive" : ""}>
//                                 ZIP Code *
//                               </Label>
//                               <Input id="zip" name="zip" value={formData.zip} onChange={handleInputChange} placeholder="ZIP Code" className={formErrors.zip ? "border-destructive" : ""} />
//                               {formErrors.zip && <p className="text-sm text-destructive">{formErrors.zip}</p>}
//                             </div>
//                           </div>
//                         </CardContent>
//                       </div>
//                     )}

//                     {currentStep === 2 && (
//                       <div className="space-y-6">
//                         <CardHeader>
//                           <CardTitle>Experience & Qualifications</CardTitle>
//                           <CardDescription>Tell us about your work experience and qualifications.</CardDescription>
//                         </CardHeader>
//                         <CardContent className="space-y-4">
//                           <div className="space-y-2">
//                             <Label htmlFor="resume" className={formErrors.resume ? "text-destructive" : ""}>
//                               Resume/CV *
//                             </Label>

//                             {!resumeFile ? (
//                               <div className={`border-2 border-dashed ${isDragging ? "border-[#32750a] bg-[#32750a]/5" : formErrors.resume ? "border-destructive" : "border-gray-300"} rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors`} onClick={() => fileInputRef.current?.click()} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
//                                 <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
//                                 <p className="text-sm text-gray-500 mb-2">Drag and drop your resume here, or click to browse</p>
//                                 <p className="text-xs text-gray-400">Supported formats: PDF, DOCX, DOC (Max 5MB)</p>
//                                 <Input id="resume" name="resume" ref={fileInputRef} type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
//                                 <Button
//                                   variant="outline"
//                                   className="mt-4"
//                                   onClick={(e) => {
//                                     e.stopPropagation();
//                                     fileInputRef.current?.click();
//                                   }}
//                                 >
//                                   Browse Files
//                                 </Button>
//                               </div>
//                             ) : (
//                               <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border rounded-lg p-4 bg-gray-50">
//                                 <div className="flex items-center justify-between">
//                                   <div className="flex items-center">
//                                     <FileText className="h-8 w-8 text-[#32750a] mr-3" />
//                                     <div>
//                                       <p className="font-medium">{resumeFile.name}</p>
//                                       <p className="text-sm text-gray-500">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
//                                     </div>
//                                   </div>
//                                   <Button variant="ghost" size="icon" onClick={removeFile}>
//                                     <X className="h-5 w-5" />
//                                   </Button>
//                                 </div>
//                               </motion.div>
//                             )}

//                             {formErrors.resume && <p className="text-sm text-destructive mt-2">{formErrors.resume}</p>}
//                           </div>

//                           <div className="space-y-2">
//                             <Label htmlFor="experience" className={formErrors.experience ? "text-destructive" : ""}>
//                               Years of Experience *
//                             </Label>
//                             <Select value={formData.experience} onValueChange={(value) => handleSelectChange("experience", value)}>
//                               <SelectTrigger className={formErrors.experience ? "border-destructive" : ""}>
//                                 <SelectValue placeholder="Select years of experience" />
//                               </SelectTrigger>
//                               <SelectContent>
//                                 <SelectItem value="0-1">Less than 1 year</SelectItem>
//                                 <SelectItem value="1-3">1-3 years</SelectItem>
//                                 <SelectItem value="3-5">3-5 years</SelectItem>
//                                 <SelectItem value="5-10">5-10 years</SelectItem>
//                                 <SelectItem value="10+">10+ years</SelectItem>
//                               </SelectContent>
//                             </Select>
//                             {formErrors.experience && <p className="text-sm text-destructive">{formErrors.experience}</p>}
//                           </div>

//                           <div className="space-y-2">
//                             <div className="flex items-center justify-between">
//                               <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
//                               <TooltipProvider>
//                                 <Tooltip>
//                                   <TooltipTrigger asChild>
//                                     <Info className="h-4 w-4 text-gray-400" />
//                                   </TooltipTrigger>
//                                   <TooltipContent>
//                                     <p>Adding your LinkedIn profile helps us learn more about your professional background</p>
//                                   </TooltipContent>
//                                 </Tooltip>
//                               </TooltipProvider>
//                             </div>
//                             <Input id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder="https://linkedin.com/in/yourprofile" />
//                           </div>

//                           <div className="space-y-2">
//                             <Label htmlFor="website">Personal Website/Portfolio (Optional)</Label>
//                             <Input id="website" name="website" value={formData.website} onChange={handleInputChange} placeholder="https://yourwebsite.com" />
//                           </div>

//                           <div className="space-y-2">
//                             <Label htmlFor="certifications">Relevant Certifications (Optional)</Label>
//                             <Textarea id="certifications" name="certifications" value={formData.certifications} onChange={handleInputChange} placeholder="List any relevant certifications or licenses you hold" rows={3} />
//                           </div>
//                         </CardContent>
//                       </div>
//                     )}

//                     {currentStep === 3 && (
//                       <div className="space-y-6">
//                         <CardHeader>
//                           <CardTitle>Job-Specific Questions</CardTitle>
//                           <CardDescription>Please answer these questions specific to the {job.title} position.</CardDescription>
//                         </CardHeader>
//                         <CardContent className="space-y-6">
//                           <div className="space-y-2">
//                             <Label htmlFor="whyInterested" className={formErrors.whyInterested ? "text-destructive" : ""}>
//                               Why are you interested in working at Tolbert Garage Door? *
//                             </Label>
//                             <Textarea id="whyInterested" name="whyInterested" value={formData.whyInterested} onChange={handleInputChange} placeholder="Tell us why you want to join our team" rows={4} className={formErrors.whyInterested ? "border-destructive" : ""} />
//                             {formErrors.whyInterested && <p className="text-sm text-destructive">{formErrors.whyInterested}</p>}
//                           </div>

//                           <div className="space-y-2">
//                             <Label htmlFor="relevantExperience" className={formErrors.relevantExperience ? "text-destructive" : ""}>
//                               Describe your relevant experience for this position. *
//                             </Label>
//                             <Textarea id="relevantExperience" name="relevantExperience" value={formData.relevantExperience} onChange={handleInputChange} placeholder="Share your experience related to this role" rows={4} className={formErrors.relevantExperience ? "border-destructive" : ""} />
//                             {formErrors.relevantExperience && <p className="text-sm text-destructive">{formErrors.relevantExperience}</p>}
//                           </div>

//                           <div className="space-y-3">
//                             <Label>Are you authorized to work in the United States? *</Label>
//                             <RadioGroup value={formData.authorized} onValueChange={(value) => handleSelectChange("authorized", value)}>
//                               <div className="flex items-center space-x-2">
//                                 <RadioGroupItem value="yes" id="authorized-yes" />
//                                 <Label htmlFor="authorized-yes">Yes</Label>
//                               </div>
//                               <div className="flex items-center space-x-2">
//                                 <RadioGroupItem value="no" id="authorized-no" />
//                                 <Label htmlFor="authorized-no">No</Label>
//                               </div>
//                             </RadioGroup>
//                           </div>

//                           <div className="space-y-3">
//                             <Label>When can you start if offered the position? *</Label>
//                             <RadioGroup value={formData.startDate} onValueChange={(value) => handleSelectChange("startDate", value)}>
//                               <div className="flex items-center space-x-2">
//                                 <RadioGroupItem value="immediately" id="start-immediately" />
//                                 <Label htmlFor="start-immediately">Immediately</Label>
//                               </div>
//                               <div className="flex items-center space-x-2">
//                                 <RadioGroupItem value="2-weeks" id="start-2-weeks" />
//                                 <Label htmlFor="start-2-weeks">2 weeks notice</Label>
//                               </div>
//                               <div className="flex items-center space-x-2">
//                                 <RadioGroupItem value="1-month" id="start-1-month" />
//                                 <Label htmlFor="start-1-month">1 month notice</Label>
//                               </div>
//                               <div className="flex items-center space-x-2">
//                                 <RadioGroupItem value="other" id="start-other" />
//                                 <Label htmlFor="start-other">Other (specify in cover letter)</Label>
//                               </div>
//                             </RadioGroup>
//                           </div>

//                           <div className="space-y-3">
//                             <Label className={formErrors.salaryExpectations ? "text-destructive" : ""}>Salary Expectations *</Label>
//                             <Select value={formData.salaryExpectations} onValueChange={(value) => handleSelectChange("salaryExpectations", value)}>
//                               <SelectTrigger className={formErrors.salaryExpectations ? "border-destructive" : ""}>
//                                 <SelectValue placeholder="Select salary range" />
//                               </SelectTrigger>
//                               <SelectContent>
//                                 <SelectItem value="30-40k">$30,000 - $40,000</SelectItem>
//                                 <SelectItem value="40-50k">$40,000 - $50,000</SelectItem>
//                                 <SelectItem value="50-60k">$50,000 - $60,000</SelectItem>
//                                 <SelectItem value="60-70k">$60,000 - $70,000</SelectItem>
//                                 <SelectItem value="70-80k">$70,000 - $80,000</SelectItem>
//                                 <SelectItem value="80k+">$80,000+</SelectItem>
//                               </SelectContent>
//                             </Select>
//                             {formErrors.salaryExpectations && <p className="text-sm text-destructive">{formErrors.salaryExpectations}</p>}
//                           </div>
//                         </CardContent>
//                       </div>
//                     )}

//                     {currentStep === 4 && (
//                       <div className="space-y-6">
//                         <CardHeader>
//                           <CardTitle>Additional Information & Review</CardTitle>
//                           <CardDescription>Please provide any additional information and review your application.</CardDescription>
//                         </CardHeader>
//                         <CardContent className="space-y-6">
//                           <div className="space-y-2">
//                             <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
//                             <Textarea id="coverLetter" name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} placeholder="Add a cover letter or any additional information you'd like to share" rows={6} />
//                           </div>

//                           <div className="space-y-2">
//                             <Label className={formErrors.heardFrom ? "text-destructive" : ""}>How did you hear about us? *</Label>
//                             <Select value={formData.heardFrom} onValueChange={(value) => handleSelectChange("heardFrom", value)}>
//                               <SelectTrigger className={formErrors.heardFrom ? "border-destructive" : ""}>
//                                 <SelectValue placeholder="Select an option" />
//                               </SelectTrigger>
//                               <SelectContent>
//                                 <SelectItem value="job-board">Job Board</SelectItem>
//                                 <SelectItem value="company-website">Company Website</SelectItem>
//                                 <SelectItem value="social-media">Social Media</SelectItem>
//                                 <SelectItem value="employee-referral">Employee Referral</SelectItem>
//                                 <SelectItem value="search-engine">Search Engine</SelectItem>
//                                 <SelectItem value="other">Other</SelectItem>
//                               </SelectContent>
//                             </Select>
//                             {formErrors.heardFrom && <p className="text-sm text-destructive">{formErrors.heardFrom}</p>}
//                           </div>

//                           <div className="space-y-4 pt-4">
//                             <div className="flex items-start space-x-2">
//                               <Checkbox id="terms" className={`mt-1 ${formErrors.terms ? "border-destructive" : ""}`} checked={formData.terms} onCheckedChange={(checked) => handleSelectChange("terms", checked)} />
//                               <Label htmlFor="terms" className={`text-sm ${formErrors.terms ? "text-destructive" : ""}`}>
//                                 I certify that all information provided in this application is true and complete to the best of my knowledge. I understand that any false information or omission may disqualify me from further consideration for employment and may result in my dismissal if discovered at a later date. *
//                               </Label>
//                             </div>
//                             {formErrors.terms && <p className="text-sm text-destructive ml-7">{formErrors.terms}</p>}

//                             <div className="flex items-start space-x-2">
//                               <Checkbox id="contactPermission" className="mt-1" checked={formData.contactPermission} onCheckedChange={(checked) => handleSelectChange("contactPermission", checked)} />
//                               <Label htmlFor="contactPermission" className="text-sm">
//                                 I authorize Tolbert Garage Door to contact me via email, phone, or text message regarding my application.
//                               </Label>
//                             </div>

//                             <div className="flex items-start space-x-2">
//                               <Checkbox id="futurePositions" className="mt-1" checked={formData.futurePositions} onCheckedChange={(checked) => handleSelectChange("futurePositions", checked)} />
//                               <Label htmlFor="futurePositions" className="text-sm">
//                                 I would like to be considered for future positions if this one is filled.
//                               </Label>
//                             </div>
//                           </div>
//                         </CardContent>
//                       </div>
//                     )}
//                   </motion.div>
//                 </AnimatePresence>
//               </div>

//               <CardFooter className="flex justify-between border-t p-6">
//                 <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
//                   <Button type="button" variant="outline" onClick={handlePrevious} disabled={currentStep === 1 || !animationComplete} className="flex items-center">
//                     <ArrowLeft className="mr-2 h-4 w-4" />
//                     Previous
//                   </Button>
//                 </motion.div>

//                 {currentStep < totalSteps ? (
//                   <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
//                     <Button type="button" className="bg-[#32750a] hover:bg-[#32750a]/90 flex items-center" onClick={handleNext} disabled={!animationComplete}>
//                       Next
//                       <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
//                     </Button>
//                   </motion.div>
//                 ) : (
//                   <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
//                     <Button type="submit" className="bg-[#32750a] hover:bg-[#32750a]/90" disabled={isSubmitting || !animationComplete}>
//                       {isSubmitting ? (
//                         <>
//                           <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                           Submitting...
//                         </>
//                       ) : (
//                         "Submit Application"
//                       )}
//                     </Button>
//                   </motion.div>
//                 )}
//               </CardFooter>
//             </form>
//           </Card>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { cn, formatPhoneNumber, isValidEmail, isValidUSPhoneNumber } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, CheckCircle, FileText, Info, Loader2, Search, Upload, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// US States with abbreviations
const US_STATES = [
  { name: "Alabama", code: "AL" },
  { name: "Alaska", code: "AK" },
  { name: "Arizona", code: "AZ" },
  { name: "Arkansas", code: "AR" },
  { name: "California", code: "CA" },
  { name: "Colorado", code: "CO" },
  { name: "Connecticut", code: "CT" },
  { name: "Delaware", code: "DE" },
  { name: "Florida", code: "FL" },
  { name: "Georgia", code: "GA" },
  { name: "Hawaii", code: "HI" },
  { name: "Idaho", code: "ID" },
  { name: "Illinois", code: "IL" },
  { name: "Indiana", code: "IN" },
  { name: "Iowa", code: "IA" },
  { name: "Kansas", code: "KS" },
  { name: "Kentucky", code: "KY" },
  { name: "Louisiana", code: "LA" },
  { name: "Maine", code: "ME" },
  { name: "Maryland", code: "MD" },
  { name: "Massachusetts", code: "MA" },
  { name: "Michigan", code: "MI" },
  { name: "Minnesota", code: "MN" },
  { name: "Mississippi", code: "MS" },
  { name: "Missouri", code: "MO" },
  { name: "Montana", code: "MT" },
  { name: "Nebraska", code: "NE" },
  { name: "Nevada", code: "NV" },
  { name: "New Hampshire", code: "NH" },
  { name: "New Jersey", code: "NJ" },
  { name: "New Mexico", code: "NM" },
  { name: "New York", code: "NY" },
  { name: "North Carolina", code: "NC" },
  { name: "North Dakota", code: "ND" },
  { name: "Ohio", code: "OH" },
  { name: "Oklahoma", code: "OK" },
  { name: "Oregon", code: "OR" },
  { name: "Pennsylvania", code: "PA" },
  { name: "Rhode Island", code: "RI" },
  { name: "South Carolina", code: "SC" },
  { name: "South Dakota", code: "SD" },
  { name: "Tennessee", code: "TN" },
  { name: "Texas", code: "TX" },
  { name: "Utah", code: "UT" },
  { name: "Vermont", code: "VT" },
  { name: "Virginia", code: "VA" },
  { name: "Washington", code: "WA" },
  { name: "West Virginia", code: "WV" },
  { name: "Wisconsin", code: "WI" },
  { name: "Wyoming", code: "WY" },
];

export default function JobApplicationForm({ job }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    resume: null,
    experience: "",
    linkedin: "",
    website: "",
    certifications: "",
    whyInterested: "",
    relevantExperience: "",
    authorized: "yes",
    startDate: "immediately",
    salaryExpectations: "",
    coverLetter: "",
    heardFrom: "",
    terms: false,
    contactPermission: false,
    futurePositions: false,
  });
  const [phoneValue, setPhoneValue] = useState(formData.phone || "");
  const [emailValue, setEmailValue] = useState(formData.email || "");
  const [formErrors, setFormErrors] = useState({});
  const [resumeFile, setResumeFile] = useState(null);
  const fileInputRef = useRef(null);
  const { toast } = useToast();
  const [stateOpen, setStateOpen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(true);
  const [formProgress, setFormProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const totalSteps = 4;

  // Enhanced animation variants for a quiz-like feel
  const pageVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? "100%" : "-100%",
      scale: 0.9,
      rotateY: direction > 0 ? 10 : -10,
      filter: "blur(10px)",
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
        rotateY: { duration: 0.4 },
        filter: { duration: 0.3 },
      },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction < 0 ? "100%" : "-100%",
      scale: 0.9,
      rotateY: direction < 0 ? 10 : -10,
      filter: "blur(10px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
        rotateY: { duration: 0.3 },
        filter: { duration: 0.2 },
      },
    }),
  };

  // Button animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  // Progress indicator animation
  const progressIndicatorVariants = {
    inactive: { scale: 1, backgroundColor: "rgb(243, 244, 246)" },
    active: {
      scale: [1, 1.2, 1],
      backgroundColor: "rgb(50, 117, 10, 0.2)",
      transition: { duration: 0.5 },
    },
    completed: {
      scale: [1, 1.2, 1],
      backgroundColor: "rgb(50, 117, 10)",
      transition: { duration: 0.5 },
    },
  };

  // Calculate form completion percentage
  useEffect(() => {
    const calculateProgress = () => {
      const totalFields = Object.keys(formData).length;
      const filledFields = Object.entries(formData).filter(([key, value]) => {
        if (typeof value === "boolean") return value === true;
        if (value === null) return false;
        return value !== "";
      }).length;

      return Math.round((filledFields / totalFields) * 100);
    };

    setFormProgress(calculateProgress());
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Special handling for phone number
    if (name === "phone") {
      // Get only digits from the input
      const digits = value.replace(/\D/g, "");

      // Format the phone number
      const formattedPhone = formatPhoneNumber(digits);

      // Update the state
      setPhoneValue(formattedPhone);

      // Update form data with the formatted phone
      setFormData((prev) => ({
        ...prev,
        [name]: formattedPhone,
      }));

      // Clear error when user types
      if (formErrors[name]) {
        setFormErrors((prev) => ({
          ...prev,
          [name]: null,
        }));
      }
      return;
    }

    // Special handling for email
    if (name === "email") {
      setEmailValue(value);
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear error when user types
      if (formErrors[name]) {
        setFormErrors((prev) => ({
          ...prev,
          [name]: null,
        }));
      }
      return;
    }

    // Default handling for other fields
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user selects
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      const fileType = file.type;
      const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

      if (!validTypes.includes(fileType)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document",
          variant: "destructive",
        });
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }

      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
      setResumeFile(file);

      // Clear error
      if (formErrors.resume) {
        setFormErrors((prev) => ({
          ...prev,
          resume: null,
        }));
      }

      // Show success toast
      toast({
        title: "Resume uploaded",
        description: "Your resume has been successfully uploaded",
        variant: "success",
      });
    }
  };

  // Handle drag and drop for resume
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      // Check file type
      const fileType = file.type;
      const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

      if (!validTypes.includes(fileType)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document",
          variant: "destructive",
        });
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }

      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
      setResumeFile(file);

      // Clear error
      if (formErrors.resume) {
        setFormErrors((prev) => ({
          ...prev,
          resume: null,
        }));
      }

      // Show success toast
      toast({
        title: "Resume uploaded",
        description: "Your resume has been successfully uploaded",
        variant: "success",
      });
    }
  };

  const removeFile = () => {
    setFormData((prev) => ({
      ...prev,
      resume: null,
    }));
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateStep = (step) => {
    const errors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) errors.firstName = "First name is required";
      if (!formData.lastName.trim()) errors.lastName = "Last name is required";

      // Enhanced email validation
      if (!emailValue.trim()) {
        errors.email = "Email is required";
      } else if (!isValidEmail(emailValue)) {
        errors.email = "Please enter a valid email address";
      }

      // Enhanced phone validation
      if (!phoneValue.trim()) {
        errors.phone = "Phone number is required";
      } else if (!isValidUSPhoneNumber(phoneValue)) {
        errors.phone = "Please enter a valid US phone number (10 digits)";
      }

      if (!formData.city.trim()) errors.city = "City is required";
      if (!formData.state) errors.state = "State is required";
      if (!formData.zip.trim()) errors.zip = "ZIP code is required";
    }

    if (step === 2) {
      if (!formData.resume) errors.resume = "Resume is required";
      if (!formData.experience) errors.experience = "Years of experience is required";
    }

    if (step === 3) {
      if (!formData.whyInterested.trim()) errors.whyInterested = "This field is required";
      if (!formData.relevantExperience.trim()) errors.relevantExperience = "This field is required";
      if (!formData.salaryExpectations) errors.salaryExpectations = "Salary expectation is required";
    }

    if (step === 4) {
      if (!formData.heardFrom) errors.heardFrom = "This field is required";
      if (!formData.terms) errors.terms = "You must agree to the terms";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    if (!animationComplete) return;

    if (validateStep(currentStep)) {
      setAnimationComplete(false);
      setDirection(1);
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Play success sound
      const audio = new Audio("/success.mp3");
      audio.volume = 0.3;
      audio.play().catch((e) => console.log("Audio play failed:", e));

      // Show success toast
      toast({
        title: `Step ${currentStep} completed`,
        description: currentStep < totalSteps ? "Moving to the next step" : "Ready to submit your application",
        variant: "success",
      });
    } else {
      // Shake animation for error
      const formElement = document.getElementById("application-form");
      if (formElement) {
        formElement.classList.add("shake-animation");
        setTimeout(() => {
          formElement.classList.remove("shake-animation");
        }, 500);
      }

      toast({
        title: "Please fix the errors",
        description: "Some required fields are missing or invalid",
        variant: "destructive",
      });
    }
  };

  const handlePrevious = () => {
    if (!animationComplete) return;

    setAnimationComplete(false);
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(currentStep)) {
      toast({
        title: "Please fix the errors",
        description: "Some required fields are missing or invalid",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Play success sound
    const audio = new Audio("/success.mp3");
    audio.volume = 0.5;
    audio.play().catch((e) => console.log("Audio play failed:", e));
  };

  const goToStep = (step) => {
    if (step < currentStep) {
      setAnimationComplete(false);
      setDirection(-1);
      setCurrentStep(step);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Progress indicator animation
  const progressWidth = ((currentStep - 1) / (totalSteps - 1)) * 100;

  // Handle animation completion
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  // Add shake animation for form errors
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .shake-animation {
        animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
      }
      @keyframes shake {
        10%, 90% { transform: translate3d(-1px, 0, 0); }
        20%, 80% { transform: translate3d(2px, 0, 0); }
        30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
        40%, 60% { transform: translate3d(4px, 0, 0); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.8,
            }}
            className="bg-white rounded-xl shadow-md overflow-hidden p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.3,
              }}
              className="flex justify-center mb-6"
            >
              <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="text-3xl font-bold text-gray-900 mb-4">
              Application Submitted!
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} className="text-lg text-gray-600 mb-8">
              Thank you for applying to the {job.title} position at Tolbert Garage Door. We've received your application and will review it shortly.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }} className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-lg font-semibold mb-2">What happens next?</h2>
              <ol className="text-left text-gray-700 space-y-2">
                <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.5 }} className="flex items-start">
                  <span className="bg-[#32750a] text-white rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span>Our hiring team will review your application (typically within 48 hours).</span>
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.5 }} className="flex items-start">
                  <span className="bg-[#32750a] text-white rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span>If your qualifications match our needs, we'll contact you to schedule an initial assessment.</span>
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.5 }} className="flex items-start">
                  <span className="bg-[#32750a] text-white rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span>You'll receive an email confirmation with a copy of your application for your records.</span>
                </motion.li>
              </ol>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.5 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                <Button className="bg-[#32750a] hover:bg-[#32750a]/90 w-full" asChild>
                  <Link href="/careers">Browse More Jobs</Link>
                </Button>
              </motion.div>

              <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/">Return to Homepage</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href={`/careers/${job.slug}`} className="inline-flex items-center text-[#32750a] hover:underline mb-6">
          <ArrowLeft size={16} className="mr-2" />
          Back to job details
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="overflow-hidden" id="application-form">
            <CardHeader className="border-b">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-2xl">Apply for {job.title}</CardTitle>
                  <CardDescription>Complete the application form below to apply for this position at Tolbert Garage Door.</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">Form completion</div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#32750a]" initial={{ width: 0 }} animate={{ width: `${formProgress}%` }} transition={{ duration: 0.5 }} />
                    </div>
                    <span className="text-sm font-medium">{formProgress}%</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <form onSubmit={handleSubmit}>
              {/* Progress Steps */}
              <div className="p-6 border-b">
                <div className="flex justify-between items-center mb-2">
                  {Array.from({ length: totalSteps }).map((_, index) => (
                    <div key={index} className="flex items-center">
                      <motion.div variants={progressIndicatorVariants} initial="inactive" animate={currentStep > index + 1 ? "completed" : currentStep === index + 1 ? "active" : "inactive"} className={`h-10 w-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${currentStep > index + 1 ? "bg-[#32750a] text-white" : currentStep === index + 1 ? "bg-[#32750a]/20 border-2 border-[#32750a] text-[#32750a]" : "bg-gray-100 text-gray-400"}`} onClick={() => index + 1 < currentStep && goToStep(index + 1)}>
                        {currentStep > index + 1 ? <CheckCircle className="h-5 w-5" /> : <span>{index + 1}</span>}
                      </motion.div>
                      {index < totalSteps - 1 && (
                        <div className="relative h-1 w-10 sm:w-16 md:w-24 bg-gray-200">
                          <motion.div className="absolute top-0 left-0 h-full bg-[#32750a]" initial={{ width: index < currentStep - 1 ? "100%" : "0%" }} animate={{ width: index < currentStep - 1 ? "100%" : "0%" }} transition={{ duration: 0.5 }} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                  <motion.div className="h-full bg-[#32750a] rounded-full" initial={{ width: 0 }} animate={{ width: `${progressWidth}%` }} transition={{ duration: 0.5 }} />
                </div>
              </div>

              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait" custom={direction} onExitComplete={handleAnimationComplete}>
                  <motion.div key={currentStep} custom={direction} variants={pageVariants} initial="initial" animate="animate" exit="exit" onAnimationComplete={handleAnimationComplete} className="relative">
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <CardHeader>
                          <CardTitle>Personal Information</CardTitle>
                          <CardDescription>Tell us about yourself so we can get to know you better.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName" className={formErrors.firstName ? "text-destructive" : ""}>
                                First Name *
                              </Label>
                              <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Enter your first name" className={formErrors.firstName ? "border-destructive" : ""} />
                              {formErrors.firstName && <p className="text-sm text-destructive">{formErrors.firstName}</p>}
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName" className={formErrors.lastName ? "text-destructive" : ""}>
                                Last Name *
                              </Label>
                              <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter your last name" className={formErrors.lastName ? "border-destructive" : ""} />
                              {formErrors.lastName && <p className="text-sm text-destructive">{formErrors.lastName}</p>}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email" className={formErrors.email ? "text-destructive" : ""}>
                              Email Address *
                            </Label>
                            <Input id="email" name="email" value={emailValue} onChange={handleInputChange} type="email" placeholder="Enter your email address" className={formErrors.email ? "border-destructive" : ""} />
                            {formErrors.email && <p className="text-sm text-destructive">{formErrors.email}</p>}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone" className={formErrors.phone ? "text-destructive" : ""}>
                              Phone Number *
                            </Label>
                            <Input id="phone" name="phone" value={phoneValue} onChange={handleInputChange} type="tel" placeholder="Enter your phone number" className={formErrors.phone ? "border-destructive" : ""} />
                            {formErrors.phone && <p className="text-sm text-destructive">{formErrors.phone}</p>}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter your street address" />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="city" className={formErrors.city ? "text-destructive" : ""}>
                                City *
                              </Label>
                              <Input id="city" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className={formErrors.city ? "border-destructive" : ""} />
                              {formErrors.city && <p className="text-sm text-destructive">{formErrors.city}</p>}
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="state" className={formErrors.state ? "text-destructive" : ""}>
                                State *
                              </Label>
                              <Popover open={stateOpen} onOpenChange={setStateOpen}>
                                <PopoverTrigger asChild>
                                  <Button variant="outline" role="combobox" aria-expanded={stateOpen} className={cn("w-full justify-between", !formData.state && "text-muted-foreground", formErrors.state && "border-destructive")}>
                                    {formData.state ? US_STATES.find((state) => state.name === formData.state || state.code === formData.state)?.name || formData.state : "Select state..."}
                                    <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                  <Command>
                                    <CommandInput placeholder="Search state..." />
                                    <CommandList>
                                      <CommandEmpty>No state found.</CommandEmpty>
                                      <CommandGroup className="max-h-60 overflow-auto">
                                        {US_STATES.map((state) => (
                                          <CommandItem
                                            key={state.code}
                                            value={state.name}
                                            onSelect={() => {
                                              handleSelectChange("state", state.name);
                                              setStateOpen(false);
                                            }}
                                          >
                                            {state.name} ({state.code})
                                          </CommandItem>
                                        ))}
                                      </CommandGroup>
                                    </CommandList>
                                  </Command>
                                </PopoverContent>
                              </Popover>
                              {formErrors.state && <p className="text-sm text-destructive">{formErrors.state}</p>}
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="zip" className={formErrors.zip ? "text-destructive" : ""}>
                                ZIP Code *
                              </Label>
                              <Input id="zip" name="zip" value={formData.zip} onChange={handleInputChange} placeholder="ZIP Code" className={formErrors.zip ? "border-destructive" : ""} />
                              {formErrors.zip && <p className="text-sm text-destructive">{formErrors.zip}</p>}
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <CardHeader>
                          <CardTitle>Experience & Qualifications</CardTitle>
                          <CardDescription>Tell us about your work experience and qualifications.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="resume" className={formErrors.resume ? "text-destructive" : ""}>
                              Resume/CV *
                            </Label>

                            {!resumeFile ? (
                              <div className={`border-2 border-dashed ${isDragging ? "border-[#32750a] bg-[#32750a]/5" : formErrors.resume ? "border-destructive" : "border-gray-300"} rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors`} onClick={() => fileInputRef.current?.click()} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                                <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                                <p className="text-sm text-gray-500 mb-2">Drag and drop your resume here, or click to browse</p>
                                <p className="text-xs text-gray-400">Supported formats: PDF, DOCX, DOC (Max 5MB)</p>
                                <Input id="resume" name="resume" ref={fileInputRef} type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                                <Button
                                  variant="outline"
                                  className="mt-4"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    fileInputRef.current?.click();
                                  }}
                                >
                                  Browse Files
                                </Button>
                              </div>
                            ) : (
                              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border rounded-lg p-4 bg-gray-50">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <FileText className="h-8 w-8 text-[#32750a] mr-3" />
                                    <div>
                                      <p className="font-medium">{resumeFile.name}</p>
                                      <p className="text-sm text-gray-500">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
                                    </div>
                                  </div>
                                  <Button variant="ghost" size="icon" onClick={removeFile}>
                                    <X className="h-5 w-5" />
                                  </Button>
                                </div>
                              </motion.div>
                            )}

                            {formErrors.resume && <p className="text-sm text-destructive mt-2">{formErrors.resume}</p>}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="experience" className={formErrors.experience ? "text-destructive" : ""}>
                              Years of Experience *
                            </Label>
                            <Select value={formData.experience} onValueChange={(value) => handleSelectChange("experience", value)}>
                              <SelectTrigger className={formErrors.experience ? "border-destructive" : ""}>
                                <SelectValue placeholder="Select years of experience" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="0-1">Less than 1 year</SelectItem>
                                <SelectItem value="1-3">1-3 years</SelectItem>
                                <SelectItem value="3-5">3-5 years</SelectItem>
                                <SelectItem value="5-10">5-10 years</SelectItem>
                                <SelectItem value="10+">10+ years</SelectItem>
                              </SelectContent>
                            </Select>
                            {formErrors.experience && <p className="text-sm text-destructive">{formErrors.experience}</p>}
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 text-gray-400" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Adding your LinkedIn profile helps us learn more about your professional background</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <Input id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder="https://linkedin.com/in/yourprofile" />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="website">Personal Website/Portfolio (Optional)</Label>
                            <Input id="website" name="website" value={formData.website} onChange={handleInputChange} placeholder="https://yourwebsite.com" />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="certifications">Relevant Certifications (Optional)</Label>
                            <Textarea id="certifications" name="certifications" value={formData.certifications} onChange={handleInputChange} placeholder="List any relevant certifications or licenses you hold" rows={3} />
                          </div>
                        </CardContent>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <CardHeader>
                          <CardTitle>Job-Specific Questions</CardTitle>
                          <CardDescription>Please answer these questions specific to the {job.title} position.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor="whyInterested" className={formErrors.whyInterested ? "text-destructive" : ""}>
                              Why are you interested in working at Tolbert Garage Door? *
                            </Label>
                            <Textarea id="whyInterested" name="whyInterested" value={formData.whyInterested} onChange={handleInputChange} placeholder="Tell us why you want to join our team" rows={4} className={formErrors.whyInterested ? "border-destructive" : ""} />
                            {formErrors.whyInterested && <p className="text-sm text-destructive">{formErrors.whyInterested}</p>}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="relevantExperience" className={formErrors.relevantExperience ? "text-destructive" : ""}>
                              Describe your relevant experience for this position. *
                            </Label>
                            <Textarea id="relevantExperience" name="relevantExperience" value={formData.relevantExperience} onChange={handleInputChange} placeholder="Share your experience related to this role" rows={4} className={formErrors.relevantExperience ? "border-destructive" : ""} />
                            {formErrors.relevantExperience && <p className="text-sm text-destructive">{formErrors.relevantExperience}</p>}
                          </div>

                          <div className="space-y-3">
                            <Label>Are you authorized to work in the United States? *</Label>
                            <RadioGroup value={formData.authorized} onValueChange={(value) => handleSelectChange("authorized", value)}>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="authorized-yes" />
                                <Label htmlFor="authorized-yes">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="authorized-no" />
                                <Label htmlFor="authorized-no">No</Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="space-y-3">
                            <Label>When can you start if offered the position? *</Label>
                            <RadioGroup value={formData.startDate} onValueChange={(value) => handleSelectChange("startDate", value)}>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="immediately" id="start-immediately" />
                                <Label htmlFor="start-immediately">Immediately</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="2-weeks" id="start-2-weeks" />
                                <Label htmlFor="start-2-weeks">2 weeks notice</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="1-month" id="start-1-month" />
                                <Label htmlFor="start-1-month">1 month notice</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="other" id="start-other" />
                                <Label htmlFor="start-other">Other (specify in cover letter)</Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="space-y-3">
                            <Label className={formErrors.salaryExpectations ? "text-destructive" : ""}>Salary Expectations *</Label>
                            <Select value={formData.salaryExpectations} onValueChange={(value) => handleSelectChange("salaryExpectations", value)}>
                              <SelectTrigger className={formErrors.salaryExpectations ? "border-destructive" : ""}>
                                <SelectValue placeholder="Select salary range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="30-40k">$30,000 - $40,000</SelectItem>
                                <SelectItem value="40-50k">$40,000 - $50,000</SelectItem>
                                <SelectItem value="50-60k">$50,000 - $60,000</SelectItem>
                                <SelectItem value="60-70k">$60,000 - $70,000</SelectItem>
                                <SelectItem value="70-80k">$70,000 - $80,000</SelectItem>
                                <SelectItem value="80k+">$80,000+</SelectItem>
                              </SelectContent>
                            </Select>
                            {formErrors.salaryExpectations && <p className="text-sm text-destructive">{formErrors.salaryExpectations}</p>}
                          </div>
                        </CardContent>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <CardHeader>
                          <CardTitle>Additional Information & Review</CardTitle>
                          <CardDescription>Please provide any additional information and review your application.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                            <Textarea id="coverLetter" name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} placeholder="Add a cover letter or any additional information you'd like to share" rows={6} />
                          </div>

                          <div className="space-y-2">
                            <Label className={formErrors.heardFrom ? "text-destructive" : ""}>How did you hear about us? *</Label>
                            <Select value={formData.heardFrom} onValueChange={(value) => handleSelectChange("heardFrom", value)}>
                              <SelectTrigger className={formErrors.heardFrom ? "border-destructive" : ""}>
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="job-board">Job Board</SelectItem>
                                <SelectItem value="company-website">Company Website</SelectItem>
                                <SelectItem value="social-media">Social Media</SelectItem>
                                <SelectItem value="employee-referral">Employee Referral</SelectItem>
                                <SelectItem value="search-engine">Search Engine</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            {formErrors.heardFrom && <p className="text-sm text-destructive">{formErrors.heardFrom}</p>}
                          </div>

                          <div className="space-y-4 pt-4">
                            <div className="flex items-start space-x-2">
                              <Checkbox id="terms" className={`mt-1 ${formErrors.terms ? "border-destructive" : ""}`} checked={formData.terms} onCheckedChange={(checked) => handleSelectChange("terms", checked)} />
                              <Label htmlFor="terms" className={`text-sm ${formErrors.terms ? "text-destructive" : ""}`}>
                                I certify that all information provided in this application is true and complete to the best of my knowledge. I understand that any false information or omission may disqualify me from further consideration for employment and may result in my dismissal if discovered at a later date. *
                              </Label>
                            </div>
                            {formErrors.terms && <p className="text-sm text-destructive ml-7">{formErrors.terms}</p>}

                            <div className="flex items-start space-x-2">
                              <Checkbox id="contactPermission" className="mt-1" checked={formData.contactPermission} onCheckedChange={(checked) => handleSelectChange("contactPermission", checked)} />
                              <Label htmlFor="contactPermission" className="text-sm">
                                I authorize Tolbert Garage Door to contact me via email, phone, or text message regarding my application.
                              </Label>
                            </div>

                            <div className="flex items-start space-x-2">
                              <Checkbox id="futurePositions" className="mt-1" checked={formData.futurePositions} onCheckedChange={(checked) => handleSelectChange("futurePositions", checked)} />
                              <Label htmlFor="futurePositions" className="text-sm">
                                I would like to be considered for future positions if this one is filled.
                              </Label>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <CardFooter className="flex justify-between border-t p-6">
                <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                  <Button type="button" variant="outline" onClick={handlePrevious} disabled={currentStep === 1 || !animationComplete} className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                </motion.div>

                {currentStep < totalSteps ? (
                  <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                    <Button type="button" className="bg-[#32750a] hover:bg-[#32750a]/90 flex items-center" onClick={handleNext} disabled={!animationComplete}>
                      Next
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                    <Button type="submit" className="bg-[#32750a] hover:bg-[#32750a]/90" disabled={isSubmitting || !animationComplete}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  </motion.div>
                )}
              </CardFooter>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
