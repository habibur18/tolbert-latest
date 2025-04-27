import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Blog post data with SEO-optimized content
const blogPosts = [
  {
    id: "garage-door-spring-replacement-guide",
    title: "Complete Guide to Garage Door Spring Replacement",
    excerpt: "Learn about the different types of garage door springs, when they need replacement, and why this is a job best left to professionals.",
    image: "/home/blogs/Complete Guide to Garage Door Spring Replacement by tolbert garage door.png",
    date: "June 15, 2023",
    readTime: "7 min read",
    category: "Repairs",
    tags: ["springs", "repair", "maintenance", "safety"],
  },
  {
    id: "increase-home-value-with-garage-door",
    title: "How a New Garage Door Can Increase Your Home's Value",
    excerpt: "Discover why a garage door replacement offers one of the best returns on investment for home improvement projects.",
    image: "/home/blogs/How a New Garage Door Can Increase Your Home's Value.png",
    date: "May 22, 2023",
    readTime: "5 min read",
    category: "Installation",
    tags: ["home value", "ROI", "curb appeal", "real estate"],
  },
  {
    id: "smart-garage-door-openers-guide",
    title: "Smart Garage Door Openers: Features, Benefits & Installation",
    excerpt: "Explore the latest smart garage door opener technology and how it can enhance your home's security and convenience.",
    image: "/home/blogs/Smart Garage Door Openers Features, Benefits & Installation.png",
    date: "April 10, 2023",
    readTime: "6 min read",
    category: "Technology",
    tags: ["smart home", "openers", "security", "convenience"],
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full bg-[#32750a]/10 text-[#32750a] text-sm font-medium">Our Blog</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
            Garage Door <span className="text-[#32750a]">Tips & Insights</span>
          </h2>
          <div className="h-1 w-20 bg-[#32750a] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">Expert advice, maintenance tips, and industry insights to help you make informed decisions about your garage door.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 ">
          {blogPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.id}`} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="relative w-full h-auto">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  layout="responsive"
                  width={600} // Adjust this based on your card width (you can use up to 800px if needed)
                  height={350} // Adjust height to maintain aspect ratio
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-xs font-medium">{post.category}</div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-[#32750a] transition-colors">{post.title}</h3>

                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, i) => (
                    <div key={i} className="flex items-center gap-1 text-xs text-gray-500">
                      <Tag className="h-3 w-3" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-[#32750a] font-medium text-sm">
                  <span>Read Article</span>
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-[#32750a] hover:bg-[#2b6309]">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
