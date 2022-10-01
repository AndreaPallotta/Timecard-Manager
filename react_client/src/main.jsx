import App from '@/App';
import AuthPage from '@/pages/AuthPage';
import ChildPage from '@/pages/ChildPage';
import NotFound from '@/pages/NotFoundPage';
import Routes from '@/services/Routes';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ModeEnforcer from './styles/ModeEnforcer';

const router = createBrowserRouter([
  {
    path: Routes.home,
    element: (
      <ModeEnforcer>
        <App />
      </ModeEnforcer>
    ),
    errorElement: (
      <ModeEnforcer>
        <NotFound />
      </ModeEnforcer>
    ),
    children: [
      {
        path: '/child',
        element: <ChildPage />,
      },
    ],
  },
  {
    path: Routes.auth,
    element: (
      <ModeEnforcer>
        <AuthPage />
      </ModeEnforcer>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
