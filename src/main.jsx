import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Route/Route.jsx";
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider context={helmetContext}>  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </HelmetProvider>
);
