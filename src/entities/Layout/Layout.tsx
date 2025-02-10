import React from 'react';
import clsx from 'clsx';
import { Header } from '../../entities';
import { ILayout } from '../../entities/interfaces';
import { EThemeVariables, StoreContext } from '../../app/StoreContext';

export const Layout: React.FC<ILayout> = ({ children }: ILayout) => {
  const { theme, lang } = React.useContext(StoreContext);
  const className = clsx('relative min-h-screen', theme === EThemeVariables.DARK ? 'bg-black text-w-100' : '');

  return (
    <div className={className} lang={lang}>
      <Header />
      <main>{children}</main>
    </div>
  );
};
