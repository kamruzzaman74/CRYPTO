

'use client';
import 'crip.css';
import React from 'react';

const Community = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white py-20 px-8 rounded-lg shadow-lg">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Join the Largest Crypto Trading Community Online!
        </h2>
        <p className="text-lg mb-12 animate__animated animate__fadeIn animate__delay-2s">
          Be part of a vibrant community of traders, investors, and crypto enthusiasts. Unlock exclusive insights, tips, and opportunities!
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="bg-white text-black p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-3s">
            <h3 className="text-2xl font-bold mb-4">Expert Insights</h3>
            <p className="text-lg mb-4">
              Access insights from seasoned crypto traders and industry experts to stay ahead of the market.
            </p>
          </div>

          <div className="bg-white text-black p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-4s">
            <h3 className="text-2xl font-bold mb-4">Real-Time Alerts</h3>
            <p className="text-lg mb-4">
              Get real-time alerts for price changes, market trends, and new opportunities directly to your phone.
            </p>
          </div>

          <div className="bg-white text-black p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-5s">
            <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
            <p className="text-lg mb-4">
              Our dedicated support team is available around the clock to help you with any questions or issues.
            </p>
          </div>
        </div>

        {/* Exclusive Trading Tools Section */}
        <div className="bg-gray-800 text-white py-16 px-8 rounded-lg shadow-xl mb-16">
          <h3 className="text-3xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-6s">
            Exclusive Trading Tools
          </h3>
          <p className="text-lg mb-4 animate__animated animate__fadeIn animate__delay-7s">
            As a member, you get access to exclusive tools that help you make smarter trades, track market trends, and optimize your portfolio.
          </p>
          <ul className="list-disc pl-8 text-lg space-y-4">
            <li className="animate__animated animate__fadeIn animate__delay-8s">Advanced charting tools for real-time market analysis</li>
            <li className="animate__animated animate__fadeIn animate__delay-9s">Automated trading bots to help you maximize profits</li>
            <li className="animate__animated animate__fadeIn animate__delay-10s">Personalized trading strategies based on your preferences</li>
          </ul>
        </div>

        {/* VIP Access Section */}
        <div className="bg-yellow-500 text-black py-16 px-8 rounded-lg shadow-xl mb-16">
          <h3 className="text-3xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-11s">
            VIP Access: Unlock Special Perks
          </h3>
          <p className="text-lg mb-4 animate__animated animate__fadeIn animate__delay-12s">
            Upgrade to VIP status and enjoy exclusive benefits like early access to new crypto projects, private webinars, and more.
          </p>
          <ul className="list-disc pl-8 text-lg space-y-4">
            <li className="animate__animated animate__fadeIn animate__delay-13s">Private webinars with crypto experts</li>
            <li className="animate__animated animate__fadeIn animate__delay-14s">Early access to new crypto projects and tokens</li>
            <li className="animate__animated animate__fadeIn animate__delay-15s">Priority customer support for VIP members</li>
          </ul>
        </div>

        {/* Hotlines/Support Section */}
        <div className="bg-gray-900 text-white py-16 px-8 rounded-lg shadow-xl mb-16">
          <h3 className="text-3xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-16s">
            24/7 Hotline & Support
          </h3>
          <p className="text-lg mb-4 animate__animated animate__fadeIn animate__delay-17s">
            We are here to help you! Contact us anytime through our dedicated support hotline or via email.
          </p>
          <div className="flex justify-center gap-8 text-xl">
            <div className="animate__animated animate__fadeIn animate__delay-18s">
              <span className="font-semibold">Hotline:</span> +1 800-123-4567
            </div>
            <div className="animate__animated animate__fadeIn animate__delay-19s">
              <span className="font-semibold">Email:</span> support@cryptocommunity.com
            </div>
          </div>
        </div>

        {/* Limited-Time Offers Section */}
        <div className="bg-red-500 text-white py-16 px-8 rounded-lg shadow-xl mb-16">
          <h3 className="text-3xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-20s">
            Limited-Time Offers
          </h3>
          <p className="text-lg mb-4 animate__animated animate__fadeIn animate__delay-21s">
            Don&apos;t miss out on these exclusive offers! Act fast and maximize your potential.
          </p>
          <ul className="list-disc pl-8 text-lg space-y-4">
            <li className="animate__animated animate__fadeIn animate__delay-22s">Get 10% off your first trade when you join today</li>
            <li className="animate__animated animate__fadeIn animate__delay-23s">Exclusive access to a free trading guide</li>
            <li className="animate__animated animate__fadeIn animate__delay-24s">Win a free month of VIP membership</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-full text-xl font-semibold transform transition-all duration-300 ease-in-out hover:scale-105 animate__animated animate__fadeIn animate__delay-25s">
            Join Now and Start Trading!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;
