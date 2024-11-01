import React, { ReactNode } from 'react';
import { Header } from '../Header';
import s from './Layout.module.scss';

interface ILayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={s.wrapper}>
      <Header />
      {children}
    </div>
  );
};
