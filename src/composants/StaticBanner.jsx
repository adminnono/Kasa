import React from "react";
import "./StaticBanner.scss"; 

const StaticBanner = () => {
  return (
    <div className="static-banner" style={{ height: "300px" }}>
      <img
        src="https://picsum.photos/800"
        alt="A propos banner"
        className="static-banner__image"
      />
    </div>
  );
};

export default StaticBanner;