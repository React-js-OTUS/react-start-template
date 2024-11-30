import React, { FC } from 'react';
import s from './logo.module.sass';
import { useTranslation } from 'react-i18next';

export const Logo: FC = () => {
  const { t } = useTranslation();

  return <div className={s.logo}>{t`components.Logo.text`}</div>;
};
