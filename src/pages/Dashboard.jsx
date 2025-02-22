import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <p>Welcome, <span className="font-semibold">{user ? user.name : "Guest"}</span></p>
    </div>
  );
};

export default Dashboard;
