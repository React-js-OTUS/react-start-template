import React, { FC, useContext } from 'react';
import { Theme, ThemeContext } from '../../app/providers/ThemProviders'
import cls from './themeSwitcher.module.scss';
import cn from 'clsx';
import { Button } from '../btn';
import { useTranslation } from 'react-i18next';

type ThemSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher: FC<ThemSwitcherProps> = ({ className }) => {
  const { theme, setChangeTheme } = useContext(ThemeContext);
  const {t} = useTranslation()
  return (
    <Button
      className={cn(theme === Theme.LIGHT ? cls.switchLight : cls.switchDark, [className])}
      onClick={() => setChangeTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}
    >
      {t('Тема')}
    </Button>
  );
};
