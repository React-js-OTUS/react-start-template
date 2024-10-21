import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler, ReactElement, ReactNode } from "react";
import Styles from './logo.module.css'
import { ReactComponent as LogoSvg } from '../assets/icons8-logo.svg';

export interface  LogoProps {
    image: string
}

export const Logo: React.FC<LogoProps> = ({image }) => {

    return (
        <div className={Styles.logo} >
           <img src={require('../assets/icons8-logo.svg')}  />
        </div>
      );
}

