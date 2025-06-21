import React, { useState } from 'react';
import ModalForm from './ModalForm';
// import { Link } from 'react-scroll';
import './Home.css';

function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
<section id="home" className="home-section">
  <div className="dark-layer"></div>
  <div className="hero-content">
  <div className="hero-text-content">
      <h1>
        <span className="desktop-line">Строительство и декор любой<br />сложности</span>
        <span className="mobile-line">Строительство и декор любой сложности</span>
      </h1>
      <p>
        <span className="desktop-line">
          Строительство любой сложности – от идей до воплощения под ключ! Полный цикл услуг,
          опытные художники и точный контроль на<br />каждом этапе.
        </span>
        <span className="mobile-line">
          Строительство любой сложности – от идей до воплощения под ключ! Полный цикл услуг,
          опытные художники и точный контроль на каждом этапе.
        </span>
      </p>
    </div>
    <button className="btn" onClick={() => setIsModalOpen(true)}>
          Получить консультацию
        </button>
  </div>
  
  {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} />}
</section>

  );
}

export default Home;
