import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/index.jsx"; // ✅ Change 'index' to 'Routes'
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // ✅ Make sure this is included
import AuthProvider from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes />  {/* ✅ Capitalized component name */}
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
