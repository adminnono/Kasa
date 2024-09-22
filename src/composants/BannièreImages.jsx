import React, { useState } from "react"; 
import "./BannièreImages.scss"; 


export function ImageBanner(props) {
  // Récupère les images passées en tant que props
  const pictures = props.pictures;

  // Utilise useState pour gérer l'image actuellement affichée dans le carrousel
  const [currentPicture, setCurrentPicture] = useState(0);

  // Fonction qui retourne la classe CSS "show" pour l'image actuellement affichée
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  // Fonction pour passer à l'image suivante
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  // Fonction pour revenir à l'image précédente
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  // Vérifie si des images sont disponibles
  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0;
  };

  // Retourne soit le carrousel d'images, soit une image par défaut si aucune image n'est disponible
  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable()) {
      return <img src="https://picsum.photos/800" className="show" alt="" />;
    }
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
    ));
  };

  return (
    <div className="image__banner">
      <div className="image__container">{getCarouselOrDefaultImage()}</div>
      {arePicturesAvailable() && (
        <>
          {/* Bouton pour aller à l'image d'avant */}
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-left"></i>
          </button>
          {/* Compteur d'images */}
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length}
          </span>
          {/* Bouton pour aller à l'image d'après */}
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}