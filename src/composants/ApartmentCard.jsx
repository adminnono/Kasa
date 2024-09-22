import React from "react"; 
import "./ApartmentCard.scss"; 
import { Link } from "react-router-dom"; 


function ApartmentCard(props) {
  return (
    
    <Link
      to="/appartement" 
      state={{
        apartmentId: props.id 
      }}
    >
      <div className="apartment">
        {/* Affiche l'image de l'appartement */}
        <img src={props.imageUrl} alt="" /> 
        {/* Affiche le titre de l'appartement sous l'image */}
        <div className="apartment__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default ApartmentCard; 