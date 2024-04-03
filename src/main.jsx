import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import MainProvider from "./Context.jsx";
import router from "./routes.jsx";
import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  </React.StrictMode>
);
