import React from "react";
import "./PageAppartements.scss";
import { ImageBanner } from "../composants/BannièreImages";
import { ApartmentHeader } from "../composants/InfosAppartements";
import { useApartment } from "../hooks/useApartment";
import ApartmentDetailsPanel from "../composants/ApartmentDetailsPanel";

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
        {/* Nouveau composant ApartmentDetailsPanel pour afficher la description de l'appartement */}
        <ApartmentDetailsPanel title="Description" content={flat.description} />

        {/* Nouveau composant ApartmentDetailsPanel pour afficher la liste des équipements */}
        <ApartmentDetailsPanel
          title="Equipements"
          content={
            <ul>
              {flat.equipments.map((eq, i) => (
                <li key={i}>{eq}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default ApartmentPage;