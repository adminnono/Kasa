import React, { useState } from "react";
import "./ApartmentDetailsPanel.scss";

function ApartmentDetailsPanel({ title, content }) {
  // Gère la visibilité du contenu avec un état local
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Fonction pour basculer la visibilité du contenu
  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  // Classes CSS dynamiques pour le contenu et l'icône
  const contentClass = `apartment-details__content ${isContentVisible ? "visible" : "hidden"}`;
  const chevronClass = `fas ${isContentVisible ? "fa-chevron-up" : "fa-chevron-down"}`;

  return (
    <div className="apartment-details__panel">
      <div className="apartment-details__header" onClick={toggleContentVisibility}>
        <span>{title}</span>
        <i className={chevronClass}></i>
      </div>
      <div className={contentClass}>
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
    </div>
  );
}

export default ApartmentDetailsPanel;