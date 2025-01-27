import type { Meta } from '@storybook/react';
import { Input } from '../shared';

const meta: Meta<typeof Input> = {
  component: Input,
  decorators: [],
  tags: ['autodocs'],
  title: 'UI/Input',
};

export default meta;

export const Active = {
  args: {
    value: '',
    name: 'string',
    placeholder: 'Some placeholder',
    required: false,
    id: 'string',
    form: 'form',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    value: '',
    name: 'string',
    placeholder: 'Some placeholder',
    required: false,
    id: 'string',
    form: 'form',
    disabled: true,
  },
};
