import React from 'react';
import { ModalBackgorund } from '../ModalBackgorund/ModalBackgorund';
import { ModalItem } from '../ModalItem/ModalItem';
import { IModal } from '../interfaces';

export const Modal: React.FC<IModal> = ({ children, changeVisibility }) => {
  return (
    <ModalBackgorund changeVisibility={changeVisibility}>
      <ModalItem>{children}</ModalItem>
    </ModalBackgorund>
  );
};
