import React from "react";
import { Award, Leaf, Droplet } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Sourced from the finest salt deposits",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No additives or preservatives",
  },
  {
    icon: Droplet,
    title: "Trace Minerals",
    description: "Rich in essential minerals",
  },
  {
    icon: Award,
    title: "Handcrafted",
    description: "Artisanal salt lamps and products",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-crescent-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-crescent-dark-brown font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Why Choose Crescent Saline?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="shrink-0">
                <feature.icon className="text-crescent-brown" size={36} />
              </div>
              <div className="flex-grow whitespace-nowrap ">
                <h3 className="font-semibold text-lg text-crescent-dark-brown ">{feature.title}</h3>
                <p className="text-crescent-brown">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
