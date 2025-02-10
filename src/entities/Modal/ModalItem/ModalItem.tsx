import React from 'react';
import clsx from 'clsx';
import { ILayout } from 'src/entities/interfaces';
import { EThemeVariables, StoreContext } from '../../../app/StoreContext';

export const ModalItem: React.FC<ILayout> = ({ children }) => {
  const { theme } = React.useContext(StoreContext);
  const isDarkTheme = theme === EThemeVariables.DARK;
  const className = clsx(
    'w-full max-w-[384px] border-[1px] border-w-200 border-solid p-8 rounded',
    isDarkTheme ? 'bg-b-900 text-w-100' : 'bg-white text-b-900'
  );

  return <div className={className}>{children}</div>;
};
