"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function GDRFormStep2({ formData, errors, handleChange, handleBlur }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-primary">Property Information</h3>
      <div className="space-y-3">
        <div>
          <Label htmlFor="zipCode">ZIP Code</Label>
          <Input id="zipCode" name="zipCode" placeholder="75201" required value={formData.zipCode} onChange={handleChange} onBlur={handleBlur} className={`mt-1 ${errors.zipCode ? "border-red-500" : ""}`} />
          {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
        </div>

        <div>
          <Label htmlFor="doorWidth">Approximate Door Width (feet)</Label>
          <select id="doorWidth" name="doorWidth" value={formData.doorWidth} onChange={handleChange} onBlur={handleBlur} className={`w-full rounded-md border ${errors.doorWidth ? "border-red-500" : "border-input"} bg-background px-3 py-2 mt-1`} required>
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
  );
}
