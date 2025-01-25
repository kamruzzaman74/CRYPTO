"use client"
import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/"
             className="hover:opacity-80">CryptoSignal
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-6">
         
          <Link href="/signals"
             className="hover:text-yellow-300" >Signals
          </Link>
          <Link href="/pricing"
             className="hover:text-yellow-300" >Pricing
          </Link>
          <Link href="/about"
            className="hover:text-yellow-300">About
          </Link>
          <Link href="/contact"
            className="hover:text-yellow-300">Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <nav className="md:hidden bg-blue-600">
          <ul className="space-y-4 py-4 px-6">
            <li>
              <Link href="/">
                <a className="block text-white hover:text-yellow-300">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/signals">
                <a className="block text-white hover:text-yellow-300">Signals</a>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <a className="block text-white hover:text-yellow-300">Pricing</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="block text-white hover:text-yellow-300">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="block text-white hover:text-yellow-300">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
