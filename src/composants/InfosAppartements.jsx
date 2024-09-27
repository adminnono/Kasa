import React from "react"; 
import "./InfosAppartements.scss"; 


export function ApartmentHeader({ flat }) { 
  // Déclare un composant fonctionnel nommé "ApartmentHeader" qui reçoit un objet "flat" comme prop

  // Déstructure l'objet `flat.host` pour récupérer directement le nom de l'hôte
  const { name } = flat.host;

  // Sépare le nom complet de l'hôte en prénom et nom grâce à la méthode `split()`
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="apartment__header">
      {/* Conteneur principal pour l'en-tête de l'appartement */}

      <div className="apartment__title">
        {/* Affiche le titre et la localisation de l'appartement */}

        <h1>{flat.title}</h1>
        {/* Affiche le titre de l'appartement passé dans l'objet "flat" */}
        
        <h2>{flat.location}</h2>
        {/* Affiche la localisation de l'appartement */}
        
        <div className="apartment__tags">
          {/* Boucle à travers les tags de l'appartement et crée un élément <span> pour chaque tag */}
          {flat.tags.map((tag) => (
            <span key={tag}>{tag}</span>
            // Pour chaque tag, un élément <span> est généré. La clé `key` assure une bonne gestion des éléments par React
          ))}
        </div>
      </div>

      <div className="apartment__owner">
        {/* Conteneur pour les informations sur l'hôte */}

        <div className="apartment__owner__details">
          {/* Affiche le prénom et le nom de l'hôte */}
          
          <h3>
            {/* Sépare le prénom et le nom, et les affiche dans des <span> distincts */}
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>

          <div className="apartment__owner__badge">
            {/* Affiche la photo de l'hôte */}
            <img src={flat.host.picture} alt="" />
            {/* L'URL de l'image est récupérée depuis l'objet "flat.host.picture" */}
          </div>
        </div>

        <div className="apartment__owner__stars">
          {/* Affiche une note sous forme d'étoiles, en fonction de la propriété "rating" de l'appartement */}
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={flat.rating >= num ? "on" : ""}>
              ★
              {/* Si la note de l'appartement est supérieure ou égale au numéro de l'étoile, la classe "on" est appliquée pour remplir l'étoile */}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}