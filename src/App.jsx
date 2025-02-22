import React from "react";
import ReactDOM from "react-dom";
import index from "./routes/index.jsx"
import AuthProvider from "./context/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <index />
  </AuthProvider>,
  document.getElementById("root")
);
