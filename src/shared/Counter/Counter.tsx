import React from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { ICounter } from '../../shared/interfaces';
import { EThemeVariables, StoreContext } from '../../app/StoreContext';

interface ICounterBtnProps {
  src: string;
  text: string;
}

const CounterBtn: React.FC<ICounterBtnProps> = ({ src, text }) => (
  <button>
    <img src={src} alt="" width={20} height={20} />
    <span className="sr-only">{text}</span>
  </button>
);

export const Counter: React.FC<ICounter> = ({ counter }) => {
  const { t } = useTranslation();
  const { theme } = React.useContext(StoreContext);
  const isDarkTheme = theme === EThemeVariables.DARK;

  const className = clsx(
    'min-w-[164px] max-w-fit min-h-[47px] flex justify-between items-center px-4 border-[1px] border-solid border-b-100 rounded font-inter text-sm text-b-800 leading-7',
    isDarkTheme ? 'text-w-900' : 'text-b-800'
  );

  return (
    <div className={className}>
      <CounterBtn
        src="https://raw.githubusercontent.com/furtivite/cdn.furtivite.github.io/refs/heads/main/images/minus.svg"
        text={t('counter.decrease')}
      />
      {counter}
      <CounterBtn
        src="https://raw.githubusercontent.com/furtivite/cdn.furtivite.github.io/refs/heads/main/images/plus.svg"
        text={t('counter.increase')}
      />
    </div>
  );
};
