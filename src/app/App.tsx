import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>Цель</b>: Изучить архитектуру современных frontend приложений на примере React.
        </p>
        <p>Web-разработчик (PHP, GO, JS, Базы данных, RabbitMQ, Docker, CI/CD)</p>
        <p>Проектирую, разрабатываю и внедряю CRM и ERP системы.</p>
        <p>
          Мое портфолио:{' '}
          <a href={'https://zaytcev.com'} target={'_blank'} rel="noreferrer">
            zaytcev.com
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
