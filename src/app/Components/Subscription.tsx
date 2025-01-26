'use client';

import React, { useState } from 'react';

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = () => {
    if (!email || !plan) {
      alert('Please fill out all fields.');
      return;
    }
    setLoading(true);
    // Simulate a subscription process
    setTimeout(() => {
      setLoading(false);
      alert('Subscription successful!');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-4xl relative overflow-hidden">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Unlock the Best Crypto Signals
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Join our premium crypto signal service for exclusive insights, tips, and more!
        </p>

        {/* Email Input */}
        <div className="mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
          />
        </div>

        {/* Plan Selection */}
        <div className="mb-6">
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
          >
            <option value="">Select a Plan</option>
            <option value="basic">Basic Plan - $10/month</option>
            <option value="premium">Premium Plan - $30/month</option>
            <option value="vip">VIP Plan - $50/month</option>
          </select>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
            <p className="text-gray-100 mb-4">Daily crypto signals and market analysis.</p>
            <span className="text-2xl font-bold">$10/month</span>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
            <p className="text-gray-100 mb-4">Exclusive signals, VIP support, and in-depth analysis.</p>
            <span className="text-2xl font-bold">$30/month</span>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-4">VIP Plan</h3>
            <p className="text-gray-100 mb-4">All signals, exclusive webinars, and personal consultations.</p>
            <span className="text-2xl font-bold">$50/month</span>
          </div>
        </div>

        {/* Subscribe Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-full text-lg font-semibold transform transition-all duration-300 ease-in-out disabled:bg-gray-400 hover:scale-105"
          >
            {loading ? 'Processing...' : 'Subscribe Now'}
          </button>
        </div>

        {/* Features */}
        <div className="mt-8 text-center text-gray-800">
          <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Expert Crypto Signals & Insights</li>
            <li>Real-time Alerts on Price Movements</li>
            <li>24/7 Customer Support</li>
            <li>Exclusive Trading Tools & Resources</li>
            <li>Access to VIP Webinars & Consultations</li>
          </ul>
        </div>

        {/* Testimonials Section */}
        <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">What Our Clients Say</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-80 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <p className="text-lg text-gray-600 mb-4">"The signals are incredibly accurate! I’ve made a significant profit in just a few weeks!"</p>
              <p className="font-semibold text-gray-800">John D.</p>
              <p className="text-sm text-gray-500">Crypto Enthusiast</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-80 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <p className="text-lg text-gray-600 mb-4">"I love the real-time alerts and the VIP support. Highly recommend this service!"</p>
              <p className="font-semibold text-gray-800">Sarah L.</p>
              <p className="text-sm text-gray-500">Professional Trader</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
