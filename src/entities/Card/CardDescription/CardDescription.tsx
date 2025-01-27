import React from 'react';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { EGoodsSizes, IGoodsItem } from '../../../entities/interfaces';
import { EThemeVariables, StoreContext } from '../../../app/StoreContext';
import { Btn, Counter, StockStatus } from '../../../shared';

export const CardDescription: React.FC<Partial<IGoodsItem>> = ({ title, isInStock, price, colors, sizes }) => {
  const [currentColor, setCurrentColor] = React.useState<string>(colors ? colors[0] : '');
  const [currentSize, setCurrentSize] = React.useState<EGoodsSizes>(sizes[0]);

  const { theme } = React.useContext(StoreContext);
  const { t } = useTranslation();

  const isDarkTheme = theme === EThemeVariables.DARK;

  const changeColor = (color: string) => {
    setCurrentColor(color);
  };

  const changeSize = (size: EGoodsSizes) => {
    setCurrentSize(size);
  };

  const w900ClassName = isDarkTheme ? 'text-w-900' : 'text-b-900';
  const b500ClassName = isDarkTheme ? 'text-w-500' : 'text-b-500';
  const h1ClassName = clsx('mb-3 font-bold text-2xl text-b-900', w900ClassName);
  const priceClassName = clsx('mt-6 font-semibold text-lg', w900ClassName);
  const sectionTitleClassName = clsx('mb-[10px] font-medium text-xs leading-7 uppercase', b500ClassName);

  return (
    <div className="font-inter">
      <h1 className={h1ClassName}>{title}</h1>
      <StockStatus isInStock={isInStock} />
      <p className={priceClassName}>${price}</p>
      <div className="mt-8">
        <p className={sectionTitleClassName}>{t('card.colors.title')}</p>
        <div className="flex gap-[10px]">
          {colors &&
            colors.map((item) => {
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
      </div>
      <div className="mt-8">
        <p className={sectionTitleClassName}>{t('card.sizes.title')}</p>
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
      </div>
      <div className="mt-8">
        <p className={sectionTitleClassName}>{t('card.quantity')}</p>
        <Counter counter={1} />
      </div>
      <div className="flex flex-col mt-10">
        <Btn onClick={() => null} isDisabled={!isInStock}>
          {t('card.addToCart')}
        </Btn>
        <p className={sectionTitleClassName}>{t('card.offer')}</p>
      </div>
    </div>
  );
};
