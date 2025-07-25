import React, { useState } from 'react';
import { Link } from 'react-scroll';
import ModalForm from './ModalForm';
import './Navbar.css';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const openModal = () => {
    setIsModalOpen(true);
    closeMenu();
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Кинопроект</div>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="home" smooth={true} duration={500} onClick={closeMenu}>Главная</Link></li>
            <li><Link to="aboutus" smooth={true} duration={500} onClick={closeMenu}>О нас</Link></li>
            <li><Link to="services" smooth={true} duration={500} onClick={closeMenu}>Услуги</Link></li>
            <li><Link to="portfolio" smooth={true} duration={500} onClick={closeMenu}>Портфолио</Link></li>
            <li><Link to="contacts" smooth={true} duration={500} onClick={closeMenu}>Контакты</Link></li>
            <div className="mobile-extra">
              <div className="phone mobile-phone">+7 (495) 101-17-75</div>
              <button onClick={openModal} className="btn-contact mobile-btn">Консультация</button>
            </div>
          </ul>

          <div className="navbar-right">
            {/* <div className="phone">+7 (495) 101-17-75</div> */}
            {/* <button onClick={openModal} className="btn-contact">Консультация</button> */}
          </div>

          <div className="burger" onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </nav>

      {isModalOpen && <ModalForm onClose={closeModal} />}
    </>
  );
}

export default Navbar;
