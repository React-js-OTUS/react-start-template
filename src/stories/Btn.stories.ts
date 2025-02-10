import type { Meta } from '@storybook/react';
import { Btn } from '../shared';

const meta: Meta<typeof Btn> = {
  title: 'UI/Btns/Btn',
  component: Btn,
  tags: ['autodocs'],
};

export default meta;

export const Active = {
  args: {
    children: 'Subscribe',
    isDisabled: false,
  },
};

export const Disabled = {
  args: {
    children: 'Subscribe',
    isDisabled: true,
  },
};
