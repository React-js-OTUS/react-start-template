import type { Meta } from '@storybook/react';
import { ModalBackgorund } from '../entities';

const meta: Meta<typeof ModalBackgorund> = {
  title: 'UI/Modal/ModalBackgorund',
  component: ModalBackgorund,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    children: 'Some content',
  },
};
