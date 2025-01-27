import type { Meta } from '@storybook/react';
import { ShortCard } from '../entities';
import { goods } from '../assets/goods';

const meta: Meta<typeof ShortCard> = {
  title: 'UI/Cards/ShortCard',
  component: ShortCard,
  tags: ['autodocs'],
};

export default meta;

const item = goods[0];

export const InStock = {
  args: {
    id: item.id,
    isInStock: true,
    title: item.title,
    details: item.details,
    price: item.price,
    imageListing: item.imageListing,
  },
};

export const OutOfStock = {
  args: {
    id: item.id,
    isInStock: false,
    title: item.title,
    details: item.details,
    price: item.price,
    imageListing: item.imageListing,
  },
};
