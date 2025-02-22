import React, { createContext, useState, useEffect } from "react";

// Create Auth Context
export const AuthContext = createContext();

// AuthProvider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user is already logged in (Persist user session)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
