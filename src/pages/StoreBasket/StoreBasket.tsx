import React from 'react';
import { BasketGoodsItem, Container } from '../../entities';
import { goods } from '../../assets/goods';

export const StoreBasket: React.FC = () => {
  const item = goods[0];

  return (
    <Container>
      <BasketGoodsItem
        size={item.sizes[0]}
        color={item.colors[0]}
        counter={1}
        title={item.title}
        price={item.price}
        image={item.imageListing}
      />
    </Container>
  );
};
