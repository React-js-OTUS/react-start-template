import React from 'react';
import { useTranslation } from 'react-i18next';
import { IModal } from '../../interfaces';

export const ModalBackgorund: React.FC<IModal> = ({ children, changeVisibility }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full absolute top-0 left-0">
      <div className="flex justify-center items-center min-h-dvh relative">
        <div className="w-full h-full bg-b-500 opacity-40 absolute top-0 left-0"></div>
        <div className="w-fit opacity-1 relative">
          <button className="absolute -top-6 -right-6" onClick={changeVisibility}>
            <img
              src="https://raw.githubusercontent.com/furtivite/cdn.furtivite.github.io/refs/heads/main/images/close-white.svg"
              alt=""
              width={22}
              height={32}
            />
            <span className="sr-only">{t('modal.close')}</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};
