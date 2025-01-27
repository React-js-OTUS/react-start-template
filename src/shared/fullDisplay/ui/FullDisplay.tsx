import React, { FC, useContext } from 'react';
import cls from './fullDisplay.module.scss';
import cn from 'clsx';
import { Theme, ThemeContext } from '../../../app/providers/ThemProviders';
import { useTranslation } from 'react-i18next';

type FullDisplayProps = {
  className?: string;
  name: string;
  sumOperations: number;
  categoryName: string;
  description: string;
  date: Date;
};

export const FullDisplay: FC<FullDisplayProps> = ({ className, sumOperations, categoryName, description, date }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className={cn(theme === Theme.LIGHT ? cls.displayLight : cls.displayDark, [className])}>
      <h2> {t('Доход')}</h2>
      <p>
        {t('Дата')}: {date.toLocaleDateString()}
      </p>
      <p>
        {t('Сумма')}: {sumOperations}
      </p>
      <p>
        {t('Категория')}: {categoryName}
      </p>
      <p className={cls.description} title={description}>
        {t('Описание')} : {`${description}`}
      </p>
      <button>{t('Редактировать')}</button>
    </div>
  );
};
