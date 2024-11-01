import React from 'react';
import s from './OperationShort.module.scss';

interface IOperationShortProps {
  amount: number;
  category: string;
  title: string;
  description: string;
}

export const OperationShort = ({ amount, category, title, description }: IOperationShortProps) => {
  return (
    <div className={s.operationShort}>
      <h3>{title}</h3>
      <p>{category}</p>
      <p>{amount}</p>
      <p>{description.slice(0, 50)}...</p>
    </div>
  );
};
