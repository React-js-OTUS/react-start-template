import { Place } from './Place';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Place> = {
  title: 'компоненты/Place',
  component: Place,
};

export default meta;

type Story = StoryObj<typeof Place>;
export const PlaceStory: Story = {
  args: {},
};
