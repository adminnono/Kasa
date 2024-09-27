import React from "react"; 
import "./ApartmentCard.scss"; 
import { Link } from "react-router-dom"; 

function ApartmentCard(props) { 
  return (
    // Crée un lien cliquable qui redirige vers la page de l'appartement
    <Link
      to="/appartement" // Spécifie la route cible lorsque l'utilisateur clique sur le lien
      state={{
        apartmentId: props.id // Passe l'ID de l'appartement en tant qu'état à la page cible via React Router
      }}
    >
      <div className="apartment">
        {/* Affiche l'image de l'appartement, l'URL de l'image est passée via les props */}
        <img src={props.imageUrl} alt="" />
        {/* Affiche le titre de l'appartement sous l'image, le titre est passé via les props */}
        <div className="apartment__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default ApartmentCard; // Exporte le composant pour pouvoir l'utiliser dans d'autres fichiers