import { Meta, StoryObj } from '@storybook/react';
import { ButtonInput } from './button-input';

const meta: Meta<typeof ButtonInput> = {
  title: 'Components/ButtonInput',
  component: ButtonInput,
  tags: ['autodocs'],
  argTypes: {
    initialInputValue: {
      control: { type: 'text' },
      description: 'Начальное значение для текстового поля',
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    initialVisible: {
      control: { type: 'boolean' },
      description: 'Начальное состояние видимости модального окна',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof ButtonInput> = {
  args: {
    initialInputValue: '',
    initialVisible: false,
  },
};

export const WithPrefilledInput: StoryObj<typeof ButtonInput> = {
  args: {
    initialInputValue: 'Предварительный текст',
    initialVisible: false,
  },
};

export const ModalOpen: StoryObj<typeof ButtonInput> = {
  args: {
    initialInputValue: '',
    initialVisible: true,
  },
};
