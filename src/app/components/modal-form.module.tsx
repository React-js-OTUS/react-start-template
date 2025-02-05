import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler } from "react";
import Styles from './modal-form.module.css'

interface  ModalFormProps {
  isVisible: boolean,
  onClose: () => void;
  children: React.ReactNode | string
}

export const ModalForm: React.FC<ModalFormProps> = ({ isVisible, onClose, children }) => {
    return isVisible? (
        <div className={Styles.wrap}>
            <div className={Styles.content}>
                <div className={Styles.header}>
                <button
                    type="button"
                    className={Styles.closeButton}
                    onClick={onClose}>
                    Х
                </button>
                </div>
                <div className={Styles.middle}>{children}</div>               
            </div>
        </div>
    ) : null;  
};