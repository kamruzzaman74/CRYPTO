"use client";

import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-white py-20 px-6">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative w-96 h-96">
          {/* Circular Animation Container */}
          <div className="circle-animation">
            {/* Real Crypto Coin Images */}
            <div className="coin coin-1">
              <img
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                alt="Bitcoin"
                className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110 drop-shadow-lg"
              />
            </div>
            <div className="coin coin-2">
              <img
                src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                alt="Ethereum"
                className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110 drop-shadow-lg"
              />
            </div>
            <div className="coin coin-3">
              <img
                src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png"
                alt="Binance Coin"
                className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110 drop-shadow-lg"
              />
            </div>
            <div className="coin coin-4">
              <img
                src="https://cryptologos.cc/logos/litecoin-ltc-logo.png"
                alt="Litecoin"
                className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110 drop-shadow-lg"
              />
            </div>
            <div className="coin coin-5">
              <img
                src="https://cryptologos.cc/logos/cardano-ada-logo.png"
                alt="Cardano"
                className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110 drop-shadow-lg"
              />
            </div>
            <div className="coin coin-6">
              <img
                src="https://cryptologos.cc/logos/solana-sol-logo.png"
                alt="Solana"
                className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110 drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="text-center text-gray-800 z-10 relative">
        <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Unlock Premium Crypto Signals
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Stay ahead in the crypto market with our real-time, accurate signals and boost your trading game.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
