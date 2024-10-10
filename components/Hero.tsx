"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const heroSlides = [
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Discover Premium Salts",
    subtitle: "Elevate Your Experience",
  },
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Natural Salt Lamps",
    subtitle: "Illuminate Your Space",
  },
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Granulated Salt Collection",
    subtitle: "Pure Flavor, Pure Commitment",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-crescent-dark-brown bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-3 ">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-6 ">{slide.subtitle}</p>
              <button className="bg-crescent-brown text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-crescent-dark-brown transition-transform duration-300 hover:scale-110 shadow-md">
                <Link href="/shop"> Explore Our Collection</Link>
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 p-2 rounded-full hover:bg-opacity-80 transition duration-300"
      >
        <ChevronLeft className="text-crescent-dark-brown" size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 p-2 rounded-full hover:bg-opacity-80 transition duration-300"
      >
        <ChevronRight className="text-crescent-dark-brown" size={28} />
      </button>
    </section>
  );
}
