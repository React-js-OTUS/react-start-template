import React from 'react';
import s from './ProductPreview.module.scss';
import { AddToCartButton } from '../AddToCartButton';

interface IProductPreviewProps {
  price: number;
  image: string;
  title: string;
  description: string;
}

export const ProductPreview = ({ price, image, title, description }: IProductPreviewProps) => {
  return (
    <div className={s.productPreview}>
      <img src={image} alt={title} width={100} />
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{description.slice(0, 50)}...</p>
      <AddToCartButton count={0} />
    </div>
  );
};
