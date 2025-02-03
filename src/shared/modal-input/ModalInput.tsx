import React, { FC } from 'react';
import cn from 'classnames';
import './modal-input.css';

interface IModalProps {
  visible: boolean;
  children: React.ReactNode;
  setIsVisible: (arg0: boolean) => void;
}

export const ModalInput: FC<IModalProps> = ({ visible, setIsVisible, children }) => {
  return (
    <div className={cn('overlay', { active: visible })}>
      <div className="modal">
        <div className="close-btn" onClick={() => setIsVisible(false)}>
          x
        </div>
        <div className="content">{children}</div>
      </div>
      <div className="black"></div>
    </div>
  );
};
