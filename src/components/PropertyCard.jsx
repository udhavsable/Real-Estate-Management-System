// import React from "react";

// const PropertyCard = ({ property }) => {
//   return (
//     <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
//       <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h2 className="text-lg font-bold">{property.title}</h2>
//         <p className="text-gray-600">{property.location}</p>
//         <p className="text-green-600 font-semibold">${property.price}</p>
//         <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">View Details</button>
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;

import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{property.title}</h2>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-green-600 font-semibold">${property.price}</p>
        {/* Link to Property Details Page */}
        <Link to={`/property/${property.id}`}>
          <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
