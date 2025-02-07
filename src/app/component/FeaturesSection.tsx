// Import React and Icons
import React from "react";
import { FaShippingFast, FaHandHoldingHeart, FaTag, FaLeaf } from "react-icons/fa";


const FeaturesSection = () => {
  const features = [
    {
      icon: <FaShippingFast className=" text-3xl" />,
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard",
    },
    {
      icon: <FaHandHoldingHeart className=" text-3xl" />,
      title: "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      icon: <FaTag className=" text-3xl" />,
      title: "Unbeatable prices",
      description: "For our materials and quality you wont find better prices anywhere",
    },
    {
      icon: <FaLeaf className=" text-3xl" />,
      title: "Recycled packaging",
      description: "We use 100% recycled packaging to ensure our footprint is manageable",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, elem) => (
            <div
              key={elem}
              className="flex flex-col items-center text-center space-y-4">
            
              {feature.icon}
              <h3 className="text-lg font-medium text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
