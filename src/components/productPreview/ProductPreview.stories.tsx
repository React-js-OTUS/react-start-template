import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProductPreview from './ProductPreview';
import img1 from '../../shared/images/image1.jpg';

export default {
  title: 'Components/ProductPreview',
  component: ProductPreview,
  argTypes: {
    price: {
      control: 'number',
      defaultValue: 9999,
    },
    imageUrl: {
      control: 'text',
      defaultValue: img1,
    },
    name: {
      control: 'text',
      defaultValue: 'Кроссовки Nike Air Max',
    },
    description: {
      control: 'text',
      defaultValue: 'Легкие и удобные кроссовки для бега.',
    },
  },
} as Meta;

const Template: Story<{
  id: number;
  price: number;
  imageUrl: string;
  name: string;
  description: string;
  onEdit: () => void;
}> = (args) => <ProductPreview {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  price: 9999,
  imageUrl: img1,
  name: 'Кроссовки Nike Air Max',
  description: 'Легкие и удобные кроссовки для бега.',
};
