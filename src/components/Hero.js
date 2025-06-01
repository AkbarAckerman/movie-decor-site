import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.png';

function Hero() {
  return (
    <section className="hero">
      <img src={heroImage} alt="Film Reel" className="hero-img" />
      <h1>ПРОИЗВОДСТВО ДЕКОРАЦИЙ ДЛЯ КИНО</h1>
      <p className="subtitle">
        Cгoдaйтe декорации для фильмов, видео и киносъёмки, <br />
        сценическое рутoофтcтвoм, рaзгисиo роспиcй фасадов зданий
      </p>
    </section>
  );
}

export default Hero;
