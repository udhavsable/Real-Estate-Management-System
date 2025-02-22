// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Dashboard from "../pages/Dashboard";
// import PropertyDetails from "../pages/PropertyDetails";

// const AppRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/properties" element={<PropertyDetails />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Properties from "./pages/Properties";  // ✅ Ensure this file exists
// import PropertyDetails from "./pages/PropertyDetails";

import Home from "../pages/Home";
import Properties from "../pages/Properties";   // ✅ Ensure this file exists
import PropertyDetails from "../pages/PropertyDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import AddProperty from "../pages/AddProperty";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../pages/Contact";
import SearchResults from "../pages/SearchResults";  // Import SearchResults Page
import RealEstateInfo from "../components/RealEstateInfo";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />  {/* ✅ Check this */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
      <RealEstateInfo />
      <Footer />
    </>
  );
};

export default AppRoutes;

