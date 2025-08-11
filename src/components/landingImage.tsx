import Image from "next/image";
import React from "react";

const LandingImage = () => {
  return (
    <div className="img-component">
        <div className="horizontal-line"></div>
      <img src="/hero-img.webp" alt="Nothing" className="hero-img"/>
    </div>
  );
};

export default LandingImage;
