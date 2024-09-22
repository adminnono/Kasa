import React from "react"; 
import "./Main.scss"; 


function Main({ children }) {
  return (
    <div className="main"> {/* Conteneur principal du composant avec une classe CSS pour le style */}
      {children} {/* Affiche les enfants passés au composant Main */}
    </div>
  );
}

export default Main; 
