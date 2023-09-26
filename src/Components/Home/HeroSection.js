import React from "react";
import "../styles/HeroSection.css";
function HeroSection() {
  const heroStyles = {
    backgroundImage: `url(/images/b1.webp)`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <section className="hero" style={heroStyles}>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Crypto Watcher</h1>
        <p className="hero-description">
          Explore the world of cryptocurrencies and stay updated with the latest
          market trends.
        </p>
        <button className="hero-button">Get Started</button>
      </div>
    </section>
  );
}

export default HeroSection;
