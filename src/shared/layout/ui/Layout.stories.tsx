import { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';
import React, { JSX } from 'react';
import { ThemeProvider } from '../../../app/providers/ThemProviders';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../config/i18/i18n';

const meta: Meta<typeof Layout> = {
  title: 'компоненты/Layout',
  component: Layout,
};

export default meta;

type Story = StoryObj<typeof Layout>;

const Template = (args: JSX.IntrinsicAttributes & { className?: string }) => (
  <I18nextProvider i18n={i18n}>
    <ThemeProvider>
      <Layout {...args} />
    </ThemeProvider>
  </I18nextProvider>
);
export const LayoutStory: Story = {
  render: Template,
  args: {},
};
