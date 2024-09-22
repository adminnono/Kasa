import React from "react"; 
import "./PageAccueil.scss"; 
import Banner from "../layout/Bannière.jsx"; 
import ApartmentGrid from "../composants/GrilleAppartements.jsx"; 


function HomePage() {
  return (
    <>
      <Banner />
      <ApartmentGrid />
    </>
  );
}

export default HomePage;

