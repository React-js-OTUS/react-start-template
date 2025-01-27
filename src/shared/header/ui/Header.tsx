import React, { FC, useContext } from 'react';
import cls from './header.module.scss';
import cn from 'clsx';
import { Logo } from '../../logo';
import { Theme, ThemeContext } from '../../../app/providers/ThemProviders';
import { ThemeSwitcher } from '../../ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from '../../LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';

type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
  const { theme } = useContext(ThemeContext);
  const {t} = useTranslation()
  return (
    <header className={cn(theme === Theme.LIGHT ? cls.headerLight : cls.headerDark, [className])}>
      <Logo />
      <nav className={cls.nav}>
        <a className={theme === Theme.LIGHT ? cls.navLinkLight : cls.navLinkDark} href="#">
          {t('Главная')}
        </a>
        <a className={theme === Theme.LIGHT ? cls.navLinkLight : cls.navLinkDark} href="#">
          {t('О сайте')}
        </a>
        <a className={theme === Theme.LIGHT ? cls.navLinkLight : cls.navLinkDark} href="#">
          {t('Контакты')}
        </a>
      </nav>
      <ThemeSwitcher />
      <LangSwitcher />
    </header>
  );
};
