import type { Meta } from '@storybook/react';
import { ButtonInput } from './button-input';

const meta: Meta<typeof ButtonInput> = {
  title: 'Components/ButtonInput',
  component: ButtonInput,
  tags: ['autodocs'],
  argTypes: { control: 'text' },
};

export default meta;

export const Primary = {
  args: {
    color: 'red',
  },
};
