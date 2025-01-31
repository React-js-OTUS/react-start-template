import { Meta, StoryObj } from '@storybook/react';
import { OperationDisplay } from './OperationDisplay';

const meta: Meta<typeof OperationDisplay> = {
  title: 'компоненты/OperationDisplay',
  component: OperationDisplay,
};

export default meta;

type Story = StoryObj<typeof OperationDisplay>;

export const OperationDisplayStory: Story = {
  args: {
    categoryName: 'Продукты',
    name: 'молоко',
    sumOperations: 200,
    description:
      'Молоко — ценный пищевой продукт, содержащий более 100 питательных веществ, включая белки, жир, молочный сахар, минеральные вещества, фосфолипиды, органические кислоты, витамины, ферменты.',
  },
};
