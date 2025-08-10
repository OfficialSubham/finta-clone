import React from "react";

const Hero = () => {
  return (
    <div className="hero-root">
      <div className="badge">
        <span>QSBS just got better in July 2025?</span>
        <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
          <path
            stroke="#1E1F25"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity=".5"
            strokeWidth="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </div>
      <h1 className="hero-title">Magically simplify accounting and taxes</h1>
    </div>
  );
};

export default Hero;
