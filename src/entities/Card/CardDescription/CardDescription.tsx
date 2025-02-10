import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { CardColorChanger, CardSizesChanger } from '../../../entities';
import { IGoodsItem } from '../../../entities/interfaces';
import { EThemeVariables, StoreContext } from '../../../app/StoreContext';
import { Btn, Counter, StockStatus } from '../../../shared';

export const CardDescription: React.FC<Partial<IGoodsItem>> = ({ title, isInStock, price, colors, sizes }) => {
  const { theme } = React.useContext(StoreContext);
  const { t } = useTranslation();

  const isDarkTheme = theme === EThemeVariables.DARK;

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
        <CardColorChanger colors={colors} />
      </div>
      <div className="mt-8">
        <p className={sectionTitleClassName}>{t('card.sizes.title')}</p>
        <CardSizesChanger sizes={sizes} />
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
