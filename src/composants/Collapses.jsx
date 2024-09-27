import React, { useState } from "react"; 
import "./Collapses.scss"; 


export function DescriptionPanel(props) { 
  
  const [isContentVisible, setIsContentVisible] = useState(true);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
    // Inverse la valeur de `isContentVisible` chaque fois que la fonction est appelée
  };

  // Génère dynamiquement les classes CSS pour le contenu, selon qu'il est visible ou non
  const contentClass = (isContentVisible ? "visible" : "hidden") + " description__content";
  // Si `isContentVisible` est true, on ajoute la classe "visible", sinon "hidden" + classe "description__content" par défaut

  // Génère dynamiquement la classe CSS pour l'icône de chevron (haut ou bas) selon l'état de visibilité
  const chevronClass = (isContentVisible ? "fa-chevron-down" : "fa-chevron-up") + " fas";
  // Si `isContentVisible` est true, l'icône sera un chevron vers le bas, sinon vers le haut

  return (
    <div className="description__panel">
      {/* Conteneur principal du panneau descriptif */}

      <p className="description__header" onClick={showContent}>
        {/* En-tête du panneau avec un titre et un chevron pour indiquer l'état (ouvert/fermé) */}
        <span>{props.title}</span>
        {/* Affiche le titre passé via `props.title` */}
        <i className={chevronClass}></i> 
        {/* Affiche une icône de chevron qui change selon l'état d'ouverture du contenu */}
      </p>

      <p className={contentClass}>{props.content}</p>
      {/* Affiche le contenu du panneau, avec une classe dynamique pour gérer la visibilité */}
      {/* Le contenu est passé via `props.content` */}
    </div>
  );
}