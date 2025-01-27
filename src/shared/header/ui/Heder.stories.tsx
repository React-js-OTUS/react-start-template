import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { ThemeProvider } from '../../../app/providers/ThemProviders';
import React, { JSX } from 'react';

const meta: Meta<typeof Header> = {
  title: 'компоненты/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

const Template = (args: JSX.IntrinsicAttributes & { className?: string }) => (
  <ThemeProvider>
    <Header {...args} />
  </ThemeProvider>
);

export const HeaderStory: Story = {
  render: Template, // Используем шаблон для рендеринга
  args: {},
};
