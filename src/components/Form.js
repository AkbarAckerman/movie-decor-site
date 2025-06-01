import React from 'react';
import './Form.css';

function Form() {
  return (
    <section className="form-section">
      <h2>РАССЧИТАТЬ ЗАКАЗ</h2>
      <p>Индивидуальный подход к каждому проекту — от подготовки до съёмок</p>
      <form>
        <input type="text" placeholder="Имя" />
        <input type="tel" placeholder="Телефон" />
        <input type="email" placeholder="E-mail" />
        <textarea placeholder="Сообщение" rows="4"></textarea>
        <button type="submit">ОТПРАВИТЬ</button>
      </form>
    </section>
  );
}

export default Form;
