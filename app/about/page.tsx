import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#EADBCC] ">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#763A22]">
          About Crescent Saline
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/images/salt-harvesting.jpg"
              alt="Salt harvesting"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#763A22]">
              Our Story
            </h2>
            <p className="text-[#763A22] mb-4">
              Crescent Saline was born out of a passion for high-quality,
              natural salt products. Our journey began in the pristine salt
              flats of the Himalayas, where we discovered the incredible purity
              and rich mineral content of pink Himalayan salt.
            </p>
            <p className="text-[#763A22] mb-4">
              Inspired by this discovery, we set out to bring the finest salt
              products to homes and kitchens around the world. Today, Crescent
              Saline offers a wide range of salt products, from culinary salts
              to wellness items, all sourced with the utmost care for quality
              and sustainability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-[#763A22]">
              Our Commitment to Quality
            </h2>
            <p className="text-[#763A22] mb-4">
              At Crescent Saline, quality is our top priority. We work directly
              with skilled salt farmers and artisans to ensure that every
              product meets our exacting standards. Our salts are harvested
              using traditional methods that preserve their natural mineral
              content and unique flavors.
            </p>
            <p className="text-[#763A22] mb-4">
              We believe in transparency and traceability, which is why we
              carefully document the journey of our salt from source to shelf.
              This commitment to quality extends to every aspect of our
              business, from customer service to packaging and shipping.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/salt-quality-check.jpg"
              alt="Salt quality check"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#763A22]">
            Our Product Range
          </h2>
          <p className="text-[#763A22] mb-4 max-w-2xl mx-auto">
            From gourmet cooking salts to luxurious bath products, Crescent
            Saline offers a diverse range of salt-based items to enhance your
            culinary adventures and wellness routines. Explore our collection
            of:
          </p>
          <ul className="text-[#763A22] list-disc list-inside max-w-md mx-auto text-left">
            <li>Gourmet cooking salts</li>
            <li>Himalayan salt lamps</li>
            <li>Natural salt soaps and scrubs</li>
            <li>Salt inhalers for respiratory health</li>
            <li>Salt blocks for cooking and serving</li>
            <li>Luxury bath salts</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#763A22]">
            Our Mission
          </h2>
          <p className="text-[#763A22] text-center text-lg italic">
          &quot;To bring the purity and benefits of natural salt to every home,
            enhancing culinary experiences and promoting wellness through
            sustainable and ethically sourced products.&quot;
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
