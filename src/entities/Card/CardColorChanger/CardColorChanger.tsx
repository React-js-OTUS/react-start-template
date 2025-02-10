import React from 'react';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { IGoogsColor } from '../interfaces';
import { EThemeVariables, StoreContext } from '../../../app/StoreContext';

export const CardColorChanger: React.FC<Partial<IGoogsColor>> = ({ colors }) => {
  const [currentColor, setCurrentColor] = React.useState<string>(colors ? colors[0] : '');

  const { t } = useTranslation();
  const { theme } = React.useContext(StoreContext);

  const isDarkTheme = theme === EThemeVariables.DARK;

  const changeColor = (color: string) => {
    setCurrentColor(color);
  };

  return (
    <div className="flex gap-[10px]">
      {colors.map((item) => {
        const isTargetItem = currentColor === item;
        const colorClass = clsx(
          'w-6 aspect-square rounded-full',
          item,
          isTargetItem && 'outline outline-1 outline-b-900 outline-offset-2',
          isTargetItem && isDarkTheme && 'outline-w-900',
          isTargetItem && !isDarkTheme && 'outline-b-900'
        );
        return (
          <button key={nanoid()} className={colorClass} onClick={() => changeColor(item)}>
            <span className="sr-only">
              {t('card.colors.current')} {currentColor}. {t('card.colors.choose')} {item}
            </span>
          </button>
        );
      })}
    </div>
  );
};
