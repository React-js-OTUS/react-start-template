import React, { FC } from 'react';
import cls from './fullDisplay.module.scss';
import cn from 'clsx';
type FullDisplayProps = {
  className?: string;
  name: string;
  sumOperations: number;
  categoryName: string;
  description: string;
  date: Date;
};

export const FullDisplay: FC<FullDisplayProps> = ({
  className,
  sumOperations,
  categoryName,
  description,
  name,
  date,
}) => {
  return (
    <div className={cn(cls.display, [className])}>
      <h2>{name}</h2>
      <p>Date: {date.toLocaleDateString()}</p>
      <p>Sum: {sumOperations}</p>
      <p>category: {categoryName}</p>
      <p className={cls.description} title={description}>{`description: ${description}`}</p>
      <button>Редактировать</button>
    </div>
  );
};
