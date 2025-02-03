import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import './modal.scss';
import { createPortal } from 'react-dom';

interface IModalProps {
  closeModal: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}

export const Modal: FC<IModalProps> = ({ children, closeModal, isOpen }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  return isOpen
    ? createPortal(
        <div className={cn('overlay', { active: isVisible })}>
          <div className="modal">
            <div className="close-btn" onClick={closeModal}>
              x
            </div>
            <div className="content">{children}</div>
          </div>
          <div className="black"></div>
        </div>,
        document.body
      )
    : null;
};
