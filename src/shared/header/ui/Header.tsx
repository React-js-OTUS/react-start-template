import React, { FC } from 'react';
import cls from './header.module.scss';
import cn from 'clsx';
import { Logo } from '../../logo';

type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(cls.header, [className])}>
      <Logo />
      <nav className={cls.nav}>
        <a className={cls.navLink} href="#">
          Home
        </a>
        <a className={cls.navLink} href="#">
          About us
        </a>
        <a className={cls.navLink} href="#">
          Contacts
        </a>
      </nav>
    </header>
  );
};
