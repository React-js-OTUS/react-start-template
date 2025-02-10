import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { LangSwitcherBtn, Logo, ThemeSwitcherBtn } from '../../shared';
import { ELogoType } from '../../shared/interfaces';
import { EThemeVariables, StoreContext } from '../../app/StoreContext';

export const Header: React.FC = () => {
  const { theme } = React.useContext(StoreContext);
  const isDarkTheme = theme === EThemeVariables.DARK;
  const className = clsx(
    'sticky top-0 py-[22px] border-b-[1px] border-solid z-90',
    isDarkTheme ? 'bg-black border-b-900' : 'bg-white border-b-100'
  );
  const { t } = useTranslation();

  return (
    <header className={className}>
      <div className="flex flex-row justify-between items-center container mx-auto px-3">
        <a href="/">
          <Logo type={ELogoType.DARK} text={t('storeName')} />
        </a>
        <div className="flex flex-row justify-between items-center gap-4">
          <ThemeSwitcherBtn />
          <LangSwitcherBtn />
        </div>
      </div>
    </header>
  );
};
