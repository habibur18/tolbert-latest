"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatPhoneNumber } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function GDRFormStep1({ formData, errors, handleChange, handleBlur }) {
  // Local state for phone input
  const [phoneInput, setPhoneInput] = useState("");

  // Initialize phone input from formData
  useEffect(() => {
    if (formData.phone) {
      setPhoneInput(formatPhoneNumber(formData.phone));
    } else {
      setPhoneInput("");
    }
  }, [formData.phone]);

  // Handle phone input changes
  const handlePhoneChange = (e) => {
    const input = e.target.value;

    // Extract only digits
    const digits = input.replace(/\D/g, "");

    // Limit to 10 digits
    const limitedDigits = digits.slice(0, 10);

    // Format for display
    const formattedValue = formatPhoneNumber(limitedDigits);

    // Update local state with formatted value
    setPhoneInput(formattedValue);

    // Update parent state with raw digits
    if (limitedDigits !== formData.phone) {
      handleChange({
        target: {
          name: "phone",
          value: limitedDigits,
        },
      });
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-primary">Tell us about yourself</h3>
      <div className="space-y-3">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" name="fullName" placeholder="John Smith" required value={formData.fullName} onChange={handleChange} onBlur={handleBlur} className={`mt-1 ${errors.fullName ? "border-red-500" : ""}`} />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange} onBlur={handleBlur} className={`mt-1 ${errors.email ? "border-red-500" : ""}`} />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="(214) 555-1234"
            required
            value={phoneInput}
            onChange={handlePhoneChange}
            onBlur={handleBlur}
            className={`mt-1 ${errors.phone ? "border-red-500" : ""}`}
            maxLength={14} // (XXX) XXX-XXXX = 14 characters
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>
    </div>
  );
}
