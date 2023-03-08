import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Documentation from './pages/Docs'
import Blogs from './pages/Blogs'
import Showcase from './pages/Showcase'
import Components from './pages/Components'

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
    path: "/docs",
    element: <Documentation />,
  },
  {
    path: "/components",
    element: <Components />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/showcase",
    element: <Showcase />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
