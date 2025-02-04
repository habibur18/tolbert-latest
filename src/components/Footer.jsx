// import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
// import Link from "next/link";
// const footerSections = [
//   {
//     title: "Contact Us",
//     items: [
//       { label: "469-909-0956", icon: Phone, href: "tel:469-909-0956" },
//       { label: "Dallas-Fort Worth Area", icon: MapPin },
//       { label: "24/7 Emergency Service", icon: Clock },
//       { label: "info@tolbertgaragedoor.com", icon: Mail, href: "mailto:info@tolbertgaragedoor.com" },
//     ],
//   },
//   {
//     title: "Our Services",
//     items: [
//       { label: "Garage Door Repair", href: "#services" },
//       { label: "New Door Installation", href: "#services" },
//       { label: "Opener Repair & Installation", href: "#services" },
//       { label: "Spring Replacement", href: "#services" },
//       { label: "Annual Maintenance", href: "#services" },
//     ],
//   },
//   {
//     title: "Quick Links",
//     items: [
//       { label: "Home", href: "/" },
//       { label: "About Us", href: "#about" },
//       { label: "Our Products", href: "#products" },
//       { label: "Request Estimate", href: "#contact" },
//       { label: "FAQs", href: "/faqs" },
//     ],
//   },
//   {
//     title: "Connect With Us",
//     items: [
//       { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
//       { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
//       { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
//       { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
//     ],
//   },
// ];
// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {footerSections.map((section, index) => (
//             <div key={index} className="space-y-4">
//               <h3 className="text-lg font-semibold">{section.title}</h3>
//               <ul className="space-y-2">
//                 {section.items.map((item, itemIndex) => (
//                   <li key={itemIndex}>
//                     {item.href ? (
//                       <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
//                         {item.icon && <item.icon className="inline-block w-4 h-4 mr-2" />}
//                         {item.label}
//                       </Link>
//                     ) : (
//                       <span className="text-sm text-gray-400">
//                         {item.icon && <item.icon className="inline-block w-4 h-4 mr-2" />}
//                         {item.label}
//                       </span>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//         <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
//           <p>&copy; {new Date().getFullYear()} Tolbert Garage Door. All rights reserved.</p>
//           <p className="mt-2">
//             <Link href="/privacy-policy" className="hover:text-white transition-colors">
//               Privacy Policy
//             </Link>
//             {" | "}
//             <Link href="/terms-of-service" className="hover:text-white transition-colors">
//               Terms of Service
//             </Link>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

const footerSections = [
  {
    title: "Contact Us",
    items: [
      { label: "469-909-0956", icon: Phone, href: "tel:469-909-0956" },
      { label: "Dallas-Fort Worth Area", icon: MapPin },
      { label: "24/7 Emergency Service", icon: Clock },
      { label: "info@tolbertgaragedoor.com", icon: Mail, href: "mailto:info@tolbertgaragedoor.com" },
    ],
  },
  {
    title: "Our Services",
    items: [
      { label: "Garage Door Repair", href: "#services" },
      { label: "New Door Installation", href: "#services" },
      { label: "Opener Repair & Installation", href: "#services" },
      { label: "Spring Replacement", href: "#services" },
      { label: "Annual Maintenance", href: "#services" },
    ],
  },
  {
    title: "Quick Links",
    items: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "#about" },
      { label: "Our Products", href: "#products" },
      { label: "Request Estimate", href: "#contact" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Connect With Us",
    items: [
      { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
      { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
      { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
      { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white bg-[url('/fbg2.svg')] bg-no-repeat bg-center bg-cover">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-green-600">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.href ? (
                      <Link href={item.href} className="text-sm text-gray-400 hover:text-green-600 transition-colors">
                        {item.icon && <item.icon className="inline-block w-4 h-4 mr-2 text-green-600" />}
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-sm text-gray-400">
                        {item.icon && <item.icon className="inline-block w-4 h-4 mr-2 text-green-600" />}
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tolbert Garage Door. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy-policy" className="hover:text-green-600 transition-colors">
              Privacy Policy
            </Link>
            {" | "}
            <Link href="/terms-of-service" className="hover:text-green-600 transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
