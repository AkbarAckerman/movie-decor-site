import React from 'react';
import './AboutUs.css';
import aboutImage from '../assets/about-image.jpg';

import DevineBrownLine from '../icons/devine_brown_line.svg';

export default function AboutUs() {
  return (
    <section id="aboutus" className="aboutus-section">
      <div className="aboutus-container">
        <div className="aboutus-text">
          <img src={DevineBrownLine} alt="divider" className="devine-line-top" />
          <h2>О нас</h2>
          <p>
            Мы создаем натуралистичные декорации для киносъемки и реализации замыслов вашего мероприятия. 
            В нашей команде более 100 бутафоров, художников и реставраторов с опытом участия в различных проектах включая десятки локаций в Кинопарке "Москино"
          </p>
          <img src={DevineBrownLine} alt="divider" className="devine-line-bottom" />
        </div>
        <div className="aboutus-image">
          <img src={aboutImage} alt="О нас" />
        </div>
      </div>
    </section>
  );
}
