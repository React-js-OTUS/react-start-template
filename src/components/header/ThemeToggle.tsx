import React from 'react';
import { useTheme } from './ThemeContext';
import { useTranslation } from 'react-i18next';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const handleToggle = () => {
    toggleTheme();
  };

  return <button onClick={handleToggle}>{theme === 'light' ? t('theme_black') : t('theme_white')}</button>;
};

export default ThemeToggle;
