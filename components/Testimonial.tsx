import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah L.",
    location: "Portland, OR",
    text: "These Himalayan Salt Lamps from Crescent Saline transformed my living space! The warm glow creates such a peaceful ambiance.",
    rating: 5,
    image: "/images/testimonials/sarah-l.jpg",
  },
  {
    id: 2,
    name: "Michael T.",
    location: "Austin, TX",
    text: "I was amazed by the quality of the Gourmet Salt Sampler. Every variety adds a unique flavor to my dishes.",
    rating: 4,
    image: "/images/testimonials/michael-t.jpg",
  },
  {
    id: 3,
    name: "Emma R.",
    location: "Seattle, WA",
    text: "The salt lamps from Crescent Saline are not only beautiful but also help purify the air in my home. Highly recommended!",
    rating: 4,
    image: "/images/testimonials/emma-r.jpg",
  },
];

const TestimonialCard: React.FC<{
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}> = ({ name, location, text, rating, image }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
    <div className="flex items-center mb-6">
      <Image
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full mr-4 border-2 border-crescent-brown"
        width={16}
        height={16}
      />{" "}
      <div>
        <h4 className="font-semibold text-lg text-crescent-dark-brown">
          {name}
        </h4>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
    <p className="text-gray-700 mb-6 leading-relaxed">{text}</p>
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  </div>
);

export default function TestimonialSection() {
  return (
    <section className="bg-gradient-to-b from-crescent-light-beige to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-crescent-dark-brown text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
