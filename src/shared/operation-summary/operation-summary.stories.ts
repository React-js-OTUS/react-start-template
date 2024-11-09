import type { Meta } from '@storybook/react';
import OperationSummary from './operation-summary';

const meta: Meta<typeof OperationSummary> = {
  title: 'Components/OperationSummary',
  component: OperationSummary,
  tags: ['autodocs'],
  argTypes: {
    amount: {
      control: 'number',
      description: 'Сумма операции в валюте (₽)',
      defaultValue: 1000,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1000 },
      },
    },
    category: {
      control: 'text',
      description: 'Категория операции',
      defaultValue: 'Food',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Food' },
      },
    },
    title: {
      control: 'text',
      description: 'Название операции',
      defaultValue: 'Grocery Shopping',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Grocery Shopping' },
      },
    },
    description: {
      control: 'text',
      description: 'Краткое описание операции',
      defaultValue: 'Bought groceries for the week.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Bought groceries for the week.' },
      },
    },
  },
};

export default meta;

export const DefaultOperationSummary = {};
