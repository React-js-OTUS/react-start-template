import React, { useState, useContext } from 'react';

interface IThemeProviderProps {
  children: React.ReactNode;
}

export enum Theme {
  dark = 'dark',
  light = 'light',
}

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({} as ThemeContextType);

export const useThemeContext = (): ThemeContextType => useContext(ThemeContext);

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.light);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === Theme.light ? Theme.dark : Theme.light;
    });
    document.body.setAttribute('data-theme', theme === Theme.light ? 'dark' : 'light');
  };

  const value = { theme, toggleTheme, setTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
