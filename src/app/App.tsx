import React from 'react';
import { Layout } from 'src/shared/layout/layout';
import './App.scss';
import { ThemeProvider, useThemeContext } from 'src/shared/context/theme-context/theme-context';

function App() {
  const { theme } = useThemeContext();

  // <div className={theme === 'dark' ? 'darkTheme' : 'lightTheme'}>
  return (
    <ThemeProvider>
      <div className="darkTheme">
        <Layout>
          <header className="App-header">
            <div className="App-tg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus rerum dolorum explicabo velit? Rerum
              nemo in porro explicabo qui praesentium eveniet quis, ipsa expedita dignissimos? Porro voluptates libero
              illum et!
            </div>
          </header>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
