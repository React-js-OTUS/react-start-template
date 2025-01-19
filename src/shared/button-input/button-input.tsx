import React, { FC, useState } from 'react';
import { ModalInput } from '../modal-input/ModalInput';

interface ButtonInputProps {
  initialInputValue?: string;
  initialVisible?: boolean;
}

export const ButtonInput: FC<ButtonInputProps> = ({ initialInputValue = '', initialVisible }) => {
  const [valueInput, setValueInput] = useState<string>(initialInputValue);
  const [visible, setIsVisible] = useState<boolean>(initialVisible);

  const handleOpenModal = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <input type="text" value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
      <button onClick={() => handleOpenModal()}>Открыть модальное окно</button>
      <ModalInput visible={visible} setIsVisible={setIsVisible}>
        <p>{valueInput}</p>
      </ModalInput>
    </>
  );
};
