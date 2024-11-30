import React, { FC } from 'react';
import { Product as ProductEntity } from 'src/homeworks/ts1/3_write';
import { Product } from 'src/shared/product/Product';
import s from './productList.module.sass';

interface ProductListProps {
  products: ProductEntity[];
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className={s.root}>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          description={product.desc}
          price={product.price}
          photo={product.photo}
        />
      ))}
    </div>
  );
};
