import React from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";

const properties = [
    { id: 1, title: "Luxury Apartment", location: "New York", price: "1,200,000", image: "/images/images1.jpg" },
    { id: 2, title: "Modern Villa", location: "California", price: "2,500,000", image: "/images/images2.jpg" },
    { id: 3, title: "Luxury Apartment", location: "Dubai", price: "1,200,000", image: "/images/images3.jpg" },
    { id: 4, title: "Beach House", location: "Miami", price: "3,000,000", image: "/images/images4.jpg" },
    { id: 5, title: "Penthouse Suite", location: "Los Angeles", price: "5,500,000", image: "/images/images5.jpg" },
    { id: 6, title: "Cozy Cottage", location: "Colorado", price: "750,000", image: "/images/images6.jpg" },
    { id: 7, title: "Skyline Apartment", location: "Chicago", price: "1,800,000", image: "/images/images7.jpg" },
    { id: 8, title: "Mountain Retreat", location: "Switzerland", price: "2,200,000", image: "/images/images8.jpg" },
    { id: 9, title: "Modern Loft", location: "San Francisco", price: "2,100,000", image: "/images/images9.jpg" },
    { id: 10, title: "Lake House", location: "Toronto", price: "1,500,000", image: "/images/images10.jpg" },
    { id: 11, title: "Countryside Villa", location: "Tuscany", price: "3,200,000", image: "/images/images11.jpg" },
    { id: 12, title: "City Penthouse", location: "London", price: "4,000,000", image: "/images/images12.jpg" },
    { id: 13, title: "Seaside Bungalow", location: "Malibu", price: "2,750,000", image: "/images/images13.jpg" },
    { id: 14, title: "Forest Cabin", location: "Norway", price: "1,100,000", image: "/images/images14.jpg" },
    { id: 15, title: "Historic Mansion", location: "Paris", price: "7,800,000", image: "/images/images15.jpg" },
    { id: 16, title: "Riverside Condo", location: "Singapore", price: "3,400,000", image: "/images/images16.jpg" },
    { id: 17, title: "Luxury Townhouse", location: "Washington D.C.", price: "2,600,000", image: "/images/images17.jpg" },
    { id: 18, title: "Ski Chalet", location: "Aspen", price: "5,100,000", image: "/images/images18.jpg" },
    { id: 19, title: "Desert Villa", location: "Arizona", price: "1,950,000", image: "/images/images19.jpg" },
    { id: 20, title: "Island Paradise", location: "Bali", price: "2,900,000", image: "/images/images20.jpg" },
    { id: 21, title: "Eco-Friendly Home", location: "Costa Rica", price: "1,350,000", image: "/images/images21.jpg" },
    { id: 22, title: "Cliffside Retreat", location: "Santorini", price: "3,600,000", image: "/images/images22.jpg" },
    { id: 23, title: "Ultra Modern Smart Home", location: "Tokyo", price: "6,500,000", image: "/images/images23.jpg" }
];


const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q")?.toLowerCase() || "";

  const filteredProperties = properties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchQuery) ||
      property.location.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Search Results for "{searchQuery}"</h1>
        {filteredProperties.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No properties found.</p>
        )}
      </div>
    </>
  );
};

export default SearchResults;
