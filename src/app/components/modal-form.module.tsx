import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler } from "react";
import Styles from './modal-form.module.css'

interface  ModalFormProps {
  isVisible: boolean,
  children: React.ReactNode | string
}

export const ModalForm: React.FC<ModalFormProps> = ({ isVisible, children }) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const [isShowModal, setShowModal] = useState(isVisible);

    const handleClose: MouseEventHandler<HTMLButtonElement> = useCallback(() => { 
        setShowModal(false);   
    }, []);

      
      return isShowModal? (
        <div className={Styles.wrap}>
            <div className={Styles.content}>
                <button
                    type="button"
                    className={Styles.closeButton}
                    onClick={handleClose}>
                    Х
                </button>
               
                {children}
            </div>
        </div>
      ) : null;  
};