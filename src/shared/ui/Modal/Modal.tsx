import React, { FC, ReactNode } from 'react';
import style from './Modal.module.css';
import { createPortal } from 'react-dom';

type ModalProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children?: ReactNode;
};

const Modal: FC<ModalProps> = ({ visible, setVisible, children }) => {
  debugger;
  return visible
    ? createPortal(
        <div className={style.modal_overlay}>
          <div className={style.modal_box}>
            <div className={style.close} onClick={() => setVisible(false)}></div>
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
