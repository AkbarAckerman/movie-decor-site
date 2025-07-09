import React from 'react';
import './AboutUs.css';
import aboutImage from '../assets/about-image.jpg'; // Make sure to use your actual image path

export default function AboutUs() {
  return (
    <section id="aboutus" className="aboutus-section">
      <div className="aboutus-container">
        <div className="aboutus-text">
          <h2>О нас</h2>
          <p>
          Мы создаем натуралистичные декорации для киносъемки и реализации замыслов вашего мероприятия. 
В нашей команде более 100 бутафоров, художников и реставраторов с опытом участия в различных проектах включая десятки локаций в Кинопарке "Москино"
          </p>
        </div>
        <div className="aboutus-image">
          <img src={aboutImage} alt="О нас" />
        </div>
      </div>
    </section>
  );
}
