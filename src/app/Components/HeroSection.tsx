'use client';

import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 py-20 px-6">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative w-96 h-96">
          {/* Circular Animation Container */}
          <div className="circle-animation">
            {/* Real Crypto Coin Images */}
            <div className="coin coin-1">
              <img
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                alt="Bitcoin"
                className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="coin coin-2">
              <img
                src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                alt="Ethereum"
                className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="coin coin-3">
              <img
                src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png"
                alt="Binance Coin"
                className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="coin coin-4">
              <img
                src="https://cryptologos.cc/logos/litecoin-ltc-logo.png"
                alt="Litecoin"
                className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="coin coin-5">
              <img
                src="https://cryptologos.cc/logos/cardano-ada-logo.png"
                alt="Cardano"
                className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="coin coin-6">
              <img
                src="https://cryptologos.cc/logos/solana-sol-logo.png"
                alt="Solana"
                className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="text-center text-white z-10 relative">
        <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
          Unlock Premium Crypto Signals
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Stay ahead in the crypto market with our real-time, accurate signals and boost your trading game.
        </p>
        <button className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-4 px-8 rounded-full text-xl font-semibold transform transition-all duration-300 ease-in-out hover:scale-110 shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

