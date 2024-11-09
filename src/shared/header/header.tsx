import React, { FC } from 'react';
import { Logo } from '../logo/logo';

import './header.css';
import { useThemeContext } from '../context/theme-context/theme-context';

export const Header: FC = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <header className="header">
      <Logo />
      <nav>
        <button onClick={toggleTheme}>changeTheme: {theme}</button>
      </nav>
    </header>
  );
};
