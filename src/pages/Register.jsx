import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input name="name" type="text" placeholder="Full Name" className="w-full border p-2 rounded-lg"
          onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" className="w-full border p-2 rounded-lg"
          onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" className="w-full border p-2 rounded-lg"
          onChange={handleChange} required />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
