import React from "react";

const RealEstateInfo = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="/images/images24.jpg"
          alt="Real Estate Overview"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">Explore Luxury Real Estate</h1>
          <p className="text-gray-600 text-lg mt-2">
            Discover the best real estate properties across the world. Whether you're looking for 
            a luxury apartment, a modern villa, or a beachfront retreat, we provide top-tier listings
            with detailed information to help you find your dream home.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Exclusive listings in premium locations</li>
            <li>Verified property details and legal transparency</li>
            <li>Professional assistance in buying & selling</li>
            <li>Luxury properties with modern amenities</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Contact Us</h2>
          <p className="text-gray-700 mt-2">
            📍 Office Location: 123 Real Estate Avenue, New York, NY  
            📞 Phone: +1 (555) 123-4567  
            ✉️ Email: info@realestate.com  
          </p>

          <button className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealEstateInfo;
