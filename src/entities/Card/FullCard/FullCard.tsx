import React from 'react';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { IGoodsItem } from '../../../entities/interfaces';
import { EThemeVariables, StoreContext } from '../../../app/StoreContext';
import { CardImage, CardDescription } from '../../../entities';
import clsx from 'clsx';

export const FullCard: React.FC<IGoodsItem> = ({ title, price, details, imageFull, isInStock, colors, sizes }) => {
  const { theme } = React.useContext(StoreContext);
  const { t } = useTranslation();

  const isDarkTheme = theme === EThemeVariables.DARK;
  const w900ClassName = isDarkTheme ? 'text-w-900' : 'text-b-900';
  const b500ClassName = isDarkTheme ? 'text-w-500' : 'text-b-500';
  const h2ClassName = clsx('mb-6 font-bold text-base', w900ClassName);
  const textClassName = clsx('text-sm leading-7', b500ClassName);

  return (
    <div className="font-inter">
      <div className="grid grid-cols-2 gap-8">
        <CardImage imageFull={imageFull} />
        <CardDescription title={title} price={price} isInStock={isInStock} colors={colors} sizes={sizes} />
      </div>
      <h2 className={h2ClassName}>{t('card.details')}</h2>
      {typeof details === 'string' ? (
        <p className={textClassName}>{details}</p>
      ) : (
        details.map((item) => (
          <p key={nanoid()} className={textClassName}>
            {item}
          </p>
        ))
      )}
    </div>
  );
};
