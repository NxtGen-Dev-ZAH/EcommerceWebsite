import React from "react";
import Image from "next/image";


export default function CommitmentSection() {
  return (
    <section className="py-16 bg-crescent-beige">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Salt harvesting"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6 text-crescent-dark-brown">
              The Art of Salt Craftsmanship
            </h2>
            <p className="text-crescent-dark-brown mb-4">
              At Crescent Saline, we take pride in our meticulous salt
              harvesting and crafting process. Our expert artisans use
              traditional methods combined with modern techniques to ensure the
              highest quality salt products.
            </p>
            <p className="text-crescent-dark-brown mb-6">
              From the pristine Himalayan mines to our carefully crafted salt
              lamps, we source and create products that preserve the natural
              minerals and unique properties that make our offerings truly
              exceptional.
            </p>
            <button className="bg-crescent-brown text-crescent-white px-6 py-3 rounded-full hover:bg-crescent-dark-brown transition duration-300">
              Learn More About Our Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
