import type { Meta } from '@storybook/react';
import { StockStatus } from '../shared';

const meta: Meta<typeof StockStatus> = {
  title: 'UI/Cards/components/StockItemStatus',
  component: StockStatus,
  tags: ['autodocs'],
};

export default meta;

export const InStock = {
  args: {
    isInStock: true,
  },
};

export const OutOfStock = {
  args: {
    isInStock: false,
  },
};
