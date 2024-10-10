// import React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Star, ArrowRight } from "lucide-react";

// export default function FeaturedProducts() {
//   return (
//     <section id="featured-products" className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
//       <div className="container px-4 md:px-6">
//         <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
//           Featured Products
//         </h2>
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {[1, 2, 3, 4].map((i) => (
//             <div
//               key={i}
//               className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
//             >
//               <img
//                 alt={`Eco Product ${i}`}
//                 className="object-cover w-full h-60 transition-transform group-hover:scale-105"
//                 height="240"
//                 src={`/placeholder.svg?height=240&width=360`}
//                 width="360"
//               />
//               <div className="p-4">
//                 <h3 className="font-semibold text-lg mb-2">Eco Product {i}</h3>
//                 <div className="flex items-center mb-2">
//                   {[...Array(5)].map((_, index) => (
//                     <Star
//                       key={index}
//                       className="w-4 h-4 fill-current text-yellow-400"
//                     />
//                   ))}
//                   <span className="ml-2 text-sm text-gray-600">(24)</span>
//                 </div>
//                 <p className="text-gray-600 mb-2">Sustainable and stylish.</p>
//                 <div className="flex justify-between items-center">
//                   <span className="font-bold text-crescent-brown">$29.99</span>
//                   <Button size="sm" className="bg-crescent-dark-brown hover:bg-pink-700">
//                     Add to Cart
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

import React from "react";
import Image from "next/image";
import { Star, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Himalayan Salt Lamp",
    description: "Purifies air and adds a warm, calming glow.",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Premium Sea Salt",
    description: "Mineral-rich sea salt to enhance any dish.",
    price: 9.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Salt Crystal Candle Holder",
    description: "Elegant holder that radiates soothing light.",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Gourmet Salt Sampler",
    description: "A collection of unique salts for food lovers.",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
  },
];

export default function ProductsSection() {
  return (
    <section className="py-16 bg-crescent-light-beige">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-crescent-dark-brown">
          Our Premium Salt Selection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-crescent-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  layout="responsive"
                />
                <button className="absolute top-2 right-2 bg-crescent-white rounded-full p-2 text-crescent-brown hover:text-crescent-dark-brown transition duration-300">
                  <Heart size={20} />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-crescent-beige mb-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-crescent-dark-brown font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="flex items-center">
                    <Star
                      className="text-crescent-brown fill-current"
                      size={16}
                    />
                    <span className="ml-1 text-sm text-crescent-dark-brown">
                      {product.rating}
                    </span>
                  </div>
                </div>
                <button className="w-full bg-crescent-brown text-crescent-white py-2 rounded-full hover:bg-crescent-dark-brown transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
  <Link
    href="/shop"
    className="inline-flex items-center bg-crescent-brown text-crescent-white hover:bg-crescent-dark-brown font-bold text-xl px-6 py-3 rounded-full transition duration-300 transform hover:scale-105"
  >
    View All Products
    <ArrowRight className="ml-2 h-5 w-5" />
  </Link>
</div>

      </div>
    </section>
  );
}
