import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p>
            Привет, меня зовут Валерий.
            <br />
            я не люблю о себе рассказывать, <br />
            но раз вы настаиваете:
          </p>
          <ul>
            <li>
              <b>Цели:</b>
              найти и устранить пробелы в знаниях React и сопутствующих технологий;
            </li>
            <li>
              <b>В той или иной степени владею:</b>
              JS, TS, HTML, CSS, PHP, JAVA, C#;
            </li>
            <li>
              <b>О себе:</b>
              работаю в небольшой компании, занимаюсь в основном фронтендом. За спиной есть несколько проектов на
              React+Next.js{' '}
            </li>
          </ul>
        </p>
      </header>
    </div>
  );
}

export default App;
