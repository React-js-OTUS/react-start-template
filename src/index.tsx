import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { Paths } from './routes/Paths';
import { AuthProvider } from './shared/hooks/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    {/*<Paths />*/}
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
