import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { Provider } from './Context/AuthContext';
import { Provider as ThemeProvider} from './Context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Provider>
      <ThemeProvider>
          <App />
      </ThemeProvider>
        </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
