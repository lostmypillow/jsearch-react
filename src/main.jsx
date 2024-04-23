import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Suspense } from 'react'

import {
  BrowserRouter,
  useRoutes,
} from 'react-router-dom'

import routes from '~react-pages'

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/vite-react-js/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
