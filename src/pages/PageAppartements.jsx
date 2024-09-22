import React, { useEffect, useState } from "react"; 
import { DescriptionPanel } from "../composants/Collapses"; 
import "./PageAppartements.scss"; 
import { ImageBanner } from "../composants/BannièreImages"; 
import { ApartmentHeader } from "../composants/InfosAppartements"; 
import { useApartment } from "../hooks/useApartment"; 


function ApartmentPage() {
  // Récupère les données de l'appartement en utilisant le hook personnalisé useApartment
  const flat = useApartment();
// Affiche un message de chargement tant que les données de l'appartement ne sont pas encore disponibles 
  if (flat == null) return <div>Loading...</div>;
  return (
    <div className="apartment-page">
      <ImageBanner pictures={flat.pictures} />
      <ApartmentHeader flat={flat} />
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel
          title="Equipements"
          content={flat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
