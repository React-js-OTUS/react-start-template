import React from 'react';
import { createRoot } from 'react-dom/client';
import logo from '../static/logo.svg';
import './app.css';

type ListItem = {
	q: string,
	a: string
}

type listData = ListItem[]

const App = () => {
	const listData: listData = [
		{
			q: 'Каких целей хотите достичь?',
			a: 'Хочу уметь все в сфере фронтенда и немножко больше.'
		},
		{
			q: 'Какими технологиями хотите овладеть?',
			a: 'Всеми актуальными современному фронтенду. Выделю TS, не хватает опыта, что бы полностью перейти на него. А так же необходимо изучить, применять, разделять паттерны архитектуры и разработки.'
		},
		{
			q: 'Какими технологиями уже владеете?',
			a: 'Специализируюсь на верстке и разработке Vue3, Nuxt.js. В остальном понемногу, по мере необходимости - Git, Docker, Node.js, стейт-менеджеры, сборщики, библиотеки, фреймворки и прочее. Сейчас перехожу на стек TS + React.'
		},
		{
			q: 'Расскажите о себе и своем опыте',
			a: 'Меня зовут Константин. Мне 34 года. В продуктовой разработке 5 лет. Начинал с верстальщика, двигаюсь и развиваюсь в направлении фронтенда. Начинал стажером в маркетинговых агенствах, разрабатывал интернет магазины, лендинги, блоги на базе различных CMS. Сейчас работаю в финансовом институте развития в жилищной сфере России, АО Дом.рф на Кольце сайтов (несколько информационных проектов), по совместительству начал заниматься web-версией банковского приложения Банк Дом.рф.'
		},
	]

	const listItems = listData.map((el, i) =>
		<li key={i}>
			<h2>
					{el.q}
				</h2>
				<p>
					{el.a}
				</p>
		</li>
	);


  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{listItems}</ul>
      </header>
    </main>
  );
}

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
