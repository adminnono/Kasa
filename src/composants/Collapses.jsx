import React, { useState } from "react"; 
import "./Collapses.scss"; 


export function DescriptionPanel(props) {
  // Déclaration d'un état local isContentVisible pour savoir si le contenu est visible ou caché
  const [isContentVisible, setIsContentVisible] = useState(true);

  // Fonction pour inverser l'état de visibilité du contenu (afficher/masquer)
  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  // Détermination des classes CSS à appliquer en fonction de l'état de visibilité du contenu
  const contentClass = (isContentVisible ? "visible" : "hidden") + " description__content";
  const chevronClass = (isContentVisible ? "fa-chevron-down" : "fa-chevron-up") + " fas";

  return (
    <div className="description__panel">
      {/* En-tête du panneau avec un titre et une icône, cliquable pour afficher/masquer le contenu */}
      <p className="description__header" onClick={showContent}>
        <span>{props.title}</span>
        <i className={chevronClass}></i> {/* Icône de chevron indiquant l'état (ouvert/fermé) */}
      </p>
      {/* Contenu du panneau qui change de classe (visible ou caché) selon l'état */}
      <p className={contentClass}>{props.content}</p>
    </div>
  );
}