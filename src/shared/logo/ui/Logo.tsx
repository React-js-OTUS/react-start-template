import React, { FC } from 'react';
import cls from './logo.module.scss';
import cn from 'clsx';

type LogoProps = {
  className?: string;
};

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn(cls.logo, [className])}>
      <img src="../../../favicon.svg" alt="logo" className={cls.image} />
    </div>
  );
};
