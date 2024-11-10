import { Meta } from '@storybook/react';
import AddToCartButton from './add-to-cart-button';

const meta: Meta<typeof AddToCartButton> = {
  title: 'Components/AddToCartButton',
  component: AddToCartButton,
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: { type: 'number' },
      description: 'Количество товара в корзине',
      defaultValue: 0,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
  },
};

export default meta;

export const EmptyCart = {
  args: {
    count: 0,
  },
};

export const FilledCart = {
  args: {
    count: 3,
  },
};

export const LargeCount = {
  args: {
    count: 10,
  },
};
