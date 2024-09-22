import React from "react"; 
import { createBrowserRouter, Outlet } from "react-router-dom"; 
import HomePage from "../pages/PageAccueil"; 
import Footer from "../layout/Footer"; 
import Main from "../layout/Main"; 
import Navbar from "../composants/Navbar"; 
import ApartmentPage from "../pages/PageAppartements"; 
import About from "../pages/PageApropos"; 
import { ErrorPageNotFound } from "../pages/Page404"; 

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};


export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />, // Utilise HeaderFooterLayout comme layout pour toutes les routes définies en dessous
    errorElement: <ErrorPageNotFound />, // Spécifie la page d'erreur à afficher en cas de route non trouvée
    children: [
      {
        path: "/", // Route pour la page d'accueil
        element: <HomePage /> // Rend le composant HomePage lorsque la route est "/"
      },
      {
        path: "/appartement", // Route pour la page des appartements
        element: <ApartmentPage /> // Rend le composant ApartmentPage lorsque la route est "/appartement"
      },
      {
        path: "/a-propos", // Route pour la page À propos
        element: <About /> // Rend le composant About lorsque la route est "/a-propos"
      }
    ]
  }
]);