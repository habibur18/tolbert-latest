import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-[#32750a]">404</h1>
      <h2 className="text-2xl font-semibold mt-4 mb-6">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Button asChild>
        <Link href="/careers">Return to Careers</Link>
      </Button>
    </div>
  );
}
