import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function simulateServerRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    console.log("Sending data to server:", data);
    setTimeout(() => {
      console.log("Server response received!");
      resolve(data);
    }, delay);
  });
}

export function formatPhoneNumber(digits) {
  // Limit to 10 digits
  const limitedDigits = digits.slice(0, 10);

  // Format based on the number of digits
  if (limitedDigits.length < 4) {
    return limitedDigits;
  } else if (limitedDigits.length < 7) {
    return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`;
  } else {
    return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
  }
}

export function isValidUSPhoneNumber(phone) {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, "");

  // US phone numbers should be exactly 10 digits
  return digits.length === 10;
}

/**
 * Validates if a string is a valid email address using strict validation
 * @param email The email string to validate
 * @returns Boolean indicating if the email is valid
 */
export function isValidEmail(email) {
  // This regex enforces:
  // - A username part with allowed characters
  // - An @ symbol
  // - A domain name with at least one period
  // - A top-level domain with 2-6 characters
  // - No leading or trailing whitespace
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test if the email matches the regex pattern
  return emailRegex.test(email.trim());
}
