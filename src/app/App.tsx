import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from './components/layout.module';
import { Header } from './components/header.module';
import { Logo } from './components/logo.module';
import { Operation } from './components/operation/operation';
import {ImageSlider}  from './components/custom-slider/image.slider';
import access from  "/Users/marinayavkina/Documents/react_course/hw2/MarinaBastion.github.io/src/stories/assets/code-brackets.svg";
import gith from "/Users/marinayavkina/Documents/react_course/hw2/MarinaBastion.github.io/src/app/assets/icons8-logo.svg"

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>Явкина Марина Александровна
        <ul>
        <li>Самостоятельно уметь создавать веб приложения с использованием react и разворачивать на сервере.
        Освоить современые технологии разработкию.</li>
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
