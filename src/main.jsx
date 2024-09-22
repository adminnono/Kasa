import React from "react"; 
import ReactDOM from "react-dom/client"; 
import { RouterProvider } from "react-router-dom"; 
import { router } from "./routes/router"; 

// Crée la racine de l'application React et la monte sur l'élément avec l'ID "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> {/* Active les vérifications strictes pour identifier les problèmes potentiels dans l'application */}
    <RouterProvider router={router} /> {/* Fournit le routeur configuré à l'ensemble de l'application */}
  </React.StrictMode>
);