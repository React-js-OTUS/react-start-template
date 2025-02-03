import type { Meta } from '@storybook/react';
import { CardSizesChanger } from '../entities/index';
import { goods } from '../assets/goods';

const meta: Meta<typeof CardSizesChanger> = {
  title: 'UI/Cards/components/CardSizesChanger',
  component: CardSizesChanger,
  tags: ['autodocs'],
};

export default meta;

const item = goods[0];

export const isInStock = {
  args: {
    sizes: item.sizes,
  },
};
