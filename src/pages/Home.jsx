import React from "react";
import { Link } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";

const Home = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Apartment",
      location: "New York",
      price: "1,200,000",
      image: "/images/images1.jpg",
    },
    {
      id: 2,
      title: "Modern Villa",
      location: "California",
      price: "2,500,000",
      image: "/images/images2.jpg",
    },
    {
      id: 3,
      title: "Luxury Apartment",
      location: "Dubai",
      price: "1,200,000",
      image: "/images/images3.jpg",
    },
    {
      id: 4,
      title: "Beach House",
      location: "Miami",
      price: "3,000,000",
      image: "/images/images4.jpg",
    },
    {
      id: 5,
      title: "Penthouse Suite",
      location: "Los Angeles",
      price: "5,500,000",
      image: "/images/images5.jpg",
    },
    {
      id: 6,
      title: "Cozy Cottage",
      location: "Colorado",
      price: "750,000",
      image: "/images/images6.jpg",
    },
    {
      id: 7,
      title: "Skyline Apartment",
      location: "Chicago",
      price: "1,800,000",
      image: "/images/images7.jpg",
    },
    {
      id: 8,
      title: "Mountain Retreat",
      location: "Switzerland",
      price: "2,200,000",
      image: "/images/images8.jpg",
    },
    {
      id: 9,
      title: "Modern Loft",
      location: "San Francisco",
      price: "2,100,000",
      image: "/images/images9.jpg",
    },
    {
      id: 10,
      title: "Lake House",
      location: "Toronto",
      price: "1,500,000",
      image: "/images/images10.jpg",
    },
    {
      id: 11,
      title: "Countryside Villa",
      location: "Tuscany",
      price: "3,200,000",
      image: "/images/images11.jpg",
    },
    {
      id: 12,
      title: "City Penthouse",
      location: "London",
      price: "4,000,000",
      image: "/images/images12.jpg",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Find Your Dream Home
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/properties"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
