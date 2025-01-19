import React, { FC, useState } from 'react';
import { Logo } from '../logo/logo';
import { Theme, useThemeContext } from '../context/theme-context/theme-context';
import classNames from 'classnames';
import './header.scss';
import { Modal } from '../modal/Modal';

export const Header: FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const headerClass = classNames('header', {
    dark: theme === 'dark',
    light: theme === 'light',
  });

  return (
    <header className={headerClass}>
      <Logo />
      <nav>
        <button onClick={toggleTheme}>Сменить тему на {theme === Theme.light ? 'Тёмную' : 'Светлую'}</button>
        <button onClick={openModal}>открыть модальное окно</button>
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <h1>Модальное окно</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maiores architecto ducimus voluptatum
            consequatur quos, deleniti inventore ratione id, obcaecati qui officiis necessitatibus esse, quidem quasi
            fugit laboriosam illum non.
          </p>
        </Modal>
      </nav>
    </header>
  );
};
