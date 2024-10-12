import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler, ReactElement, ReactNode } from "react";
import Styles from './layout.module.css'
import { HeaderProps } from "./header.module";

interface  LayoutProps {
    children: ReactNode;
    header: ReactElement<HeaderProps>;
}

export const Layout: React.FC<LayoutProps> = ({ children, header }) => {
    return (
        <div className={Styles.wrap}>
          {header}
          {children}
        </div>
      );
}
