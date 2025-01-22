import React, { FC } from 'react';
import cls from './modal.module.scss';

type ModalProps = {
  visible: boolean;
  children?: React.ReactNode;
};

export const Modal: FC<ModalProps> = ({ visible, children }) => {
  return (
    <div className={visible ? cls.root : cls.none}>
      <div className={cls.modal}>
        {children}
        <div className={cls.box}>
          <button type="button" className={cls.button}>
            закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
