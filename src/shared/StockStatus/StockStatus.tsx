import React from 'react';
import { useTranslation } from 'react-i18next';
import { IStockStatus } from '../../shared/interfaces';

export const StockStatus: React.FC<IStockStatus> = ({ isInStock }) => {
  const { t } = useTranslation();
  return (
    <span className="px-4 py-[2px] border-[1px] border-solid border-b-100 rounded-full font-inter text-xs leading-6">
      {isInStock ? t('card.stockStatus.in') : t('card.stockStatus.out')}
    </span>
  );
};
