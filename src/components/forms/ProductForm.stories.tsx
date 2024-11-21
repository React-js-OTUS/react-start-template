import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductForm from './ProductForm';

export default {
  title: 'Components/ProductForm',
  component: ProductForm,
} as ComponentMeta<typeof ProductForm>;

const Template: ComponentStory<typeof ProductForm> = (args) => <ProductForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  // onSave: (product) => {
  //     console.log('Сохранён продукт:', product);
  // },
};

export const WithInitialValues = Template.bind({});
WithInitialValues.args = {
  initialValues: {
    id: 1,
    name: 'Кроссовки Nike',
    price: 4999,
    imageUrl: 'https://example.com/nike.jpg',
    description: 'Популярные кроссовки Nike.',
  },
  // onSave: (product) => {
  //     console.log('Обновлён продукт:', product);
  // },
};
