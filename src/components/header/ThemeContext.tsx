import React, { createContext, useContext, useState, ReactNode } from 'react';

//темы
type Theme = 'light' | 'dark';

// Интерфейс для контекста
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

//контекст
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Провайдер
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

// Хук для использования темы
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme должен использоваться в ThemeProvider');
  return context;
};
