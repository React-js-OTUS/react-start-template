import type { Meta } from '@storybook/react';
import { DeleteBtn } from '../shared';

const meta: Meta<typeof DeleteBtn> = {
  title: 'UI/Btns/DeleteBtn',
  component: DeleteBtn,
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
