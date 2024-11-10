import { Meta } from '@storybook/react';
import OperationDetail from './operation-detail';

const meta: Meta<typeof OperationDetail> = {
  title: 'Components/OperationDetail',
  component: OperationDetail,
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
    category: {
      control: { type: 'text' },
      description: 'Категория товара',
      defaultValue: 'Продукты',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Продукты' },
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
      defaultValue: 'Это полное описание товара, которое будет отображаться в этом компоненте.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Это полное описание товара, которое будет отображаться в этом компоненте.' },
      },
    },
  },
};

export default meta;

export const DefaultOperationDetail = {
  args: {
    price: 150,
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Операции',
    title: 'Пример операции',
    description: 'Это полное описание операции, которое будет отображаться в этом компоненте.',
  },
};
