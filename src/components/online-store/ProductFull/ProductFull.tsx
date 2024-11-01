import React from 'react';
import s from './ProductFull.module.scss';
import { AddToCartButton } from '../AddToCartButton';

interface IProductFullProps {
  price: number;
  image: string;
  category: string;
  title: string;
  description: string;
}

export const ProductFull = ({ price, image, category, title, description }: IProductFullProps) => {
  return (
    <div className={s.productFull}>
      <img src={image} alt={title} width={200} />
      <h3>{title}</h3>
      <p>{category}</p>
      <p>{price}</p>
      <p>{description}</p>
      <AddToCartButton count={0} />
    </div>
  );
};
