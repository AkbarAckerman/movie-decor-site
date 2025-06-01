import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={heroImage} alt="Film Reel" className="hero-img" />
        <h1>ПРОИЗВОДСТВО ДЕКОРАЦИЙ ДЛЯ КИНО</h1>
      </div>
      <div className="subtitle">
        Cгoдaйтe декорации для фильмов, видео и киносъёмки, сценическое рутoофтcтвoм,<br />
        рaзгисиo роспиcй фасадов зданий
      </div>
    </section>
  );
}

export default Hero;
