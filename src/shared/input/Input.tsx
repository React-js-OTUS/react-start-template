import React, { FC, InputHTMLAttributes } from 'react';
import cls from './input.module.scss';
import cn from 'clsx';

type InputProps = {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({ className, ...rest }) => {
  return <input className={cn(cls.input, [className])} {...rest} />;
};
