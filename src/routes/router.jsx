import React from "react"; 
import { createBrowserRouter, Outlet } from "react-router-dom"; // Importe les fonctionnalités de React Router pour gérer la navigation
import HomePage from "../pages/PageAccueil"; // Importe le composant de la page d'accueil 
import Footer from "../layout/Footer"; // Importe le composant du pied de page
import Main from "../layout/Main"; // Importe le composant principal qui contient le contenu de la page
import Navbar from "../composants/Navbar"; // Importe le composant de la barre de navigation
import ApartmentPage from "../pages/PageAppartements"; // Importe le composant pour la page des appartements
import About from "../pages/PageApropos"; // Importe le composant pour la page "À propos"
import { ErrorPageNotFound } from "../pages/Page404"; // Importe la page à afficher en cas d'erreur 404 (page non trouvée)

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar /> {/* Affiche la barre de navigation en haut de chaque page */}
      <Main>
        <Outlet /> {/* Rend le contenu spécifique à chaque route à l'intérieur du layout principal */}
      </Main>
      <Footer /> {/* Affiche le pied de page en bas de chaque page */}
    </>
  );
};

// Création du routeur avec les routes de l'application
export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />, // Utilise HeaderFooterLayout comme modèle pour toutes les pages
    errorElement: <ErrorPageNotFound />, // Affiche la page 404 en cas de route non trouvée
    children: [
      {
        path: "/", // Route pour la page d'accueil ("/")
        element: <HomePage /> // Affiche le composant HomePage lorsque l'utilisateur est sur "/"
      },
      {
        path: "/appartement", // Route pour la page des appartements ("/appartement")
        element: <ApartmentPage /> // Affiche le composant ApartmentPage lorsque l'utilisateur est sur "/appartement"
      },
      {
        path: "/a-propos", // Route pour la page À propos ("/a-propos")
        element: <About /> // Affiche le composant About lorsque l'utilisateur est sur "/a-propos"
      }
    ]
  }
]);