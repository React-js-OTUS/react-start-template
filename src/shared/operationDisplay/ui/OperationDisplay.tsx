import React, { FC } from 'react';
import cls from './operationDisplay.scss';
import cn from 'clsx';

type OperationDisplayProps = {
  className?: string;
  name: string;
  sumOperations: number;
  categoryName: string;
  description: string;
};

export const OperationDisplay: FC<OperationDisplayProps> = ({
  className,
  sumOperations,
  categoryName,
  description,
  name,
}) => {
  return (
    <div className={cn(cls.operation, [className])}>
      <h2 className={cls.title}>{name}</h2>
      <p>Sum: {sumOperations}</p>
      <p>category: {categoryName}</p>
      <p className={cls.description} title={description}>{`description: ${description}`}</p>
    </div>
  );
};
