import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler, ReactElement, ReactNode } from "react";
import Styles from './header.module.css'
import { ModalForm } from "../modal-form.module";

export interface ShowModalProps {
    child: ReactNode | null;
}

export const ShowModal: React.FC<ShowModalProps> = ({child }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState("");

    //const handleClose = () => { setModalVisible(false)};
    const handleModalOpen = () => {
      setModalVisible(true);
    };
    const handleModalClose = () => {
      setModalVisible(false);
    };

    return (
        <div>
            <input type="text"  id = "name"  onChange={e => setText(e.target.value)}/> 
            <button type="button" onClick={handleModalOpen}>open modal</button>
            {/* <button onClick={() => setModalVisible(true)}>Open</button> */}
            {modalVisible && (<ModalForm isVisible= {true} onClose = {handleModalClose} children = {text}  />)}
        </div>
      );
}
