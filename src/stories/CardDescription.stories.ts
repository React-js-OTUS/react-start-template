import type { Meta } from '@storybook/react';
import { CardDescription } from '../entities/index';
import { goods } from '../assets/goods';

const meta: Meta<typeof CardDescription> = {
  title: 'UI/Cards/components/CardDescription',
  component: CardDescription,
  tags: ['autodocs'],
};

export default meta;

const item = goods[0];

export const isInStock = {
  args: {
    title: item.title,
    isInStock: item.isInStock,
    price: item.price,
    colors: item.colors,
    sizes: item.sizes,
  },
};

export const isOutOfStock = {
  args: {
    title: item.title,
    isInStock: !item.isInStock,
    price: item.price,
    colors: item.colors,
    sizes: item.sizes,
  },
};
