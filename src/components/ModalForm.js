// src/components/ModalForm.js
import React, { useState } from 'react';
import './ModalForm.css';

function ModalForm({ onClose }) {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Введите имя';
    if (!formData.phone.trim()) newErrors.phone = 'Введите телефон';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Replace this with your Formspree endpoint
    const response = await fetch('https://formspree.io/f/mkgbwaaq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', phone: '' });
      setErrors({});
    } else {
      alert('Ошибка при отправке. Попробуйте позже.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        {submitted ? (
          <p className="success">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
        ) : (
          <>
            <h2>Оставьте заявку</h2>
            <p>Наш менеджер свяжется с вами в ближайшее время и ответит на все интересующие вопросы</p>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}

              <button type="submit">Отправить</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ModalForm;
