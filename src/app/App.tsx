import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="info">
          <p>
            Каких целей хочу достичь: улучшить свои навыки, с помощью новых знаний брать более сложные задачи в работе.
          </p>
          <p>
            Какими технологиями хотите овладеть: работа с изображениями, оптимизация кода, ументь применять популярные паттерны в разработке.
          </p>
          <p>
            Какими технологиями уже владеете: HTML, CSS, JS, TS, React, git
          </p>
          <p>
            Расскажите о себе и своем опыте: учусь в магистратуре понаправлению веб-технологии, работаю 2,5 года frontend-разработчиком, участвую в разработке корпоративных проектов на React.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
