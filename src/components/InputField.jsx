import React from "react";

const InputField = ({ 
  label, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  required = false 
}) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 text-gray-700 font-medium">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
