import type { Meta } from '@storybook/react';
import { AddToCartBtn } from '../shared';

const meta: Meta<typeof AddToCartBtn> = {
  title: 'UI/Btns/AddToCartBtn',
  component: AddToCartBtn,
  tags: ['autodocs'],
};

export default meta;

export const Empty = {
  args: {
    children: 'Add to cart',
    isDisabled: false,
  },
};

export const HasGoods = {
  args: {
    counter: 1,
    isDisabled: false,
  },
};

export const Disabled = {
  args: {
    children: 'Add to cart',
    isDisabled: true,
  },
};
