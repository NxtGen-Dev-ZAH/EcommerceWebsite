import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  return (
    <section
      id="featured-products"
      className="w-full flex items-center justify-center py-6 md:py-16 lg:py-20 bg-crescent-brown text-white"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Stay Connected with Crescent Saline
          </h2>
          <p className="max-w-[600px] md:text-xl">
            Subscribe to our newsletter for exclusive deals, salt wisdom, and
            updates on our latest products.
          </p>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="flex-1 bg-white text-gray-800"
                placeholder="Enter your email"
                type="email"
              />
              <Button
                type="submit"
                className="bg-white text-crescent-dark-brown hover:bg-crescent-beige"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-pink-100">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
