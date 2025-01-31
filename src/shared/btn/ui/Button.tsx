import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cls from './button.module.scss';
import cn from 'clsx';

type Props = {
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({ className, children, ...rest }) => {
  return (
    <button className={cn(cls.button, [className])} {...rest}>
      {children}
    </button>
  );
};
