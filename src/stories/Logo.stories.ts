import type { Meta } from '@storybook/react';
import { Logo } from '../shared';
import { ELogoType } from '../shared/interfaces';

const meta: Meta<typeof Logo> = {
  title: 'UI/Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta;

export const Dark = {
  args: {
    type: ELogoType.DARK,
    text: 'Ecommerce',
  },
};

export const Light = {
  args: {
    type: ELogoType.LIGHT,
    text: 'Ecommerce',
  },
};

export const Admin = {
  args: {
    type: ELogoType.NOBORDER,
    text: '',
  },
};
