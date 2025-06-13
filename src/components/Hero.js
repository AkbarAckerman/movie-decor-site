import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={heroImage} alt="Film Reel" className="hero-img" />
        <h1>КИНОПРОЕКТ</h1>
      </div>
      <div className="subtitle">
        Coздaйтe декорированную локацию для проведения своего уникального мероприятия, кино и видеосъемки.
        Производим художественно-бутафорские декорации от одной скульптуры до полноценного города для воплощения ваших идей в жизнь.
      </div>
      <div className="subtitle">
        Coздaйтe декорированную локацию для проведения своего уникального мероприятия, кино и видеосъемки.
        Производим художественно-бутафорские декорации от одной скульптуры до полноценного города для воплощения ваших идей в жизнь.
      </div>
    </section>
  );
}

export default Hero;
