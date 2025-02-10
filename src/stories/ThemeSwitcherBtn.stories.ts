import type { Meta } from '@storybook/react';
import { ThemeSwitcherBtn } from '../shared';
import StoreDecorator from '../../.storybook/decorators/StoreDecorator';

const meta: Meta<typeof ThemeSwitcherBtn> = {
  component: ThemeSwitcherBtn,
  decorators: [StoreDecorator],
  tags: ['autodocs'],
  title: 'UI/Btns/ThemeSwitcherBtn',
};

export default meta;

export const Default = {
  args: {},
};
