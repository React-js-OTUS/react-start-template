import React from 'react';
import './example-comp.scss';
import { useThemeContext } from '../context/theme-context/theme-context';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

export const ExampleCpomp = () => {
  const { theme, toggleTheme } = useThemeContext();

  const containerClass = classNames('container', {
    dark: theme === 'dark',
    light: theme === 'light',
  });

  const { t } = useTranslation();

  return (
    <div className={classNames(containerClass)}>
      <p>{t('lorem')}</p>
      <button onClick={toggleTheme}>сменить тему</button>
    </div>
  );
};
