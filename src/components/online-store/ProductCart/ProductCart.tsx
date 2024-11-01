import React from 'react';
import s from './ProductCart.module.scss';

interface IProductCartProps {
  title: string;
  price: number;
  onRemove: () => void;
}

export const ProductCart = ({ title, price, onRemove }: IProductCartProps) => {
  return (
    <div className={s.productCart}>
      <h3>{title}</h3>
      <p>{price}</p>
      <button className={s.removeButton} onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};
