import React from 'react'
import { Suspense, useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  useRoutes,
  useLocation,
  Link,
  useNavigate
} from 'react-router-dom'
import './index.css'
import routes from '~react-pages'

function CurrentRouteName() {
  let location = useLocation();
  return (
    <div className="flex items-center w-fit h-11 text-3xl font-extralight gap-2">

      {location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2)}

    </div>
  )
}

function WebsiteName() {
  return (
    <div className="flex flex-row gap-2" >

      <Link to="/" className="flex items-center w-fit h-11 text-3xl font-extrabold">
        JSearch
      </Link>

      {location.pathname != '/' && <CurrentRouteName />}

    </div>
  )
}

function NavBar({ children }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-svw h-svh gap-2">
      {children}
    </div>
  )
}





function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchType, setsearchType] = useState('')
  const navigate = useNavigate()
  function handleSubmit() {
    navigate(`/search?type=${searchType}&query=${encodeURIComponent(query)}`)
  }
  
  return (
    <div className='flex flex-row border-2 border-black rounded-full mx-2'>
      
      <input
      type='text'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="outline-none rounded-full px-4 py-2 w-[90%] items-center justify-center h-11" />

      <button 
      onClick={handleSubmit} 
      className="flex flex-row gap-2  bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-fit" >
        Search
      </button>
    </div>
  )
}

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <NavBar>
        <WebsiteName />
        <SearchBar />
        {useRoutes(routes)}
      </NavBar>

    </Suspense>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/jsearch-react/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
