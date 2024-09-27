import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; 

export function useApartment() {
  // État pour stocker les informations de l'appartement
  const [flat, setFlat] = useState(null);

  // Utilisation de useLocation pour obtenir l'emplacement actuel de la route
  const location = useLocation();
  
  useEffect(() => {
    // Création d'un contrôleur d'annulation pour annuler la requête fetch si le composant est démonté
    const abortController = new AbortController();

    if (!location.state || !location.state.apartmentId) {
      console.error("apartmentId is missing in location.state");
      return; // Ne pas continuer si apartmentId est manquant
    }

    // Fonction asynchrone pour récupérer les données des appartements
    fetch("db.json", { signal: abortController.signal })
      .then((res) => res.json()) // Parse la réponse en JSON
      .then((flats) => {
        // Trouve l'appartement correspondant à l'identifiant passé dans l'état de la route
        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        // Met à jour l'état avec les informations de l'appartement trouvé
        setFlat(flat);
      })
      .catch((error) => {
        // Si l'erreur est une AbortError, on l'ignore
        if (error.name === 'AbortError') {
          console.log("Fetch aborted");
        } else {
          console.error(error); // Sinon, on log les autres erreurs
        }
      });

    // Fonction de nettoyage qui annule la requête fetch si le composant est démonté
    return () => {
      abortController.abort();
    };
  }, [location.state?.apartmentId]); // Dépendance : le hook se déclenche lorsque l'identifiant de l'appartement change

  return flat;
}