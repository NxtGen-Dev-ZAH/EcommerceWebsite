import Image from "next/image";
import { Star, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    name: "Himalayan Salt Lamp",
    price: 29.99,
    image: "/images/salt-lamp.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Pink Himalayan Salt",
    price: 12.99,
    image: "/images/pink-salt.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Salt Grinder Set",
    price: 24.99,
    image: "/images/grinder-set.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Gourmet Salt Sampler",
    price: 34.99,
    image: "/images/salt-sampler.jpg",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Natural Salt Soap",
    price: 8.99,
    image: "/images/salt-soap.jpg",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Salt Inhaler",
    price: 19.99,
    image: "/images/salt-inhaler.jpg",
    rating: 4.3,
  },
  {
    id: 7,
    name: "Salt Cooking Block",
    price: 39.99,
    image: "/images/cooking-block.jpg",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Bath Salt Set",
    price: 22.99,
    image: "/images/bath-salt-set.jpg",
    rating: 4.8,
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#EADBCC] ">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#763A22]">
          Our Salt Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  layout="responsive"
                />
                <button className="absolute top-2 right-2 bg-white rounded-full p-2 text-[#763A22] hover:text-[#C89B67] transition duration-300">
                  <Heart size={20} />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[#763A22] font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="flex items-center">
                    <Star className="text-[#C89B67] fill-current" size={16} />
                    <span className="ml-1 text-sm text-[#763A22]">
                      {product.rating}
                    </span>
                  </div>
                </div>
                <button className="w-full bg-[#C89B67] text-white py-2 rounded-full hover:bg-[#763A22] transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>

  );
}
