import React from 'react';
import { EThemeVariables, StoreContext } from '../../../app/StoreContext';

export const ThemeSwitcherBtn: React.FC = () => {
  const { theme, themeSwitchHandler } = React.useContext(StoreContext);
  const imagePath = 'https://github.com/furtivite/cdn.furtivite.github.io/blob/main/images/';
  const imageSrc =
    theme === EThemeVariables.DARK ? `${imagePath}sun-white.png?raw=true` : `${imagePath}moon-dark.png?raw=true`;

  return (
    <button className="w-fit bg-transparent" onClick={themeSwitchHandler}>
      <img src={imageSrc} alt="" width={25} height={25} />
      <span className="sr-only">Current theme is {theme}</span>
    </button>
  );
};
