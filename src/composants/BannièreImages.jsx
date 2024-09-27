import React, { useState } from "react"; 
import "./BannièreImages.scss"; 
export function ImageBanner(props) { 
  

  // Récupère le tableau d'images passé en `props.pictures`
  const pictures = props.pictures;

  // Initialise un état `currentPicture` pour gérer l'image actuellement visible
  const [currentPicture, setCurrentPicture] = useState(0);
  // `currentPicture` stocke l'index de l'image en cours, initialisé à 0 (la première image)

  // Fonction pour déterminer la classe CSS de chaque image, selon si elle est visible ou non
  const getClassName = (i) => {
    if (i === currentPicture) return "show"; 
    // Si l'index `i` correspond à l'image actuellement visible (`currentPicture`), on lui attribue la classe "show"
    return ""; 
    // Sinon, l'image n'a pas de classe spéciale et est cachée
  };

  // Fonction pour afficher l'image suivante dans le carrousel
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length); 
    // Incrémente `currentPicture` d'un, et revient à 0 lorsque la dernière image est atteinte (opérateur modulo)
  };

  // Fonction pour afficher l'image précédente dans le carrousel
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1; 
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1); 
      // Si on est sur la première image et qu'on clique "précédent", on revient à la dernière image
      return;
    }
    setCurrentPicture(currentPicture - 1); 
    // Sinon, décrémente `currentPicture` pour passer à l'image précédente
  };

  // Vérifie si des images sont disponibles
  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0; 
    // Retourne `true` si le tableau d'images existe et contient au moins une image
  };

  // Fonction pour afficher soit le carrousel d'images, soit une image par défaut s'il n'y a pas d'images
  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable()) {
      return <img src="https://picsum.photos/800" className="show" alt="" />; 
      // Si aucune image n'est fournie, affiche une image par défaut depuis un service comme Picsum
    }
    // Si des images sont disponibles, les mappe pour générer des balises `<img>` avec les bonnes classes
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={getClassName(i)}></img> 
      // Chaque image a une clé unique (son URL), une source `src` et la classe dynamique
    ));
  };

  return (
    <div className="image__banner">
      {/* Conteneur principal du carrousel d'images */}
      <div className="image__container">
        {/* Appelle la fonction qui gère l'affichage du carrousel ou d'une image par défaut */}
        {getCarouselOrDefaultImage()}
      </div>
      
      {/* Si des images sont disponibles, affiche les boutons de navigation et le compteur d'images */}
      {arePicturesAvailable() && (
        <>
          {/* Bouton pour passer à l'image précédente */}
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-left"></i> 
            {/* Icône de flèche gauche pour indiquer la navigation vers l'image précédente */}
          </button>
          
          {/* Compteur d'images affichant l'image actuelle et le nombre total d'images */}
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length} 
            {/* Affiche l'index de l'image visible (en partant de 1) et le nombre total d'images */}
          </span>
          
          {/* Bouton pour passer à l'image suivante */}
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fas fa-chevron-right"></i> 
            {/* Icône de flèche droite pour indiquer la navigation vers l'image suivante */}
          </button>
        </>
      )}
    </div>
  );
}