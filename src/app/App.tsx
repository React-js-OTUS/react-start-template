import React from 'react';
import logo from './logo.svg';
import Styles from './App.css';

function App() {
  return (
    <div className={Styles.App}>
      <header className={Styles.Appheader}>
        <img src={logo} className={Styles.App_logo} alt="logo" />
        <p>Явкина Марина Александровна
        <ul>
        <li>Самостоятельно уметь создавать веб приложения с использованием react и разворачивать на сервере.
        Освоить современые технологии разработки.</li>
        <li>Планирую освоить разрабротку фронта на react, работу с figma , а также навыки верстки и стилизации  приложений.</li>
        <li>Владею навыками работы asp.net core 6/8, postgresql ,java script , typescript, angular.</li>
        <li>Опыт работы с delphi ,postgresql(разработка медицинских бд), asp.net 5, asp.net core 6, 8, angular.</li>
        </ul>
        </p>
      </header>
    </div>
  );
}

export default App;
