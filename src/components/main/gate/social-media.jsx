import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Facebook, Instagram, MessageCircle, Play, ThumbsUp, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SocialMedia() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#32750a]/10 px-4 py-2 rounded-full text-[#32750a] font-medium mb-4">Join Our Community</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Connect With Tolbert Garage Door</h2>
          <p className="text-xl text-gray-600">Follow us on social media for the latest projects, tips, and special offers. Join our growing community of happy customers.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="bg-blue-500 rounded-2xl p-4 text-white transform transition-transform group-hover:scale-110">
                  <Facebook className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#32750a] transition-colors">Follow Us on Facebook</h3>
                  <p className="text-gray-600 text-lg mb-3">Join our Facebook community for exclusive content, project showcases, and special promotions.</p>
                  <div className="bg-gray-100 p-3 rounded-lg mb-3 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                    <p className="text-gray-700 italic">"Just finished installing our beautiful new gate from Tolbert! Check out the photos below. Incredible craftsmanship and attention to detail!"</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">Posted 2 days ago</span>
                      <div className="flex gap-2">
                        <button className="text-blue-500 text-sm flex items-center">
                          <ThumbsUp className="h-3 w-3 mr-1" /> 24
                        </button>
                        <button className="text-blue-500 text-sm flex items-center">
                          <MessageCircle className="h-3 w-3 mr-1" /> 5
                        </button>
                      </div>
                    </div>
                  </div>
                  <Link href="https://facebook.com/tolbertgaragedoor" className="inline-flex items-center text-[#32750a] font-medium hover:underline group">
                    @TolbertGarageDoor <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-4 text-white transform transition-transform group-hover:scale-110">
                  <Instagram className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#32750a] transition-colors">Follow Us on Instagram</h3>
                  <p className="text-gray-600 text-lg mb-3">See our latest installations and design inspirations on our Instagram page.</p>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="aspect-square bg-gray-200 rounded-md overflow-hidden relative group/img">
                      <Image src="/placeholder.svg?height=100&width=100" alt="Instagram post" width={100} height={100} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-white text-xs flex items-center">
                          <ThumbsUp className="h-3 w-3 mr-1" /> 42
                        </div>
                      </div>
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-md overflow-hidden relative group/img">
                      <Image src="/placeholder.svg?height=100&width=100" alt="Instagram post" width={100} height={100} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-white text-xs flex items-center">
                          <ThumbsUp className="h-3 w-3 mr-1" /> 38
                        </div>
                      </div>
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-md overflow-hidden relative group/img">
                      <Image src="/placeholder.svg?height=100&width=100" alt="Instagram post" width={100} height={100} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-white text-xs flex items-center">
                          <ThumbsUp className="h-3 w-3 mr-1" /> 56
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link href="https://instagram.com/tolbertgaragedoor" className="inline-flex items-center text-[#32750a] font-medium hover:underline group">
                    @TolbertGarageDoor <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-red-600 rounded-2xl p-4 text-white transform transition-transform group-hover:scale-110">
                  <Youtube className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#32750a] transition-colors">Subscribe on YouTube</h3>
                  <p className="text-gray-600 text-lg mb-3">Watch our installation videos, maintenance tips, and customer testimonials.</p>
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
                    <div className="aspect-video bg-gray-200 relative">
                      <Image src="/placeholder.svg?height=200&width=350" alt="YouTube video thumbnail" width={350} height={200} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-bold">How to Choose the Perfect Gate for Your Home</h4>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm text-gray-500">4.2K views • 2 weeks ago</span>
                        <div className="flex gap-2">
                          <button className="text-red-600 text-sm flex items-center">
                            <ThumbsUp className="h-3 w-3 mr-1" /> 128
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link href="https://youtube.com/tolbertgaragedoor" className="inline-flex items-center text-[#32750a] font-medium hover:underline group">
                    Tolbert Garage Door Channel <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-[#32750a] rounded-2xl p-4 text-white transform transition-transform group-hover:scale-110">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#32750a] transition-colors">Join Our Newsletter</h3>
                  <p className="text-gray-600 text-lg mb-3">Subscribe to our newsletter for maintenance tips, industry news, and exclusive offers.</p>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-3">
                    <h4 className="font-bold text-[#32750a] mb-2">Subscriber Benefits:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#32750a] mr-2 shrink-0 mt-0.5" />
                        <span>Seasonal maintenance checklists</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#32750a] mr-2 shrink-0 mt-0.5" />
                        <span>Exclusive subscriber-only discounts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#32750a] mr-2 shrink-0 mt-0.5" />
                        <span>Early access to new products and services</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Input type="email" placeholder="Your email address" className="bg-gray-100 border-0 focus:ring-2 focus:ring-[#32750a]" />
                    <Button className="bg-[#32750a] hover:bg-[#32750a]/90">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#32750a]/10 rounded-full z-0 animate-pulse hidden md:block"></div>

            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-48 transform hover:scale-105 transition-transform">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="https://example.com/videos/gate-installation.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform">
                  <Image src="/placeholder.svg?height=300&width=250" alt="Social media post" width={250} height={300} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-sm font-medium">Customer spotlight: The Johnson family's new gate</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform">
                  <Image src="/placeholder.svg?height=300&width=250" alt="Customer review" width={250} height={300} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <span className="text-white text-xs ml-1">5.0</span>
                    </div>
                    <p className="text-white text-sm font-medium">Amazing service and quality!</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-48 transform hover:scale-105 transition-transform">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="https://example.com/videos/garage-door-demo.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-4 rounded-xl shadow-lg">
              <h3 className="font-bold text-lg mb-2">Join Our Community Events</h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start border-b border-gray-100 pb-3">
                  <div className="bg-[#32750a]/10 text-[#32750a] font-bold rounded-lg p-2 text-center min-w-[50px]">
                    <div className="text-sm">APR</div>
                    <div className="text-xl">15</div>
                  </div>
                  <div>
                    <h4 className="font-medium">DIY Gate Maintenance Workshop</h4>
                    <p className="text-sm text-gray-600">Learn how to keep your gate in top condition</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-[#32750a]/10 text-[#32750a] font-bold rounded-lg p-2 text-center min-w-[50px]">
                    <div className="text-sm">MAY</div>
                    <div className="text-xl">22</div>
                  </div>
                  <div>
                    <h4 className="font-medium">Smart Home Integration Seminar</h4>
                    <p className="text-sm text-gray-600">Discover how to connect your gates to your smart home</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
