import React, { FC, useState } from 'react';
import { Logo } from '../../logo/ui/Logo';
import { Theme, useThemeContext } from '../../context/theme-context/theme-context';
import classNames from 'classnames';
import { Modal } from '../../modal/ui/Modal';
import './header.scss';
import { useLanguage } from 'src/shared/context/lang-context/lang-context';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();
  const { changeLanguage } = useLanguage();

  return (
    <header className={headerClass}>
      <Logo />
      <h1>{t('welcome')}</h1>
      <nav>
        <button onClick={toggleTheme}>Сменить тему на {theme === Theme.light ? 'Тёмную' : 'Светлую'}</button>
        <span>{t('changeLanguage')}</span>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ru')}>Русский</button>
        <button onClick={openModal}>открыть модальное окно</button>

        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <h1>Модальное окно</h1>
        </Modal>
      </nav>
    </header>
  );
};
