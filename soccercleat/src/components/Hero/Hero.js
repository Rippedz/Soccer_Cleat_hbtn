import React from 'react';
import './Hero.css';
import backgroundImage from '../Hero/background.png'; // Chemin vers l'image

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2>Bienvenue sur SoccerCleat</h2>
      <p>Trouvez les meilleures chaussures de foot ici.</p>
    </section>
  );
}

export default Hero;