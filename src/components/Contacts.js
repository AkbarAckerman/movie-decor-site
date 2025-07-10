import React, { useState } from 'react';
import './Contact.css';
import contactImage from '../assets/contact-image.jpeg';
import { Link } from 'react-scroll';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    lang: 'ru'
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Automatically add + at start of phone
    if (name === 'phone') {
      const digitsOnly = value.replace(/[^\d]/g, '');
      const formatted = '+' + digitsOnly;
      setFormData({ ...formData, phone: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Введите имя';
    const digits = formData.phone.replace(/[^\d]/g, '');
    if (!formData.phone.startsWith('+') || digits.length !== 12) {
      newErrors.phone = 'Введите номер телефона полностью';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const response = await fetch("https://formspree.io/f/mkgbwaaq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: `Язык: ${formData.lang}`
      })
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', lang: 'ru' });
      setErrors({});
    } else {
      alert("Ошибка отправки. Попробуйте позже.");
    }
  };

  return (
    <section id="contacts" className="contacts-section">
      <div className="contact-wrapper">
        <div className="contact-form-box">
          <h2>Свяжитесь с нами и<br />мы ответим на все вопросы</h2>
          <p>Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время</p>

          {submitted ? (
            <p className="success">С вами свяжутся в ближайшее время.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <input
                type="tel"
                name="phone"
                placeholder="Телефон номер"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}

              <input
                type="email"
                name="email"
                placeholder="Ваш E-mail"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <button type="submit">Отправить заявку</button>
            </form>
          )}
        </div>

        <div className="contact-image-box">
          <img src={contactImage} alt="Contact" />
        </div>
      </div>

      {/* Footer remains unchanged */}
      <div className="footer-info">
        <div className="footer-column">
          <h4>Навигация:</h4>
          <p><Link to="home" smooth={true} duration={500}>Главная</Link></p>
          <p><Link to="portfolio" smooth={true} duration={500}>Портфолио</Link></p>
          <p><Link to="services" smooth={true} duration={500}>Услуги</Link></p>
        </div>
        <div className="footer-column">
          <h4>Всегда на связи:</h4>
          {/* <p className='social-media'>
    <a
      href="https://t.me/Miracle_mlbb"
      target="_blank"
      rel="noopener noreferrer"
    >
      Telegram
    </a>
  </p> */}
  <p className='social-media'>
    <a
      href="https://wa.me/79233839999"
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp
    </a>
  </p>
        </div>
        <div className="footer-column">
          <h4>Наши контакты</h4>
          <div className="big-phone">+7 (495) 101-17-75</div>
          <div className='footer-email'>moskinopro@mail.ru</div>
          <p>г.Москва</p>
        </div>
      </div>

      <div className="footer-bottom-line">
        <div className='footer-politics'>Политика конфиденциальности</div>
        <div className='footer-kinoproject'>Кинопроект</div>
        <div className='footer-politics'>Соглашение о персональных данных</div>
      </div>
    </section>
  );
}

export default Contacts;
