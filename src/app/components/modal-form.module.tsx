import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler } from "react";
import Styles from './modal-form.module.css'
import Portal, { createContainer } from "./portal/portal";

const MODAL_CONTAINER_ID = "modal-container-id";

interface  ModalFormProps {
  isVisible: boolean,
  onClose: () => void;
  children: React.ReactNode | React.ReactNode[]
}

export const ModalForm: React.FC<ModalFormProps> = ({ isVisible, onClose, children }) => {
    const [isShowModal, setShowModal] = useState(false);
    useEffect(() => {
        createContainer({ id: MODAL_CONTAINER_ID });
        setShowModal(true);
      }, []);

    const handleClose: MouseEventHandler<HTMLButtonElement > = useCallback(() => {
        onClose?.();
    }, [onClose]);

      return isShowModal? (
        <Portal id={MODAL_CONTAINER_ID}>
        <div className={Styles.wrap}>
            <div className={Styles.content}>
                <div className={Styles.header}>
                <button
                    type="button"
                    className={Styles.closeButton}
                    onClick={handleClose}>
                    Х
                </button>
                </div>
                <div className={Styles.middle}>{children}</div>               
            </div>
        </div>
        </Portal>
      ) : null;  
};