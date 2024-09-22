import React from "react"; 
import { Link } from "react-router-dom"; 
import Navbar from "../composants/Navbar"; 
import Main from "../layout/Main"; 
import "./Page404.scss"; 


export function ErrorPageNotFound() {
  return (
    <>
      <Navbar /> {/* Affiche la barre de navigation en haut de la page */}
      <Main> {/* Utilise le composant Main pour entourer le contenu principal */}
        <div className="error-page"> {/* Conteneur principal pour la page d'erreur */}
          <h1>404</h1> {/* Affiche le code d'erreur HTTP 404 */}
          <h2>Oops! La page que vous demandez n'existe pas</h2> {/* Message d'erreur pour indiquer que la page n'existe pas */}
          <Link to="/">Retourner sur la page d'accueil</Link> {/* Lien pour revenir à la page d'accueil */}
        </div>
      </Main>
    </>
  );
}