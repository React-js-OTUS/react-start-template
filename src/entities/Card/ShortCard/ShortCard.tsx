import React from 'react';
import { useTranslation } from 'react-i18next';
import { IGoodsItem } from '../../../entities/interfaces';
import { AddToCartBtn, StockStatus } from '../../../shared';

export const ShortCard: React.FC<IGoodsItem> = ({ id, isInStock, title, price, details, imageListing }) => {
  const { t } = useTranslation();

  return (
    <article className="flex flex-col gap-3 max-w-[274px] font-inter px-[6px] py-4">
      <a href={`/card/${id}`}>
        <div className="min-h-[367px] bg-w-100 rounded-sm overflow-hidden">
          <img src={imageListing} alt="" />
        </div>
      </a>
      <AddToCartBtn onClick={() => null} counter={0} isDisabled={!isInStock}>
        {t('card.addToCart')}
      </AddToCartBtn>
      <a href={`/card/${id}`}>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-sm leading-7">{title}</h1>
          <p className="text-sm truncate">{details[0]}</p>
          <div className="flex items-center gap-4">
            <StockStatus isInStock={isInStock} />
            <p className="text-sm text-b-600 leading-7">${price}</p>
          </div>
        </div>
      </a>
    </article>
  );
};
