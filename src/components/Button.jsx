import React from "react";

const Button = ({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary", 
  size = "md", 
  isLoading = false, 
  disabled = false 
}) => {
  
  const baseStyles = "rounded-lg font-semibold transition-all duration-300 flex items-center justify-center";
  
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300",
    outline: "border border-gray-600 text-gray-600 hover:bg-gray-100 disabled:bg-gray-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {isLoading ? (
        <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
