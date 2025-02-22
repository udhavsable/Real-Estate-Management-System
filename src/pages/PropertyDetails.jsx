// import React from "react";
// import { useParams } from "react-router-dom";

// // Sample data (Replace with API call or state management)
// const properties = [
//   { id: "1", title: "Luxury Apartment", location: "New York", price: "1,200,000", description: "A beautiful apartment in the heart of New York.", image: "/images/images1.jpg" },
//   { id: "2", title: "Modern Villa", location: "California", price: "2,500,000", description: "A stylish villa with ocean views.", image: "/images/images2.jpg" },
//   { id: "3", title: "Cozy Cottage", location: "Texas", price: "850,000", description: "A charming cottage in Texas.", image: "/images/images3.jpg" }
// ];

// const PropertyDetails = () => {
//   const { id } = useParams();
//   const property = properties.find((prop) => prop.id === id);

//   if (!property) {
//     return <h2 className="text-center text-red-600 text-2xl mt-10">Property Not Found</h2>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-6 border rounded-lg shadow-md">
//       <img src={property.image} alt={property.title} className="w-full h-64 object-cover rounded-lg" />
//       <h2 className="text-2xl font-bold mt-4">{property.title}</h2>
//       <p className="text-gray-600">{property.location}</p>
//       <p className="text-green-600 font-semibold text-xl mt-2">${property.price}</p>
//       <p className="mt-4">{property.description}</p>
//     </div>
//   );
// };

// export default PropertyDetails;


import React from "react";
import { useParams } from "react-router-dom";
import properties from "../pages/Properties"; // Import properties data

const PropertyDetails = () => {
  const { id } = useParams(); // Get the property ID from the URL
  const property = properties.find((prop) => prop.id === parseInt(id));

  if (!property) {
    return <h2 className="text-center text-red-500">Property not found</h2>;
  }

  return (
    <div className="container mx-auto p-6">
      <img src={property.image} alt={property.title} className="w-full h-64 object-cover rounded-lg shadow-lg" />
      <h1 className="text-2xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-green-600 font-semibold text-xl">${property.price}</p>
      <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae arcu eget risus.</p>
    </div>
  );
};

export default PropertyDetails;