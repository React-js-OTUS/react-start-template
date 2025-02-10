import React from 'react';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { EGoodsSizes, IGoodsSizes } from '../interfaces';
import { EThemeVariables, StoreContext } from '../../../app/StoreContext';

export const CardSizesChanger: React.FC<IGoodsSizes> = ({ sizes }) => {
  const [currentSize, setCurrentSize] = React.useState<EGoodsSizes>(sizes[0]);

  const { theme } = React.useContext(StoreContext);
  const { t } = useTranslation();

  const isDarkTheme = theme === EThemeVariables.DARK;

  const changeSize = (size: EGoodsSizes) => {
    setCurrentSize(size);
  };

  return (
    <div className="flex gap-[10px]">
      {sizes &&
        sizes.map((item) => {
          const isTargetItem = currentSize === item;
          const sizeClass = clsx(
            'w-10 aspect-square border-[1px] border-solid font-medium text-xs leading-6',
            isTargetItem && isDarkTheme && 'bg-w-900 text-b-900',
            !isTargetItem && isDarkTheme && '',
            isTargetItem && !isDarkTheme && 'border-b-900 text-b-900',
            !isTargetItem && !isDarkTheme && 'border-b-100 text-b-500',
            'rounded uppercase'
          );
          return (
            <button key={nanoid()} className={sizeClass} onClick={() => changeSize(item)}>
              <span className="sr-only">
                {t('card.sizes.current')} {currentSize}. {t('card.sizes.choose')}
              </span>
              {item}
            </button>
          );
        })}
    </div>
  );
};
