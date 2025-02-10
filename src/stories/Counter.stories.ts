import type { Meta } from '@storybook/react';
import { Counter } from '../shared';

const meta: Meta<typeof Counter> = {
  title: 'UI/Cards/components/Counter',
  component: Counter,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    counter: 0,
  },
};
