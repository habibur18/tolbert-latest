"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
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
  { title: "Gates", image: "/Gates.png", href: "/garage-door-gate" },
  { title: "Commercial Doors", image: "/Commercial Doors.png", href: "/garage-door-commercial" },
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
  return (
    <div className="bg-emerald-50">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <NavigationMenu className="py-2">
            <NavigationMenuList className="flex items-center justify-between w-full">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref className="cursor-pointer">
                  <Image className="cursor-pointer" src="/Tolbert Garage Door Logo.png" alt="Logo" width={180} height={30} />
                </Link>
              </NavigationMenuItem>
              <div className="flex items-center space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg">Door Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <ListItem key={service.title} className="text-lg" title={service.title} href={`/services/${service.href.replace("/", "")}`}>
                          <div className="flex items-center space-x-2">
                            <Image src={service.image} alt={service.title} width={100} height={50} />
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
                        {/* <ul className="grid grid-cols-2 gap-4">
                          {products.map((product) => (
                            <li key={product.title}  className="flex items-center space-x-2 text-lg  hover:text-emerald-600 transition-colors hover:bg-emerald-50 p-2">
                              <Image src={product.image} alt={product.title} width={100} height={100} />
                              {product.title === "Spring" ? (
                                <a href={product.href}>{product.title}</a>
                              ) : (
                                <Link href={product.href} className="hover:text-emerald-600 transition-colors">
                                  {product.title}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul> */}
                        <ul className="grid grid-cols-2 gap-4">
                          {products.map((product) => (
                            <li key={product.title} className="flex items-center space-x-2 text-lg hover:text-emerald-600 transition-colors hover:bg-emerald-50 p-2 cursor-pointer">
                              {product.title === "Spring" ? (
                                <a href={product.href} className="flex items-center space-x-2 w-full h-full p-2">
                                  <Image src={product.image} alt={product.title} width={100} height={100} />
                                  <span>{product.title}</span>
                                </a>
                              ) : (
                                <Link href={product.href} className="flex items-center space-x-2 w-full h-full p-2">
                                  <Image src={product.image} alt={product.title} width={100} height={100} />
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
                  <Link href="/giveaway" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg")}>Giveaway</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg">More</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-4">
                      <ul className="grid grid-cols-2 gap-3">
                        {moreItems.map((item) => (
                          <ListItem key={item.title} title={item.title} href={item.link} />
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center space-x-2 bg-emerald-600 text-white rounded-md p-3">
            <Phone size={18} />
            <span className="font-semibold">469-909-0956</span>
          </div>
        </div>
      </nav>
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
