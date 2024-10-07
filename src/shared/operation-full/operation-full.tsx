import React from 'react';

import './operation-full.css';

export interface OperationFullProps {
  amount: number;
  category: string;
  title: string;
  description: string;
  date: string;
}

export const OperationFull: React.FC<OperationFullProps> = ({ amount, category, title, description, date }) => {
  return (
    <div className="operation-full">
      <h3>{title}</h3>
      <p>Сумма: {amount} ₽</p>
      <p>Категория: {category}</p>
      <p>{description}</p>
      <p>Дата: {new Date(date).toLocaleDateString()}</p>
    </div>
  );
};
