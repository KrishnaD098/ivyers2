import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import App from './App';
import './index.css';
import { AuthProvider } from './contexts/auth-context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <HeroUIProvider>
          <ToastProvider />
          <App />
        </HeroUIProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
);