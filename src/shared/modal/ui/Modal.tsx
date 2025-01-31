import React, { FC } from 'react';
import cls from './modal.module.scss';

type ModalProps = {
  visible: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

export const Modal: FC<ModalProps> = ({ visible, children, onClose }) => {
  return (
    <div className={visible ? cls.root : cls.none}>
      <div className={cls.modal}>
        {children}
        <div className={cls.box}>
          <button type="button" className={cls.button} onClick={onClose}>
            закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
