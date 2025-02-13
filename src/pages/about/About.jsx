import React from 'react';
import '../../css/about/about.css'; 

const teamMembers = [
  { id: 1, name: 'Гюсто', role: 'Шеф-кухар' },
  { id: 2, name: 'Ремі', role: 'Сомельє' },
  { id: 3, name: 'Якийсь мужик', role: 'Офіціант' },
];

function About() {
  return (
    <div className="about-container">
      <section id="about">
        <h2>Про Нас</h2>
        <p>
          Ласкаво просимо до "Ratatouille"! Ми пишаємося тим, що пропонуємо вам унікальні смакові враження та вишукану кухню.
        </p>
        <p>
          Наш ресторан створений з любов'ю до їжі та прагненням забезпечити вам теплу атмосферу та вишукане обслуговування.
        </p>
        <p>
          У нас ви знайдете широкий вибір страв, приготованих тільки зі свіжих і високоякісних інгредієнтів. Наші кухарі - талановиті професіонали, які люблять і розуміють кулінарне мистецтво.
        </p>
        <p>
          Завітайте до нас у будь-який день з 11:00 до 23:00, і ми з радістю зробимо ваш відпочинок особливим та незабутнім.
        </p>
        <p>
          Наша адреса: м. Миколаїв, вул. Соборна, буд 23
        </p>
        <p>
          Для бронювання або отримання додаткової інформації, будь ласка, зв'яжіться з нами за телефонами +1 123 456 7890 або email@example.com.
        </p>
      </section>

      <section id="team">
        <h3>Наша Команда</h3>
        <ul>
          {teamMembers.map((member) => (
            <li key={member.id}>
              <strong>{member.name}</strong> - {member.role}
            </li>
          ))}
        </ul>
      </section>

      <section id="social-media">
        <h3>Слідкуйте за нами у соціальних мережах:</h3>
        <ul>
          <li>
            <a href="посилання_на_вашу_сторінку_у_Facebook" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="посилання_на_вашу_сторінку_у_Instagram" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="посилання_на_вашу_сторінку_у_Twitter" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="посилання_на_вашу_сторінку_у_LinkedIn" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        
        </ul>
      </section>
    </div>
  );
}

export default About;
