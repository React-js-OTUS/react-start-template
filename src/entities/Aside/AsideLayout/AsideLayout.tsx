import React from 'react';
import { ILayout } from '../../interfaces';

export const AsideLayout: React.FC<ILayout> = ({ children }) => (
  <aside className="pt-6 pl-[18px] pr-[14px] pb-8 border-solid border-[1px] border-b-100 rounded-md ">{children}</aside>
);
