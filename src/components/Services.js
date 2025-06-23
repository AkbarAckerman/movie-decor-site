import React, { useState } from 'react';
import ModalForm from './ModalForm';
import './Services.css';

const servicesData = [
  {
    number: 1,
    title: 'Строительство декораций для кинофильмов',
    description: 'Декор-каркасы, интерьеры, экстерьеры',
  },
  {
    number: 2,
    title: 'Художественное оформление',
    description: 'Эксклюзивная художественная отделка интерьера со строительством стен и фасадов любой сложности.',
  },
  {
    number: 3,
    title: 'Реставрация и реконструкция объектов',
    description: 'Патинирование, стилизация под старину',
  },
  {
    number: 4,
    title: 'Благоустройство территорий',
    description: 'Парки и локации под ключ',
  },
  {
    number: 5,
    title: 'Дизайнерские фасадные решения',
    description: 'Создание эксклюзивных художественных фресок',
  },
];

const comfortData = [
  {
    title: 'Гарантия долговечности всех выполненных работ',
    description: 'Мы гарантируем высокое качество каждого элемента строительства благодаря строгому контролю на всех этапах работ.',
  },
  {
    title: 'Комплексное решение От идеи до декораций',
    description: 'Мы предлагаем полный цикл услуг – от проектирования до финишной отделки, что обеспечивает нашим клиентам максимальное удобство и уверенность в результате.',
    button: 'Получить консультацию',
  },
  {
    title: 'Квалифицированные специалисты для самых сложных проектов',
    description: 'Сильная команда строителей и художников с опытом в киноиндустрии.',
  },
  {
    title: 'Точное соответствие стилю проекта и графику работ',
    description: 'Прозрачные сроки выполнения.',
  },
];

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h2>Наши услуги</h2>
        {/* <a onClick={() => setIsModalOpen(true)} className="consult-btn">Получить консультацию</a> */}
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.number} className="service-card">
            <div className="service-number">{service.number}</div>
            <div className="service-title">{service.title}</div>
            <div className="service-desc">{service.description}</div>
          </div>
        ))}
      </div>

      <div className="comfort-block">
        <div className="white-layer"></div>
        <h2 className="comfort-title">Почему с нами комфортно работать?</h2>

        <div className="comfort-cards">
          {comfortData.map((item, idx) => (
            <div key={idx} className={`comfort-card card-${idx}`}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.button && (
                <button onClick={() => setIsModalOpen(true)} className="service-consult-btn small">
                  {item.button}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="comfort-cta">
          <h3>Заказать строительство под ключ</h3>
          <p>Закажите у нас полный цикл услуг и получите идеальный результат точно в срок!</p>
          <button onClick={() => setIsModalOpen(true)} className="comfort-contact-link">
            Связаться с нами →
          </button>
        </div>
      </div>

      {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}


export default Services;