import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <div className="feature">
        <div className="icon">🏛️</div>
        <p>Проект</p>
      </div>
      <div className="feature">
        <div className="icon">🛠️</div>
        <p>Производство</p>
      </div>
      <div className="feature">
        <div className="icon">🎥</div>
        <p>Киносъемка</p>
      </div>
    </section>
  );
}

export default Features;
