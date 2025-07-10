import React, { useState } from 'react';
import ModalForm from './ModalForm';
import './Services.css';

// Icons (replace with your real paths)
import icon1 from '../icons/Icon1.svg';
import icon2 from '../icons/Icon2.svg';
import icon3 from '../icons/Icon3.svg';
import icon4 from '../icons/Icon4.svg';
import icon5 from '../icons/Icon5.svg';

const servicesData = [
  {
    icon: icon1,
    title: 'Строительство декораций для кинофильмов',
    description: 'Общестроительные работы, экстерьеры, интерьеры.',
  },
  {
    icon: icon2,
    title: 'Художественно-бутафорские услуги',
    description: 'Живописная роспись стен и фасадов зданий, придание соответсвия исторической эпохе, патинирование и др.',
  },
  {
    icon: icon3,
    title: 'Реставрация и реконструкция зданий',
    description: 'Восстановление архитектурного облика здания.',
  },
  {
    icon: icon4,
    title: 'Благоустройство территорий',
    description: 'Укладка камня, озеленение.',
  },
  {
    icon: icon5,
    title: 'Разработка проекта, эскизов и референсов',
    description: 'Создание эксклюзивных художественных фресок.',
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
        {servicesData.map((service, idx) => (
          <div key={idx} className="service-card">
            <img src={service.icon} alt="icon" className="service-icon" />
            <div className="divider-line"></div>
            <div className="service-title">{service.title}</div>
            <div className="service-desc">{service.description}</div>
          </div>
        ))}

        <div className="service-card consult-card" onClick={() => setIsModalOpen(true)}>
          <div className="consult-text">Получить консультацию</div>
        </div>
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