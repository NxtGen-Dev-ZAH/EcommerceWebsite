import CommitmentSection from "@/components/Commitment";
import FAQSection from "@/components/Faqs";
import FeaturedProducts from "@/components/Feature";
import FeaturesSection from "@/components/Featureproduct";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import NewsletterSection from "@/components/Newsletter";
import TestimonialSection from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-white text-gray-900">
      <Header />
      <div>
        <HeroSection />
      </div>
      <div>
        <FeaturesSection />
      </div>
      <div>
        <FeaturedProducts />
      </div>
      <div>
        <CommitmentSection />
      </div>
      <div>
        <TestimonialSection />
      </div>
      <div>
        <FAQSection />
      </div>
      <div>
        <NewsletterSection />
      </div>

      <Footer />
    </div>
  );
}
