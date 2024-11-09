import React, { useContext } from 'react';

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
  const [theme, setTheme] = React.useState<Theme>();

  const toggleTheme = () => {
    console.log(theme);
    setTheme((v) => {
      if (v === Theme.light) {
        return Theme.dark;
      } else {
        return Theme.light;
      }
    });
  };

  const value = { theme, toggleTheme, setTheme };

  return (
    <>
      <ThemeContext.Provider value={value}>
        <>{children}</>
      </ThemeContext.Provider>
    </>
  );
};
