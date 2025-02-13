import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler, ReactElement, ReactNode } from "react";
import Styles from './header.module.css'
import { ModalForm } from "../modal-form.module";

export interface ShowModalProps {
    child: ReactNode | null;
}

export const ShowModal: React.FC<ShowModalProps> = ({child }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [text, setText] = useState("");

    const handleClose = () => { setIsVisible(false)};

    let name = "";
    return (
        <div >
            <input type="text"  id = "name"  onChange={e => setText(e.target.value)}/> 
            <button onClick={() => setIsVisible(true)}>Open</button>
            <ModalForm isVisible= {isVisible} onClose = {handleClose} children = {text}  />
        </div>
      );
}
