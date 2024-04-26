import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import './index.css'
import ErrorElement from './pages/ErrorElement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "search",
        element: <Results />
      }
    ]
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
