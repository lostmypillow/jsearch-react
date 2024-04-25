import React from 'react'
import { useContext, createContext, useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { useAutoAnimate } from '@formkit/auto-animate/react'
const ExpandedContext = createContext(true)
const SearchContext = createContext("")

function CloseButton({ toggleClose }) {
    const [close, setClose] = useState(false)
    const expandedState = useContext(ExpandedContext)
    function sendCloseToParent() {
        toggleClose(close)
    }
    return (
        <button onClick={sendCloseToParent} className='btn-primary md:hidden'>
            {expandedState ? "Close" : "Search"}
        </button>
    )
}

function BarLeft({ children }) {
    return (
        <div className='flex flex-row items-center justify-between w-full md:w-fit grow'>
            <h1 className='flex h-11 items-center justify-center text-3xl font-bold'>
                JSearch
            </h1>
            {children}

        </div>
    )
}

function BarMid({updateSearchTerm}) {
    const [searchType, setsearchType] = useState('movies')
    const [searchTerm, setsearchTerm] = useState('')
    function changeToMovies() {
        setsearchType("movies")
    }
    function changeToGoogle() {
        setsearchType("google")
    }
    function passSearchTerm(event) {
        setsearchTerm(event.target.value)
        updateSearchTerm(event.target.value)
    }
    return (
        <div className='flex flex-col md:flex-row items-center justify-center w-full grow gap-2'>
            <div className='flex flex-row'>
                <button
                    onClick={changeToMovies}
                    className={`${searchType == 'movies' ? "bg-black text-white rounded-full px-4 py-2 w-full" : "px-4 py-2 w-full"}`}>
                    Movies
                </button>

                <button
                    onClick={changeToGoogle}
                    className={`${searchType == 'google' ? "bg-black text-white rounded-full px-4 py-2 w-full" : "px-4 py-2 w-full"}`}>
                    Google
                </button>

            </div>

            <input value={searchTerm} onChange={passSearchTerm} className='border-2 border-black px-4 py-2 w-[90%] rounded-xl' type="text" placeholder={searchType == 'movies'? 'Search movies' : 'Search google'} autoFocus />
{searchTerm}

        </div>
    )
}

function BarRight() {
    const searchTerm = useContext(SearchContext)
    const navigate = useNavigate()
    const [movies, setMovies] = useState()
    function navigateToSearch() {

        navigate(`/search`)
    }
    async function searchMovies() {
        try {
            const response = await axios.get('https://www.omdbapi.com/?apikey=e9cb394' + '&s=' + searchTerm);
          
            console.log(response.data.Search)
        
            setMovies()
            console.log(movies)
         
        } catch (error) {
            // movieError.value = response.data.Error
        }
    }
    return (
        <div className='flex w-full grow md:w-fit items-center justify-center'>
            <button onClick={searchMovies} className='btn-primary'>
    search
                {searchTerm}
              
            </button>
        </div>
    )
}



function MobileBar({ children }) {
    const expandedState = useContext(ExpandedContext)
    return (
        <div className={`flex flex-col md:flex-row items-center justify-center w-screen z-20 fixed bottom-0 md:top-0 left-0  p-4 rounded-t-xl  ${expandedState ? "h-[50vh] md:h-11" : ""} `} >
            {children}
        </div>
    )
}


export default function Home() {
    const [expanded, setexpanded] = useState(true)
    const [searchTerm, setsearchTerm] = useState("")
    function toggleClose(data) {
        setexpanded(!expanded)
    }
    function updateSearchTerm(data) {
        setsearchTerm(data)
    }
    return (
        <>
            <Outlet movieArray={[1, 2]} />
            <ExpandedContext.Provider value={expanded}>
                <MobileBar>
                    <BarLeft>
                        <CloseButton toggleClose={toggleClose} />
                    </BarLeft>

                    {expanded ?
                        <>
                        <SearchContext.Provider value={searchTerm}>
                            <BarMid updateSearchTerm={updateSearchTerm}/>
                            <BarRight />
                            </SearchContext.Provider>
                        </> :
                        <></>}
                </MobileBar>
            </ExpandedContext.Provider>
        </>

    )
}
