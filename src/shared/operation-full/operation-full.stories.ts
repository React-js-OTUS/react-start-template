import { Meta } from '@storybook/react';
import { OperationFull } from './operation-full';

const meta: Meta<typeof OperationFull> = {
  title: 'Components/OperationFull',
  component: OperationFull,
  tags: ['autodocs'],
  argTypes: {
    amount: {
      control: { type: 'number' },
      description: 'Сумма операции в валюте (₽)',
      defaultValue: 1000,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1000 },
      },
    },
    category: {
      control: { type: 'text' },
      description: 'Категория операции',
      defaultValue: 'Food',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Food' },
      },
    },
    title: {
      control: { type: 'text' },
      description: 'Название операции',
      defaultValue: 'Grocery Shopping',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Grocery Shopping' },
      },
    },
    description: {
      control: { type: 'text' },
      description: 'Описание операции',
      defaultValue: 'Bought groceries for the week.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Bought groceries for the week.' },
      },
    },
    date: {
      control: { type: 'date' },
      description: 'Дата операции',
      defaultValue: new Date().toISOString().split('T')[0],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '2024-10-01' },
      },
    },
  },
};

export default meta;

// Истории без использования типа Story
export const Default = {
  args: {
    amount: 1000,
    category: 'Food',
    title: 'Grocery Shopping',
    description: 'Bought groceries for the week.',
    date: '2024-10-01',
  },
};

export const LargeAmount = {
  args: {
    amount: 50000,
    category: 'Electronics',
    title: 'Laptop Purchase',
    description: 'Purchased a new high-performance laptop.',
    date: '2024-09-20',
  },
};

export const LongDescription = {
  args: {
    amount: 1500,
    category: 'Entertainment',
    title: 'Movie Night',
    description: 'Watched a long series of movies at the local cinema, enjoying the experience with friends.',
    date: '2024-10-05',
  },
};
