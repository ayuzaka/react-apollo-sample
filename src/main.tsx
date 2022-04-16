import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloContext } from './ApolloContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloContext>
      <App />
    </ApolloContext>
  </React.StrictMode>
);
