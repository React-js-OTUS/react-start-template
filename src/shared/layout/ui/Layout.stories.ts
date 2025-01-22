import { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'компоненты/Layout',
  component: Layout,
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const LogoStory: Story = {
  args: {},
};
