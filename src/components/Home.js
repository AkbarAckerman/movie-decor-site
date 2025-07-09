import React, { useState } from 'react';
import ModalForm from './ModalForm';
// import { Link } from 'react-scroll';
import './Home.css';

function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
<section id="home" className="home-section">
  {/* <div className="dark-layer"></div> */}
  <div className="hero-content">
    <div className="hero-text-content">
      <h1>Строительство декораций<br />любой сложности</h1>
      <p>
        Реализуем проекты от идеи до воплощения, под ключ!<br />
        Полный цикл услуг, опытные художники и точный контроль на каждом этапе.
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
