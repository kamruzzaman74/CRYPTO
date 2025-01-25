import React from "react";

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29/month",
      features: [
        "Access to real-time signals",
        "Basic market analysis",
        "Email notifications",
      ],
    },
    {
      name: "Pro",
      price: "$59/month",
      features: [
        "Everything in Basic",
        "Advanced trading strategies",
        "Priority customer support",
        "Custom alerts",
      ],
    },
    {
      name: "Premium",
      price: "$99/month",
      features: [
        "Everything in Pro",
        "Personalized trading consultations",
        "Exclusive market insights",
        "VIP support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-400">Pricing Plans</h1>
        <p className="mt-4 text-lg text-gray-300">
          Choose the plan that best fits your crypto trading needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <h2 className="text-2xl font-semibold text-purple-400">{plan.name}</h2>
            <p className="mt-4 text-3xl font-bold">{plan.price}</p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-300 flex items-center">
                  <span className="mr-2 text-green-400">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full px-4 py-2 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 transition-all">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
