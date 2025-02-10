import type { Meta } from '@storybook/react';
import { RangeSlider } from '../shared';

const meta: Meta<typeof RangeSlider> = {
  title: 'UI/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    min: 0,
    max: 100,
  },
};
