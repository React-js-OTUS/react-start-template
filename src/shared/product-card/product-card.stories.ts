import { Meta } from '@storybook/react';
import ProductCard from './product-card';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    price: {
      control: { type: 'number' },
      description: 'Цена товара',
      defaultValue: 100,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 },
      },
    },
    imageUrl: {
      control: { type: 'text' },
      description: 'URL изображения товара',
      defaultValue: 'https://via.placeholder.com/150',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'https://via.placeholder.com/150' },
      },
    },
    title: {
      control: { type: 'text' },
      description: 'Название товара',
      defaultValue: 'Название товара',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Название товара' },
      },
    },
    description: {
      control: { type: 'text' },
      description: 'Описание товара',
      defaultValue: 'Описание товара, которое можно обрезать.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Описание товара, которое можно обрезать.' },
      },
    },
  },
};

export default meta;

// История для компонента с заполненными пропсами
export const DefaultProductCard = {
  args: {
    price: 150,
    imageUrl: 'https://via.placeholder.com/150',
    title: 'Пример товара',
    description: 'Это пример товара с подробным описанием, которое может быть длинным, и оно будет обрезано.',
  },
};
