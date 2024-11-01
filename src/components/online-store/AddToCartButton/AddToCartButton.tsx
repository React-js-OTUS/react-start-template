import React from 'react';
import s from './AddToCartButton.module.scss';

interface IAddToCartButtonProps {
  count: number;
}

export const AddToCartButton = ({ count }: IAddToCartButtonProps) => {
  return count === 0 ? (
    <button>Add to cart</button>
  ) : (
    <div className={s.addToCartButton}>
      <button>-</button>
      <input type="text" value={count} readOnly />
      <button>+</button>
    </div>
  );
};
