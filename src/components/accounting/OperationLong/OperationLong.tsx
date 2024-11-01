import React from 'react';
import s from './OperationLong.module.scss';

interface IOperationLongProps {
  amount: number;
  category: string;
  title: string;
  description: string;
  date: string;
}

export const OperationLong = ({ amount, category, title, description, date }: IOperationLongProps) => {
  return (
    <div className={s.operationLong}>
      <h3>{title}</h3>
      <p>{category}</p>
      <p>{amount}</p>
      <p>{description}</p>
      <p>{date}</p>
      <button className={s.editButton}>Edit</button>
    </div>
  );
};
