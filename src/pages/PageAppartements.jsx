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
      {/* Composant ImageBanner pour afficher les images de l'appartement sous forme de carrousel */}
      <ImageBanner pictures={flat.pictures} />

      {/* Composant ApartmentHeader pour afficher les informations de base sur l'appartement (titre, localisation, etc.) */}
      <ApartmentHeader flat={flat} /> 

      <div className="apartment__description__area">
        {/* Composant DescriptionPanel pour afficher la description de l'appartement */}
        <DescriptionPanel title="Description" content={flat.description} />

        {/* Composant DescriptionPanel pour afficher la liste des équipements */}
        <DescriptionPanel
          title="Equipements"
          content={flat.equipments.map((eq, i) => (
            // Affiche chaque équipement dans une liste <li> et utilise un key unique pour chaque item
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;