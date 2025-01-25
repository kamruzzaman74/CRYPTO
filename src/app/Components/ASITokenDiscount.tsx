'use client';

import React, { useState } from 'react';

const ASITokenDiscount = () => {
  const [claimClicked, setClaimClicked] = useState(false);

  const handleClaimClick = () => {
    setClaimClicked(true);
  };

  return (
    <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-16 px-8 rounded-lg shadow-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6">Unlock Exclusive Discounts with ASI Tokens!</h2>
        <p className="text-lg mb-8">
          Get ready to save big! Use your ASI Tokens to access unbeatable discounts on all our products. 
          The more tokens you have, the greater your savings!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="bg-white text-black p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Why Use ASI Tokens?</h3>
            <p className="text-lg mb-4">
              ASI Tokens give you access to exclusive offers, personalized discounts, and early access to new products.
            </p>
            <ul className="list-disc pl-5 text-lg">
              <li>Instant discounts on every purchase</li>
              <li>Special promotions only available to token holders</li>
              <li>Exclusive access to new products</li>
            </ul>
          </div>
          
          <div className="bg-white text-black p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">How to Earn ASI Tokens?</h3>
            <p className="text-lg mb-4">
              Earning ASI Tokens is easy! Simply engage with our platform, make purchases, and complete special tasks to earn tokens.
            </p>
            <ul className="list-disc pl-5 text-lg">
              <li>Make purchases and earn tokens with every order</li>
              <li>Participate in exclusive challenges and events</li>
              <li>Invite friends and earn referral bonuses</li>
            </ul>
          </div>
          
          <div className="bg-white text-black p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Exclusive Benefits</h3>
            <p className="text-lg mb-4">
              As a token holder, you’ll unlock exclusive perks like early access to sales, VIP customer support, and much more.
            </p>
            <ul className="list-disc pl-5 text-lg">
              <li>Priority customer support</li>
              <li>Early access to sales and promotions</li>
              <li>Special birthday discounts</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <button 
            className={`bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-full text-xl font-semibold transform transition-all duration-300 ${claimClicked ? 'bg-green-500' : ''}`} 
            onClick={handleClaimClick}
          >
            {claimClicked ? 'Discount Claimed!' : 'Claim Your Discount Now'}
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black py-3 px-6 rounded-full text-xl font-semibold transform transition-all duration-300">
            Learn More About ASI Tokens
          </button>
        </div>

        {claimClicked && (
          <div className="mt-12">
            <p className="text-xl font-semibold">
              Congratulations! Your discount has been successfully claimed. Enjoy your savings!
            </p>
          </div>
        )}

        <div className="mt-12">
          <p className="text-xl font-semibold">
            Don&apos;t wait! Start earning ASI Tokens today and unlock amazing rewards. The more tokens you collect, the bigger the savings!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ASITokenDiscount;

