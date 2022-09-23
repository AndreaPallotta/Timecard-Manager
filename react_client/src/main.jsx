import App from '@/App';
import NotFound from '@/pages/NotFound';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
