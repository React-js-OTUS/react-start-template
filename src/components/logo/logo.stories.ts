import type { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Example/Logo',
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Ru: Story = {
  parameters: {
    lang: 'ru',
    theme: 'dark',
    palette: {
      primary: '#2a698c',
      secondary: '#14a37f',
      background: '#212121',
      foreground: '#001529',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      error: '#c62828',
      success: '#1b5e20',
      fontColor: '#fff',
      fontColorDisabled: '#ffffff44',
    },
  },
};

export const En: Story = {
  parameters: {
    lang: 'en',
    theme: 'light',
    palette: {
      primary: '#3d96c8',
      secondary: '#1de9b6',
      background: '#fff',
      foreground: '#00000011',
      borderColor: 'rgba(0, 0, 0, 0.1)',
      error: '#d32f2f',
      success: '#2e7d32',
      fontColor: '#000',
      fontColorDisabled: '#00000044',
    },
  },
};
