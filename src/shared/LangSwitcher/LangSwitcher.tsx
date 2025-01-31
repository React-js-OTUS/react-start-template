import React, { FC } from 'react';
import { Button } from '../btn';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';

type LangSwitcherProps = {
  className?: string;
};

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  return (
    <Button className={cn('', [className])} onClick={() => toggle()}>
      {t('Язык')}
    </Button>
  );
};
