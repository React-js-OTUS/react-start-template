import type { Meta } from '@storybook/react';
import { ModalInput } from './modal-input';

const meta: Meta<typeof ModalInput> = {
  title: 'Components/ModalInput',
  component: ModalInput,
  tags: ['autodocs'],
  argTypes: {
    visible: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;

export const VisibleModal = {
  args: {
    visible: true,
    children: 'This is the content inside the modal',
  },
};

export const HiddenModal = {
  args: {
    visible: false,
    children: 'This is the content inside the modal',
  },
};
