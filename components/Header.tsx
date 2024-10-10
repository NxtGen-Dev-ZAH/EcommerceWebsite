"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, Menu, X, Search } from "lucide-react";
import Image from "next/image"; // Import Image component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* Top Bar */}
      <div className="bg-crescent-dark-brown text-crescent-white py-2 text-center text-sm">
        Free shipping on orders over $50 | Use code PURELAMP for 15% off your
        first order
      </div>

      {/* Navigation */}
      <nav className="bg-crescent-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo - Shown on both mobile and desktop */}
            <Link href="/">
              <Image
                src="/logo.png" // Path to your logo
                alt="Crescent Saline Logo"
                width={150} // Adjust size as needed
                height={50} // Adjust size as needed
                priority
                className="h-auto w-auto"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-crescent-brown hover:text-crescent-dark-brown transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-crescent-brown hover:text-crescent-dark-brown transition duration-300"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-crescent-brown hover:text-crescent-dark-brown transition duration-300"
              >
                About Our Salt
              </Link>
              <Link
                href="/sustainability"
                className="text-crescent-brown hover:text-crescent-dark-brown transition duration-300"
              >
                Sustainability
              </Link>
              <Link
                href="/contact"
                className="text-crescent-brown hover:text-crescent-dark-brown transition duration-300"
              >
                Contact
              </Link>
            </div>

            {/* Search and Icons */}
            <div className="flex items-center space-x-4">
              {/* Desktop Search Input */}
              <div className="hidden md:block relative">
                <input
                  type="text"
                  placeholder="Search salts..."
                  className="pl-8 pr-4 py-2 rounded-full border border-crescent-beige focus:outline-none focus:ring-2 focus:ring-crescent-dark-brown"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search
                  className="absolute left-3 top-2.5 text-crescent-brown"
                  size={18}
                />
              </div>

              {/* Mobile Search Icon */}
              <div className="md:hidden">
                <button className="text-crescent-brown hover:text-crescent-dark-brown transition duration-300">
                  <Search size={24} />
                </button>
              </div>

              {/* Cart and Wishlist Icons */}
              <button className="text-crescent-brown hover:text-crescent-dark-brown transition duration-300">
                <ShoppingCart size={24} />
              </button>
              <button className="text-crescent-brown hover:text-crescent-dark-brown transition duration-300">
                <Heart size={24} />
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-crescent-brown"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-crescent-white border-b border-crescent-beige p-4">
          <Link
            href="/"
            className="block py-2 text-crescent-brown hover:text-crescent-dark-brown transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="block py-2 text-crescent-brown hover:text-crescent-dark-brown transition duration-300"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="block py-2 text-crescent-brown hover:text-crescent-dark-brown transition duration-300"
          >
            About Our Salt
          </Link>
          <Link
            href="/sustainability"
            className="block py-2 text-crescent-brown hover:text-crescent-dark-brown transition duration-300"
          >
            Sustainability
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-crescent-brown hover:text-crescent-dark-brown transition duration-300"
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
