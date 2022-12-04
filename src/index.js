import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { ThemeContextProvider } from './contexts/ThemeContext.js';

import 'normalize.css/normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
