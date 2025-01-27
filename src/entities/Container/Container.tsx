import React from 'react';
import { ILayout } from '../../entities/interfaces';

export const Container: React.FC<ILayout> = ({ children }: ILayout) => (
  <div className="container mx-auto my-4 px-3">{children}</div>
);
