import './App.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import data from './data';
import theme from './theme';
import Search from './search/Search';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header" />
        <main>
          <Search data={data} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
