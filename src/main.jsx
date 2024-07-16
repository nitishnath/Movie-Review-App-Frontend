import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import ThemeProvider from "./context/ThemeProvider.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ThemeProvider>
       
      </ThemeProvider> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
