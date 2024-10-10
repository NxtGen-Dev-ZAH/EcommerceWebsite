import Image from "next/image";
import { Leaf, Droplet, Users, Recycle } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-[#EADBCC] ">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#763A22]">
          Our Commitment to Sustainability
        </h1>

        <div className="mb-16">
          <p className="text-[#763A22] text-lg mb-4">
            At Crescent Saline, we believe that the beauty of our salt products
            should not come at the expense of our planet. We are committed to
            sustainable practices throughout our entire production process, from
            harvesting to packaging and distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/images/sustainable-harvesting.jpg"
              alt="Sustainable salt harvesting"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#763A22]">
              Sustainable Harvesting
            </h2>
            <p className="text-[#763A22] mb-4">
              Our salt is harvested using traditional methods that have minimal
              impact on the environment. We work closely with local communities
              to ensure that our harvesting practices preserve the natural
              ecosystems and maintain the long-term viability of salt sources.
            </p>
            <p className="text-[#763A22] mb-4">
              By using solar evaporation techniques and hand-harvesting methods,
              we reduce our carbon footprint and preserve the purity of our salt
              products.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Leaf className="text-[#C89B67] mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-[#763A22]">
              Eco-Friendly Packaging
            </h3>
            <p className="text-[#763A22]">
              We use recyclable and biodegradable materials in our packaging to
              reduce waste.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Droplet className="text-[#C89B67] mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-[#763A22]">
              Water Conservation
            </h3>
            <p className="text-[#763A22]">
              Our harvesting methods minimize water usage and protect local
              water sources.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="text-[#C89B67] mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-[#763A22]">
              Community Support
            </h3>
            <p className="text-[#763A22]">
              We invest in local communities, providing fair wages and
              supporting education initiatives.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Recycle className="text-[#C89B67] mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-[#763A22]">
              Waste Reduction
            </h3>
            <p className="text-[#763A22]">
              We implement recycling programs and strive for zero-waste
              operations in our facilities.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#763A22]">
            Our Sustainability Goals
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ul className="text-[#763A22] list-disc list-inside space-y-4">
              <li>Achieve carbon neutrality in our operations by 2025</li>
              <li>
                Transition to 100% recyclable or compostable packaging by 2023
              </li>
              <li>
                Implement water recycling systems in all our production
                facilities
              </li>
              <li>
                Expand our community support programs to all regions where we
                operate
              </li>
              <li>
                Increase the use of renewable energy in our production and
                transportation
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#763A22]">
            Join Us in Our Sustainability Journey
          </h2>
          <p className="text-[#763A22] mb-8">
            We believe that every small action counts. By choosing Crescent
            Saline products, you are supporting sustainable practices and
            contributing to a healthier planet.
          </p>
          <button className="bg-[#C89B67] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#763A22] transition duration-300">
            Learn How You Can Help
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
