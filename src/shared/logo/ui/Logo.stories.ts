import { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'компоненты/Logo',
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const LogoStory: Story = {
  args: {
    className: 'logo',
  },
};
