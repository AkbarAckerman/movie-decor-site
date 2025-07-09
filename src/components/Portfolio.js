import React, { useState } from 'react';
import ModalForm from './ModalForm'; // обязательно укажи правильный путь

import './Portfolio.css';

import project1 from '../assets/project1.jpeg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpeg';
import project4 from '../assets/project4.jpeg';

const projects = [
  {
    img: project1,
    text: 'Выполнили комплексное оформление: от проектирования дизайна до финальной отделки. Результат – современный облик объекта.',
  },
  {
    img: project2,
    text: 'Благоустроили территорию парка, создав уютное пространство для отдыха жителей города.',
  },
  {
    img: project3,
    text: 'Выполнили работы по патинированию фасада здания.',
  },
  {
    img: project4,
    text: 'Выполнили работы по патинированию фасада здания.',
  },
];

const faqData = [
  {
    question: 'Какие гарантии ваших услуг?',
    answer: 'Мы предоставляем официальные гарантии качества на все виды наших услуг, включая договорные обязательства.',
  },
  {
    question: 'Сколько времени займет оказание услуги?',
    answer: 'Срок зависит от объема и сложности задачи. В среднем — от нескольких дней до пары недель.',
  },
  {
    question: 'Почему я должен выбрать вашу компанию?',
    answer: 'Мы обеспечиваем индивидуальный подход, высокое качество и соблюдение сроков выполнения работ.',
  },
  {
    question: 'Чем вы отличаетесь от конкурентов?',
    answer: 'Мы предлагаем полный цикл услуг — от идеи до финальной художественной отделки любой сложности.',
  },
  {
    question: 'Сколько я сэкономлю обратившись к вам?',
    answer: 'Наш подход помогает избежать лишних расходов и оптимизировать бюджет на всех этапах проекта.',
  },
];

function Portfolio() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-header">
        <h2>Наши реализованные проекты</h2>
        {/* <button className="consult-btn" onClick={() => setIsModalOpen(true)}>
          Получить консультацию
        </button> */}
      </div>

      <div className="portfolio-grid">
        {projects.map((item, index) => (
          <div key={index} className="portfolio-card">
            <img src={item.img} alt={`project-${index}`} />
            {item.text && (
              <div className="hover-overlay">
                <div className="hover-text">{item.text}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* <div className="portfolio-contact">
  <h3 className="portfolio-contact__title">
    Оставьте заявку и получите индивидуальное предложение
  </h3>
  <form className="portfolio-contact__form">
    <input type="text" placeholder="Ваше имя" className="portfolio-contact__input" />
    <div className="portfolio-contact__select-wrapper">
      <select className="portfolio-contact__select">
        <option value="ru">🇷🇺 Русский</option>
        <option value="en">🇬🇧 English</option>
        <option value="uz">🇺🇿 O‘zbek</option>
      </select>
    </div>
    <button type="submit" className="portfolio-contact__button">
      Отправить заявку
    </button>
  </form>
</div> */}

      <div className="faq-section">
        <h2 className="faq-title">Часто задаваемые вопросы</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {item.question}
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модалка */}
      {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}


export default Portfolio;
