import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Локализованные ресурсы (переводы)
const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      changeLanguage: 'Change Language:',
      lorem:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias impedit delectus esse voluptatibus perspiciatis architecto atque, vel ullam. Dolorem ea voluptates magnam qui non tempore nulla, a obcaecati? Quibusdam, deserunt.',
    },
  },
  ru: {
    translation: {
      welcome: 'Добро пожаловать',
      changeLanguage: 'Изменить язык:',
      lorem:
        'Спасибо вам за вашу постоянную поддержку. Встревоженный делегацией этого вулкана художник есть художник, Уильям. Я собираюсь дать ей личинку в это время года, и ей не на что жаловаться? Проснись, дезерт.',
    },
  },
};

// Инициализация i18next
i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Язык по умолчанию
  fallbackLng: 'en', // Язык, если перевод не найден
  interpolation: {
    escapeValue: false, // Не экранировать HTML
  },
});

export default i18n;
