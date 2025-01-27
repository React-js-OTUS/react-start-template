import type { Meta } from '@storybook/react';
import { LangSwitcherBtn } from '../shared';
import StoreDecorator from '../../.storybook/decorators/StoreDecorator';

const meta: Meta<typeof LangSwitcherBtn> = {
  component: LangSwitcherBtn,
  decorators: [StoreDecorator],
  tags: ['autodocs'],
  title: 'UI/Btns/LangSwitcherBtn',
};

export default meta;

export const Default = {
  args: {},
};
