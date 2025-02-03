import type { Meta } from '@storybook/react';
import { CardColorChanger } from '../entities/index';
import { goods } from '../assets/goods';

const meta: Meta<typeof CardColorChanger> = {
  title: 'UI/Cards/components/CardColorChanger',
  component: CardColorChanger,
  tags: ['autodocs'],
};

export default meta;

const item = goods[0];

export const isInStock = {
  args: {
    colors: item.colors,
  },
};
