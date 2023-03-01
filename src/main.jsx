import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import About from './pages/About'
import Documentation from './pages/Documentation'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/documentation",
    element: <Documentation />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
