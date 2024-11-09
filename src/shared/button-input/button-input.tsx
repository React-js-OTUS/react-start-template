import React, { FC, useState } from 'react';
import { ModalInput } from '../modal-input/modal-input';

export const ButtonInput: FC = () => {
  const [valueInput, setValueInput] = useState<string>('');
  const [visible, setIsVisible] = useState<boolean>();

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
