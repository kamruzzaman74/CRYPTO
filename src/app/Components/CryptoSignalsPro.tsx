"use client"
import Image from "next/image";
import { useEffect, useState } from "react";


import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const CryptoSignalsPro = () => {
  const [cryptoData, setCryptoData] = useState<Record<string, { usd: number }> | null>(null);
  const [priceHistory, setPriceHistory] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [reviews, setReviews] = useState([
    {
      name: "John Doe",
      feedback: "Amazing platform! The signals are spot-on and helped me maximize my profits.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      feedback: "The AI insights are a game-changer. Highly recommend Crypto Signals Pro!",
      rating: 4.5,
    },
    {
      name: "Michael Brown",
      feedback: "User-friendly and highly effective. My go-to platform for crypto trading.",
      rating: 5,
    },
  ]);

  // Fetch live crypto market data
  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano&vs_currencies=usd"
        );
        const data = await response.json();
        setCryptoData(data);

        // Mock historical price data for graph
        const historyResponse = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7"
        );
        const historyData = await historyResponse.json();
        const prices = historyData.prices.map((entry: [number, number]) => entry[1]);
        const dates = historyData.prices.map((entry: [number, number]) =>
          new Date(entry[0]).toLocaleDateString()
        );

        setPriceHistory(prices);
        setLabels(dates);
      } catch (err) {
        if (err instanceof Error) {
          console.error("Error fetching data:", err.message);
        } else {
          console.error("An unknown error occurred:", err);
        }
      }
    };
    fetchCryptoData();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <header className="relative py-20 bg-gradient-to-r from-purple-700 via-indigo-500 to-blue-600 text-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 animate-pulse">
          🚀 Crypto Signals Pro
        </h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto animate-fade-in">
          Unlock the power of real-time signals, AI-driven insights, and expert strategies to maximize your crypto profits. Stay ahead in the fast-paced world of cryptocurrency!
        </p>
        <div className="mt-8 flex justify-center gap-4 animate-bounce">
          <button className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:bg-yellow-600 transition">
            Get Started
          </button>
          <button className="px-8 py-4 bg-transparent border border-yellow-500 text-yellow-500 font-bold rounded-full shadow-lg hover:bg-yellow-600 hover:text-black transition">
            Learn More
          </button>
        </div>
        <div className="absolute inset-0">
          <Image
            src="/crypto-hero.jpg"
            alt="Crypto Signals"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>
      </header>

      {/* Live Market Section */}
      <section className="py-16 bg-gray-800">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-10 animate-slide-in">
          Live Crypto Market 📊
        </h2>
        <div className="max-w-4xl mx-auto">
          {cryptoData ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(cryptoData).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gray-900 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition animate-zoom-in"
                >
                  <h3 className="text-2xl font-bold capitalize mb-4">{key}</h3>
                  <p className="text-3xl font-extrabold text-green-500">
                    ${value.usd.toLocaleString()}
                  </p>
                  <p className="text-gray-400 mt-2">USD</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400">Loading market data...</p>
          )}
        </div>
      </section>

      {/* Live Graph Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-10 animate-slide-in">
          Bitcoin Price History (Last 7 Days) 📈
        </h2>
        <div className="max-w-6xl mx-auto">
          {priceHistory.length > 0 ? (
            <Line
              data={{
                labels: labels,
                datasets: [
                  {
                    label: "BTC Price (USD)",
                    data: priceHistory,
                    borderColor: "rgb(255, 205, 86)",
                    backgroundColor: "rgba(255, 205, 86, 0.2)",
                    tension: 0.4,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                },
              }}
            />
          ) : (
            <p className="text-center text-gray-400">Loading graph...</p>
          )}
        </div>
      
      </section>

      {/* Dynamic Reviews Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
        <h2 className="text-4xl font-bold text-center text-white mb-12 animate-fade-in">
          What Our Clients Say 🌟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl text-center shadow-lg hover:scale-105 transform transition animate-slide-in"
            >
              <h3 className="text-xl font-bold mb-2">{review.name}</h3>
              <p className="text-gray-300 mb-4">{review.feedback}</p>
              <p className="text-yellow-400">{"⭐".repeat(Math.round(review.rating))}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Section */}
      <section className="py-16 bg-gray-800">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-10 animate-slide-in">
          Why Choose Crypto Signals Pro? 💼
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-yellow-500">Real-Time Signals</h3>
            <p className="text-gray-300 mt-4">
              Get instant updates on the latest market trends and crypto signals to make informed decisions.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-yellow-500">AI-Driven Insights</h3>
            <p className="text-gray-300 mt-4">
              Leverage cutting-edge AI technology to predict market movements and maximize profits.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-yellow-500">Expert Strategies</h3>
            <p className="text-gray-300 mt-4">
              Learn from industry experts and implement proven strategies for success in crypto trading.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-yellow-500">24/7 Support</h3>
            <p className="text-gray-300 mt-4">
              Our dedicated team is here to assist you at any time, ensuring a seamless trading experience.
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-16 bg-gray-800">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-10 animate-fade-in">
          Subscribe for Exclusive Updates 📬
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 mb-6">
            Join our newsletter to receive the latest crypto signals and market insights directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full sm:w-auto rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-md shadow-lg hover:bg-yellow-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Telegram Section */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-indigo-600 text-center">
        <h2 className="text-4xl font-bold text-white mb-8 animate-fade-in">
          Join Our Telegram Channel 💬
        </h2>
        <p className="text-lg text-gray-200 mb-6">
          Stay updated with real-time signals, expert insights, and exclusive offers. Click the button below to join our Telegram community now!
        </p>
        <a
          href="https://t.me/cryptosignalspro"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:bg-yellow-600 transition inline-block"
        >
          Join Telegram
        </a>
      </section>

    
    </div>
  );
};

export default CryptoSignalsPro;
