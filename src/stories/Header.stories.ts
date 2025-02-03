import type { Meta } from '@storybook/react';
import { Header } from '../entities';
import StoreDecorator from '../../.storybook/decorators/StoreDecorator';

const meta: Meta<typeof Header> = {
  component: Header,
  decorators: [StoreDecorator],
  tags: ['autodocs'],
  title: 'UI/Header',
};

export default meta;

export const Default = {
  args: {},
};
