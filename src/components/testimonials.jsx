import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Sav W",
    rating: 5,
    date: "2 weeks ago",
    description: "Never expected to call for help and get serviced the same day. Brandon and CJ were amazing and got my commercial doors fixed right away. I loved the confidence that they both had when figuring out what was needed to fix my doors and the cost was extremely reasonable. Tolbert garage doors are my new go to for my garage door repairs! Thank you!",
  },
  {
    name: "Evan Johnson",
    rating: 5,
    date: "1 month ago",
    description: "Great folks. They came out next day and fixed my garage door within hours. Also came in WAY under other estimates we were getting. Thanks so much for taking care of us!",
  },
  {
    name: "Jerry Wascom",
    rating: 5,
    date: "2 months ago",
    description: "Kevin, was great. He was here in time told me the price and went right to work. He did a great job.",
  },
  {
    name: "Brittany Craft",
    rating: 5,
    date: "3 months ago",
    description: "Great customer service, great company and great technicians! They did an amazing job on our garage door replacement and we couldn't be happier!",
  },
  {
    name: "Nick Dassow",
    rating: 5,
    date: "4 months ago",
    description: "Colby came out and had our broken torsion spring replaced in no time. Great customer service and upfront pricing! We definitely will be using Tolbert for all our future garage door needs. Thanks again!",
  },
  {
    name: "Maribel Estrada",
    image: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "4 months ago",
    description: "Tolbert is the best. After being told by several other companies they couldn’t fixed the issue with my garage door. Izzy came right out and did a fantastic job at a great price. Izzy was on time and very friendly and was very honest. He finished the job in less than an hour. I would highly recommend this company and especially this technician.",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value}>{value <= rating ? <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> : value - 0.5 <= rating ? <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" /> : <Star className="w-4 h-4 text-gray-300" />}</span>
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex items-center">
                      <StarRating rating={testimonial.rating} />
                      <span className="text-gray-500 text-sm ml-2">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{testimonial.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Link target="_blank" href="/reviews" className=" flex justify-center w-max mx-auto items-center text-center mt-8 py-2 px-4 rounded-full  border-green-600 text-green-600 hover:text-green-800 border-2 transition-colors">
          View All (Google) Reviews
        </Link>
      </div>
    </section>
  );
}
