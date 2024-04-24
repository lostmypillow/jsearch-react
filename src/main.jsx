import React from 'react'
import { Suspense, useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
  useLocation,
  Link,
  useNavigate
} from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
],
{
  basename:"/jsearch-react"
}
);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
