"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function GDRFormStep3({ formData, errors, handleChange, handleBlur }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-primary">Your Preferences</h3>
      <div className="space-y-3">
        <div>
          <Label htmlFor="doorType">Preferred Door Type</Label>
          <select id="doorType" name="doorType" value={formData.doorType} onChange={handleChange} onBlur={handleBlur} className={`w-full rounded-md border ${errors.doorType ? "border-red-500" : "border-input"} bg-background px-3 py-2 mt-1`} required>
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
  );
}
