import React from 'react';
import { Layout } from 'src/shared/layout/ui/Layout';
import { ThemeProvider } from 'src/shared/context/theme-context/theme-context';
import { ExampleCpomp } from 'src/shared/example-comp/ExampleComp';

import './App.scss';

import '../styles.scss';

function App() {
  const exampleArray = [...Array(5).keys()].map((i) => i + 1);

  return (
    <ThemeProvider>
      <Layout>
        <header className="App-header">
          <div className="content">
            {exampleArray.map((i) => (
              <ExampleCpomp key={i} />
            ))}
          </div>
        </header>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
