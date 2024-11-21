import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button onClick={toggleLanguage} className="language-toggle">
      {i18n.language === 'en' ? 'RU' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
