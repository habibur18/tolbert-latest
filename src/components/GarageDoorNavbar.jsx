"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useEffect, useRef } from "react";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Garage Door Installation",
    description: "Professional garage door installation services",
    image: "/installation.png",
    href: "/garage-door-installation",
  },
  {
    title: "Garage Door Repair",
    description: "Quick and reliable repair services for all types of garage doors",
    image: "/Garage Door Repair.png",
    href: "/garage-door-repair",
  },
  {
    title: "Garage Door Maintenance",
    description: "Regular maintenance to keep your garage door in top condition",
    image: "/Garage Door Maintenance.png",
    href: "/garage-door-maintenance",
  },
];

const products = [
  { title: "Openers", image: "/Openers.png", href: "/garage-door-openers" },
  { title: "Doors", image: "/Doors.png", href: "/garage-door" },
  { title: "Spring", image: "/Springs.png", href: "/garage-door-spring" },
  { title: "Screens", image: "/Screens.png", href: "/garage-door-screen" },
  { title: "Gates", image: "/Gates.png", href: "/gate-installation-dallas" },
  { title: "Commercial Doors", image: "/Commercial Doors.png", href: "/commercial-door-systems" },
  { title: "Parts", image: "/Parts.png", href: "/garage-door-spring" },
  { title: "Storage Units", image: "/Storage Units.png", href: "/storage-unit-doors-repair" },
  { title: "Storage Bin Racks", image: "/Storage Bin Racks.png", href: "/storage-bin-racks" },
];

const moreItems = [
  { title: "Garage Door Screens", link: "/garage-door-screens" },
  { title: "Storage Bin Racks", link: "/storage-bin-racks" },
  { title: "Services", link: "/services" },
  { title: "Insulation", link: "/insulation" },
  { title: "Commercial", link: "/commercial" },
  { title: "Service Area", link: "/service-area" },
  { title: "Mesquite TX Garage Door Repair", link: "/mesquite-tx-garage-door-repair" },
  { title: "Garland TX Garage Door Repair", link: "/garland-tx-garage-door-repair" },
  { title: "Arlington TX Garage Door Repair", link: "/arlington-tx-garage-door-repair" },
  { title: "Community", link: "/community" },
  { title: "Tolbert Garage Door Athlete Of The Week", link: "/athlete-of-the-week" },
  { title: "Tolbert Garage Door Bio", link: "/tolbert-garage-door-bio" },
  { title: "Storage Unit Doors & Repair", link: "/storage-unit-doors-repair" },
  { title: "Forum", link: "/forum" },
  { title: "Members", link: "/members" },
];

export function GarageDoorNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const sidebarRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="bg-emerald-50">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <Link href="/" className="cursor-pointer">
            <Image src="/Tolbert Garage Door Logo.png" alt="Logo" width={180} height={30} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <DesktopMenu />
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-primary size-16" onClick={toggleMobileMenu}>
            <Menu size={16} className="size-16" />
          </button>

          {/* Phone Number - Always Visible */}
          <div className=" items-center space-x-2 bg-primary text-white rounded-md p-3 hidden md:flex">
            <Phone size={18} />
            <span className="font-semibold">(469) 909-0956</span>
          </div>
        </div>
      </nav>

      {/* Mobile Sliding Menu with Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)} />
            <motion.div ref={sidebarRef} initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-lg z-50 overflow-y-auto">
              <div className="p-4">
                <button className="mb-4 text-primary size-16" onClick={toggleMobileMenu}>
                  <X size={16} className="size-16" />
                </button>
                <MobileMenu />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function DesktopMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg">Door Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {services.map((service) => (
                <ListItem key={service.title} className="text-lg" title={service.title} href={`/services/${service.href.replace("/", "")}`}>
                  <div className="flex items-center space-x-2">
                    <Image src={service.image || "/placeholder.svg"} alt={service.title} width={100} height={50} />
                    <span>{service.description}</span>
                  </div>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg">Products & Accessories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[800px] p-4">
              <div className="w-1/4 pr-4 border-r">
                <Link href="/products" className="text-lg font-semibold hover:text-emerald-600 transition-colors">
                  All Products
                </Link>
              </div>
              <div className="w-3/4 pl-4">
                <ul className="grid grid-cols-2 gap-4">
                  {products.map((product) => (
                    <li key={product.title} className="flex items-center space-x-2 text-lg hover:text-emerald-600 transition-colors hover:bg-emerald-50 p-2 cursor-pointer">
                      {product.title === "Spring" ? (
                        <a href={product.href} className="flex items-center space-x-2 w-full h-full p-2">
                          <Image src={product.image || "/placeholder.svg"} alt={product.title} width={100} height={100} />
                          <span>{product.title}</span>
                        </a>
                      ) : (
                        <Link href={product.href} className="flex items-center space-x-2 w-full h-full p-2">
                          <Image src={product.image || "/placeholder.svg"} alt={product.title} width={100} height={100} />
                          <span>{product.title}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg">More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[700px] p-4">
              <ul className="grid grid-cols-2 gap-3">
                {moreItems.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.link} />
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/careers" legacyBehavior passHref>
            <div className="relative">
              <NavigationMenuLink className="text-lg cursor-pointer z-10">Careers</NavigationMenuLink>

              {/* Always visible "Hiring" notification */}
              <span className="absolute -z-10 -top-2 -right-8 bg-[#32750a] text-white text-xs py-px px-1 rounded-full">Hiring</span>
            </div>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileMenu() {
  return (
    <div className="flex flex-col space-y-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="door-services">
          <AccordionTrigger className="text-lg font-semibold">Door Services</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <Link href={`/services/${service.href.replace("/", "")}`} className="flex items-center p-2 hover:bg-emerald-50 rounded-md transition-colors">
                    <Image src={service.image || "/placeholder.svg"} alt={service.title} width={40} height={40} className="mr-3" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="products">
          <AccordionTrigger className="text-lg font-semibold">Products & Accessories</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.title}>
                  <Link href={product.href} className="flex items-center p-2 hover:bg-emerald-50 rounded-md transition-colors">
                    <Image src={product.image || "/placeholder.svg"} alt={product.title} width={40} height={40} className="mr-3" />
                    <span>{product.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="more">
          <AccordionTrigger className="text-lg font-semibold">More</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              {moreItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.link} className="block p-2 hover:bg-emerald-50 rounded-md transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Link href="/careers" legacyBehavior passHref>
        <div className="relative">
          <span span className="text-lg cursor-pointer z-10">
            Careers
          </span>

          {/* Always visible "Hiring" notification */}
          <span className="absolute  bg-[#32750a] text-white text-xs py-px px-1 rounded-full">Hiring</span>
        </div>
      </Link>
    </div>
  );
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link ref={ref} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)} {...props}>
          <div className="text-lg font-medium leading-none">{title}</div>
          {children && <div className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">{children}</div>}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
