import React from 'react';
import { Layout } from 'src/shared/layout/ui/Layout';
import { ThemeProvider } from 'src/shared/context/theme-context/theme-context';
import { LanguageProvider } from 'src/shared/context/lang-context/lang-context';
import { ExampleCpomp } from 'src/shared/example-comp/ExampleComp';
import './lang/lang';
import './App.scss';

import '../styles.scss';

function App() {
  const exampleArray = [...Array(5).keys()].map((i) => i + 1);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <header className="App-header">
            <div className="content">
              {exampleArray.map((i) => (
                <ExampleCpomp key={i} />
              ))}
            </div>
          </header>
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
