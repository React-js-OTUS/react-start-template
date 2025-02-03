import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { IBasketGoodsItem } from '../../../entities/interfaces';
import { EThemeVariables, StoreContext } from '../../../app/StoreContext';
import { Counter, DeleteBtn } from '../../../shared';

const ImagePlace: React.FC<Partial<IBasketGoodsItem>> = ({ image }) => (
  <div className="flex justify-center items-center w-20 h-20 bg-w-100 rounded overflow-hidden">
    <img className="max-w-16" src={image} alt="" />
  </div>
);

interface Props extends Partial<IBasketGoodsItem> {
  isDarkTheme: boolean;
}

const DesccriptionPlace: React.FC<Props> = ({ color, title, size, isDarkTheme }) => {
  const { t } = useTranslation();
  const w900ClassName = isDarkTheme ? 'text-w-900' : 'text-b-900';
  const b500ClassName = isDarkTheme ? 'text-w-500' : 'text-b-500';
  const h1ClassName = clsx('font-semibold text-sm leading-7', w900ClassName);
  const subtitleClassName = clsx('flex items-baseline gap-2 font-medium text-xs leading-6', b500ClassName);
  const colorClass = clsx('w-3 aspect-square rounded-full', color);

  return (
    <div>
      <h1 className={h1ClassName}>{title}</h1>
      <div className={subtitleClassName}>
        <p>{t('basket.color')}</p>
        <div className={colorClass} />
        <p>
          &nbsp;&mdash; {t('basket.size')}: <span className="uppercase">{size}</span>
        </p>
      </div>
    </div>
  );
};

const CounterPlace: React.FC<Props> = ({ price, counter, isDarkTheme }) => {
  const w900ClassName = isDarkTheme ? 'text-w-900' : 'text-b-900';
  const priceClassName = clsx('font text-sm text-b-900 leading-7', w900ClassName);
  return (
    <div className="flex justify-end items-center gap-8">
      <p className={priceClassName}>${price}</p>
      <div className="flex gap-3">
        <Counter counter={counter} />
        <DeleteBtn onClick={() => null} />
      </div>
    </div>
  );
};

export const BasketGoodsItem: React.FC<IBasketGoodsItem> = ({ size, color, counter, title, price, image }) => {
  const { theme } = React.useContext(StoreContext);

  const isDarkTheme = theme === EThemeVariables.DARK;

  return (
    <article className="flex justify-between font-inter">
      <div className="flex items-center gap-8">
        <ImagePlace image={image} />
        <DesccriptionPlace color={color} title={title} size={size} isDarkTheme={isDarkTheme} />
      </div>
      <CounterPlace price={price} counter={counter} isDarkTheme={isDarkTheme} />
    </article>
  );
};
