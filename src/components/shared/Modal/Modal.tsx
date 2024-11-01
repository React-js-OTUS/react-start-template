import React, { ReactNode } from 'react';
import s from './Modal.module.scss';

interface IModalProps {
  visible: boolean;
  children: ReactNode;
}

export const Modal = ({ visible, children }: IModalProps) => {
  if (!visible) return null;

  return (
    <div className={s.modalOverlay}>
      <div className={s.modalWindow}>
        <button className={s.modalClose}>×</button>
        {children}
      </div>
    </div>
  );
};
