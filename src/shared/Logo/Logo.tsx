import React from 'react';
import { ELogoType, ILogo } from '../../shared/interfaces';

export const Logo: React.FC<ILogo> = ({ type, text }) => {
  const imageUrl = 'https://raw.githubusercontent.com/furtivite/cdn.furtivite.github.io/refs/heads/main/images/';
  let url: string;
  let width: number;
  let height: number;
  switch (type) {
    case ELogoType.DARK:
      url = 'logo-dark.svg';
      width = 44;
      height = 44;
      break;
    case ELogoType.NOBORDER:
      url = 'logo-empty.svg';
      width = 16;
      height = 30;
      break;
    default:
      url = 'logo-white.svg';
      width = 40;
      height = 40;
      break;
    // case ELogoType.LIGHT:
  }

  return (
    <div className="flex items-center gap-3">
      <img src={`${imageUrl}${url}`} alt="" width={width} height={height} />
      <span className="font-manrope font-extrabold text-xl tracking-tighter">
        {type === ELogoType.NOBORDER ? 'Admin' : text}
      </span>
    </div>
  );
};
