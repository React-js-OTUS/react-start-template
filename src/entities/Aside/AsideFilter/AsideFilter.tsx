import React from 'react';
import { IAsideFilter } from '../interfaces';

export const AsideFlter: React.FC<IAsideFilter> = ({ children, title }) => (
  <section className="font-inter">
    <h2 className="mb-6 font-medium text-sm text-b-900 leading-7">{title}</h2>
    {children}
  </section>
);
