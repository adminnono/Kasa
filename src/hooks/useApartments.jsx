import { useState, useEffect } from "react";

export const useApartments = () => {
  // État pour stocker la liste des appartements  
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    // Création d'un contrôleur d'annulation pour annuler la requête fetch si le composant est démonté
    const abortController = new AbortController();

    // Fonction asynchrone pour récupérer les données des appartements
    fetch("db.json", { signal: abortController.signal }) // Envoie une requête GET au fichier db.json
      .then((res) => res.json()) // Convertit la réponse en JSON
      .then((res) => setApartments(res)) // Met à jour l'état avec la liste des appartements récupérés
      .catch((error) => {
        // Si l'erreur est une AbortError, on l'ignore
        if (error.name === 'AbortError') {
          console.log("Fetch aborted");
        } else {
          console.error(error); // On log les autres erreurs
        }
      });

    // Fonction de nettoyage qui annule la requête fetch si le composant est démonté
    return () => {
      abortController.abort(); // Annule la requête fetch pour éviter les fuites de mémoire
    };
  }, []);

  return apartments;
};