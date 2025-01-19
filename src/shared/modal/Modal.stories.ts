import type { Meta } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;

export const VisibleModal = {
  args: {
    isOpen: true,
    children: 'This is the content inside the modal', // JSX элемент
  },
};

export const HiddenModal = {
  args: {
    isOpen: false,
    children: 'This is the content inside the modal', // также JSX элемент
  },
};
