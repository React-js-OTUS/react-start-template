import React from 'react';

import './operation-summary.css';

interface OperationSummaryProps {
  amount: number;
  category: string;
  title: string;
  description: string;
}

const truncateDescription = (description: string, maxLength: number): string => {
  if (description?.length <= maxLength) return description;
  return `${description?.slice(0, maxLength)}...`;
};

const OperationSummary: React.FC<OperationSummaryProps> = ({ amount, category, title, description }) => {
  return (
    <div className="operation-summary">
      <div className="operation-summary__amount">Сумма: {amount} ₽</div>
      <div className="operation-summary__category">Категория: {category}</div>
      <div className="operation-summary__title">{title}</div>
      <div className="operation-summary__description">{truncateDescription(description, 50)}</div>
    </div>
  );
};

export default OperationSummary;
