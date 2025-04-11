import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import LoginPage from './pages/login.jsx'; 
import RegisterPage from './pages/register.jsx';

// Déclaration des routes
const router = createBrowserRouter([
  // Page d'accueil
  {
    path: "/",
    element: <App />,
  },
  // Page de connexion
  {
    path: "/login",
    element: <LoginPage />,
  },
  // Page d'enregistrement
  {
    path: "/register",
    element: <RegisterPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);