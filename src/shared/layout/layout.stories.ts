import type { Meta } from '@storybook/react';
import { Layout } from './layout';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  tags: ['autodocs'],
};

export default meta;

export const DefaultLayout = {
  args: {
    children: 'This is the layout content',
  },
};
