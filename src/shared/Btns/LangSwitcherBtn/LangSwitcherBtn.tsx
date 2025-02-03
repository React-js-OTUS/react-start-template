import React from 'react';
import { nanoid } from 'nanoid';
import clsx from 'clsx';
import { ELangVariables, EThemeVariables, StoreContext } from '../../../app/StoreContext';

export const LangSwitcherBtn: React.FC = () => {
  const languages = Object.keys(ELangVariables);
  const { lang, langSwitchHandler, theme } = React.useContext(StoreContext);
  const isDark = theme === EThemeVariables.DARK;

  return (
    <div className="w-fit">
      {languages.map((item) => {
        const isDisabled = lang.toUpperCase() === item;
        const className = clsx(
          'w-10 border-y-[1px] border-solid aspect-square',
          isDark ? 'border-white' : 'border-b-900',
          isDisabled ? 'bg-b-900 text-w-100' : 'bg-w-100 text-b-900',
          'first-of-type:rounded-l first-of-type:border-l-[1px]',
          'last-of-type:rounded-r last-of-type:border-r-[1px]'
        );

        return (
          <button key={nanoid()} className={className} disabled={isDisabled} onClick={langSwitchHandler}>
            {item}
          </button>
        );
      })}
    </div>
  );
};
