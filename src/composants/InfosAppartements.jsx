import React from "react"; 
import "./InfosAppartements.scss"; 


export function ApartmentHeader({ flat }) {
  // Déstructure l'objet `flat.host` pour récupérer le nom de l'hôte
  const { name } = flat.host;
  // Sépare le nom complet en prénom et nom
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="apartment__header">
      {/* Affiche le titre de l'appartement et sa localisation */}
      <div className="apartment__title">
        <h1>{flat.title}</h1>
        <h2>{flat.location}</h2>
        <div className="apartment__tags">
          {/* Affiche les tags de l'appartement */}
          {flat.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="apartment__owner">
        {/* Affiche les détails du propriétaire de l'appartement */}
        <div className="apartment__owner__details">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="apartment__owner__badge">
            {/* Affiche la photo de l'hôte */}
            <img src={flat.host.picture} alt="" />
          </div>
        </div>
        {/* Affiche les étoiles de notation en fonction de la note de l'appartement */}
        <div className="apartment__owner__stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={flat.rating >= num ? "on" : ""}>
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
