import React, { FC } from 'react';
import { Header } from '../../header/ui/Header';

import './layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main>{children}</main>
    </div>
  );
};
