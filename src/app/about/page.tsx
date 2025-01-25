import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">About Marketaven</h1>
        <p className="text-lg text-gray-700 mb-8">
          Marketaven is a leading platform offering crypto signals and trading solutions for traders and investors worldwide.
          Our goal is to empower individuals and organizations with the tools and knowledge they need to succeed in the fast-paced world of cryptocurrency trading.
        </p>
        
        {/* Section for Mission, Services, and Why Choose Us */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-12">
          
          {/* Mission */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Mission</h2>
            <div className="text-lg text-gray-700">
              At Marketaven, our mission is to provide accurate and timely crypto signals, backed by in-depth market analysis, to help our clients make informed trading decisions. We aim to simplify the complex world of cryptocurrency trading and make it accessible to everyone.
            </div>
          </div>

          {/* What We Offer */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">What We Offer</h2>
            <div className="text-lg text-gray-700">
              We offer a variety of services, including:
              <ul className="list-disc list-inside text-gray-700">
                <li>Real-time crypto trading signals</li>
                <li>Market analysis and insights</li>
                <li>Comprehensive trading strategies</li>
                <li>Personalized support for traders</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Why Choose Us?</h2>
            <div className="text-lg text-gray-700">
              Marketaven stands out for its accuracy, reliability, and customer-focused approach. Our team of experienced traders and analysts work tirelessly to provide signals that maximize profitability while minimizing risk. Whether you&apos;re a beginner or an experienced trader, Marketaven has the tools and resources to elevate your trading journey.
            </div>
          </div>

        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-blue-600">Join the Marketaven Community</h3>
          <p className="text-lg text-gray-700 mt-4">
            Start your trading journey with Marketaven today and experience the future of crypto trading. We are here to guide you every step of the way, helping you make informed decisions and achieve your trading goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
