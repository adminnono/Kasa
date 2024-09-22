import React, { useEffect, useState } from "react"; 
import "./GrilleAppartements.scss"; 
import ApartmentCard from "./ApartmentCard.jsx"; 
import { useApartments } from "../hooks/useApartments.jsx"; 


function ApartmentGrid() {
  // Utilisation du hook personnalisé pour récupérer la liste des appartements
  const apartments = useApartments();

  return (
    // Conteneur de la grille des appartements
    <div className="grid">
      {/* Parcours de la liste des appartements pour créer une carte pour chaque appartement */}
      {apartments.map((apartment) => (
        <ApartmentCard
          title={apartment.title} 
          imageUrl={apartment.cover} 
          id={apartment.id} 
          key={apartment.id} 
        />
      ))}
    </div>
  );
}

export default ApartmentGrid; 
