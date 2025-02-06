"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTransition } from "react";

export function HeroContactForm() {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      // action={(formData) => {
      //   startTransition(() => submitForm(formData))
      // }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-2xl">
        <Input name="firstName" placeholder="First Name" required className="bg-white/90 rounded-sm h-12 !text-lg" />
        <Input name="lastName" placeholder="Last Name" required className="bg-white/90 rounded-sm h-12 !text-lg" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="phone" type="tel" placeholder="Phone Number" required className="bg-white/90 rounded-sm h-12 !text-lg" />
        <Input name="email" type="email" placeholder="Email" required className="bg-white/90 rounded-sm h-12 !text-lg" />
      </div>
      <Textarea name="message" placeholder="Message" required className="min-h-[120px] bg-white/90 rounded-sm !text-lg" />
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-600/80 text-xl  h-12 " disabled={isPending}>
        {isPending ? "Sending..." : "Send"}
      </Button>
    </form>
  );
}
