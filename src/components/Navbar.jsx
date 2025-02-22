// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // Using Lucide Icons (Install via npm install lucide-react)

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center p-4">
        
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-blue-600">RealEstate</Link>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600">
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Navigation Links */}
//         <ul className={`md:flex space-x-6 items-center ${isOpen ? "block" : "hidden"} md:block`}>
//           <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
//           <li><Link to="/properties" className="text-gray-700 hover:text-blue-600">Properties</Link></li>
//           <li><Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
//           <li><Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Login</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Using Lucide Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">RealEstate</Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-64 outline-none"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
            Search
          </button>
        </form>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex space-x-6 items-center ${isOpen ? "block" : "hidden"} md:block`}>
          <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><Link to="/properties" className="text-gray-700 hover:text-blue-600">Properties</Link></li>
          <li><Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
          <li><Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Login</Link></li>
        </ul>
      </div>

      {/* Search Bar for Mobile */}
      {isOpen && (
        <form onSubmit={handleSearch} className="flex md:hidden items-center border rounded-lg m-4">
          <input
            type="text"
            placeholder="Search properties..."
            
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-full outline-none"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
            Search
          </button>
        </form>
      )}
    </nav>
  );
};

export default Navbar;
