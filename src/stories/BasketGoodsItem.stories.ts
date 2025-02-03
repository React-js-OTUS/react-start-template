import type { Meta } from '@storybook/react';
import { BasketGoodsItem } from '../entities';
import { goods } from '../assets/goods';

const meta: Meta<typeof BasketGoodsItem> = {
  title: 'UI/Basket/BasketGoodsItem',
  component: BasketGoodsItem,
  tags: ['autodocs'],
};

export default meta;

const item = goods[0];

export const Default = {
  argTypes: {
    color: {
      options: item.colors,
      control: 'radio',
    },
  },
  args: {
    size: item.sizes[0],
    color: item.colors[0],
    counter: 1,
    title: item.title,
    price: item.price,
    image: item.imageListing,
  },
};
