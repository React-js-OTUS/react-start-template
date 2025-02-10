import type { Meta } from '@storybook/react';
import { ModalItem } from '../entities';

const meta: Meta<typeof ModalItem> = {
  title: 'UI/Modal/ModalItem',
  component: ModalItem,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    children: 'Some content',
  },
};
