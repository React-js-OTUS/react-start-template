import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';
import App from './app/App';
import { store } from 'src/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
