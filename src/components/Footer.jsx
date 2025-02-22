import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} RealEstate. All rights reserved.</p>
        <ul className="flex space-x-6">
          <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
