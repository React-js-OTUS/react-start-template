import React, { FC } from 'react';
import { Logo } from '../logo/logo';
import { Theme, useThemeContext } from '../context/theme-context/theme-context';
import classNames from 'classnames';
import './header.scss';

export const Header: FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  const headerClass = classNames('header', {
    dark: theme === 'dark',
    light: theme === 'light',
  });

  return (
    <header className={headerClass}>
      <Logo />
      <nav>
        <button onClick={toggleTheme}>Сменить тему на {theme === Theme.light ? 'Тёмную' : 'Светлую'}</button>
      </nav>
    </header>
  );
};
