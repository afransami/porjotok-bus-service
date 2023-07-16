import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Route/Route.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./components/Provider/AuthProvider/AuthProvider.jsx";
import { Toaster } from 'react-hot-toast';

const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider context={helmetContext}>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
        <Toaster />
      </React.StrictMode>
    </AuthProvider>
  </HelmetProvider>
);
