import type { Meta } from '@storybook/react';
import { Layout } from '../entities';
import StoreDecorator from '../../.storybook/decorators/StoreDecorator';

const meta: Meta<typeof Layout> = {
  component: Layout,
  decorators: [StoreDecorator],
  tags: ['autodocs'],
  title: 'UI/Layout',
};

export default meta;

export const Default = {
  args: {
    children: 'Some content',
  },
};
