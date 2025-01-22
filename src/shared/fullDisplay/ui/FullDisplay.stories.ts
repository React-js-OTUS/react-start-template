import { Meta, StoryObj } from '@storybook/react';
import { FullDisplay } from './FullDisplay';

const meta: Meta<typeof FullDisplay> = {
  title: 'компоненты/Full Display',
  component: FullDisplay,
};

export default meta;

type Story = StoryObj<typeof FullDisplay>;

export const FullDisplayStory: Story = {
  args: {
    date: new Date(),
    categoryName: 'Продукты',
    name: 'молоко',
    sumOperations: 200,
    description:
      'Молоко — ценный пищевой продукт, содержащий более 100 питательных веществ, включая белки, жир, молочный сахар, минеральные вещества, фосфолипиды, органические кислоты, витамины, ферменты.',
  },
};
