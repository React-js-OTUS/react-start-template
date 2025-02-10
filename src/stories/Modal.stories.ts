import type { Meta } from '@storybook/react';
import { Modal } from '../entities';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    children: 'Some content',
  },
};
