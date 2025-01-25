'use client';

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16 px-8">
      <div className="container mx-auto text-center">
        {/* Company Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-lg">
              We are a leading platform offering the best solutions in crypto trading, financial planning, and investment strategies.
            </p>
            <p className="text-lg">Contact Us: support@cryptocommunity.com</p>
            <p className="text-lg">Phone: +1 800-123-4567</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-lg">
              <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="/terms" className="hover:text-yellow-500">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-yellow-500">Privacy Policy</a></li>
              <li><a href="/faq" className="hover:text-yellow-500">FAQs</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-yellow-500 transition-all duration-300">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-yellow-500 transition-all duration-300">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-yellow-500 transition-all duration-300">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-yellow-500 transition-all duration-300">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-yellow-500 transition-all duration-300">
                <FaGithub />
              </a>
              <a href="https://t.me/yourtelegramlink" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-yellow-500 transition-all duration-300">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-lg mb-4">Get the latest news, updates, and exclusive offers directly to your inbox.</p>
          <div className="flex justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 text-black rounded-lg w-1/2 md:w-1/3"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-lg text-xl font-semibold transform transition-all duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t-2 border-gray-800 pt-8">
          <p className="text-lg">© 2025 CryptoCommunity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
