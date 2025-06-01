import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Введите имя';
    if (!formData.phone.trim()) newErrors.phone = 'Введите телефон';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }
    if (!formData.message.trim()) newErrors.message = 'Введите сообщение';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Send data via Formspree
    const response = await fetch("https://formspree.io/f/xblyreeb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setErrors({});
    } else {
      alert("Ошибка отправки. Попробуйте позже.");
    }
  };

  return (
    <section className="form-section">
      <h2>РАССЧИТАТЬ ЗАКАЗ</h2>
      <p>Индивидуальный подход к каждому проекту — проектируем, строим, снимаем.</p>

      {submitted ? (
        <p className="success">Спасибо! Ваша заявка отправлена.</p>
      ) : (
        <form onSubmit={handleSubmit}>
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

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <textarea
            name="message"
            placeholder="Сообщение"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit">ОТПРАВИТЬ</button>
        </form>
      )}
    </section>
  );
}

export default Form;
