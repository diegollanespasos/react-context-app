import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeContextProvider } from './context/ThemeContext';
import { UsersContextProvider } from './context/UsersContext';
import { LoginContextProvider } from './context/LoginContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UsersContextProvider>
        <LoginContextProvider>
          <App />
        </LoginContextProvider> 
      </UsersContextProvider>  
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);