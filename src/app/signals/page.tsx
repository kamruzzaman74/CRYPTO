import React from "react";

const CryptoSignalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center">
      {/* Hero Section */}
      <div className="text-center mt-20 animate-fade-in">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Welcome to CryptoSignal
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Your trusted platform for accurate crypto market signals.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-6">
        {[
          { title: "Real-Time Signals", description: "Get instant updates on market trends." },
          { title: "Expert Analysis", description: "Insights from top crypto experts." },
          { title: "Custom Alerts", description: "Set alerts for your favorite coins." },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <h2 className="text-xl font-semibold text-purple-400">{feature.title}</h2>
            <p className="mt-2 text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-lg font-medium text-gray-300 mb-4">
          Ready to elevate your crypto game?
        </p>
        <button className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CryptoSignalPage;
