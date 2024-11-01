import React, { ReactNode } from 'react';
import s from './Header.module.scss';
import { Logo } from '../Logo';

interface IHeaderProps {
  children?: ReactNode;
}

export const Header = ({ children }: IHeaderProps) => {
  return (
    <header className={s.header}>
      <Logo />
      {children}
    </header>
  );
};
