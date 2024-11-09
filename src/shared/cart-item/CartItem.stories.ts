import { Meta } from '@storybook/react';
import CartItem from './CartItem';

const meta: Meta<typeof CartItem> = {
  title: 'Components/CartItem',
  component: CartItem,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Название товара',
      defaultValue: 'Пример товара',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Пример товара' },
      },
    },
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
      defaultValue: 'https://via.placeholder.com/80',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'https://via.placeholder.com/80' },
      },
    },
    onRemove: {
      action: 'removed', // Позволяет отслеживать действия в Storybook
      description: 'Функция для удаления товара',
    },
  },
};

export default meta;

// История для компонента с заполненными пропсами
export const DefaultCartItem = {
  args: {
    title: 'Пример товара',
    price: 150,
    imageUrl: 'https://via.placeholder.com/80',
    onRemove: () => console.log('Товар удален'), // Пример обработчика удаления
  },
};
