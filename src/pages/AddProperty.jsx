import React, { useState } from "react";

const AddProperty = () => {
  const [property, setProperty] = useState({ title: "", location: "", price: "", image: "" });

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Property Added:", property);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Property</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" type="text" placeholder="Title" className="w-full border p-2 rounded-lg" onChange={handleChange} required />
        <input name="location" type="text" placeholder="Location" className="w-full border p-2 rounded-lg" onChange={handleChange} required />
        <input name="price" type="text" placeholder="Price" className="w-full border p-2 rounded-lg" onChange={handleChange} required />
        <input name="image" type="text" placeholder="Image URL" className="w-full border p-2 rounded-lg" onChange={handleChange} />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
