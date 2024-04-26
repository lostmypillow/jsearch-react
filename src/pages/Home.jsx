import React from 'react'
import { useContext, createContext, useState, useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { check } from 'prettier'
const ExpandedContext = createContext(true)
const SearchContext = createContext("")

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







function BarCombined() {
    const navigate = useNavigate()
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
    }
    const { movies, setMovies } = useContext(SearchContext)
    const { expanded, setexpanded } = useContext(ExpandedContext)
    function checkContext() {
        setMovies(results)
        navigate("search")

    }

    const fetchAndNav = async () => {
        if (searchType == 'movies') {
            try {
                const response = await axios.get('https://www.omdbapi.com/?apikey=e9cb394' + '&s=' + searchTerm);
                console.log(response.data.Search)
                // const mock = [
                //     {
                //       "Title": "Dune",
                //       "Year": "2021",
                //       "imdbID": "tt1160419",
                //       "Type": "movie",
                //       "Poster": "https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
                //     },
                //     {
                //       "Title": "Dune: Part Two",
                //       "Year": "2024",
                //       "imdbID": "tt15239678",
                //       "Type": "movie",
                //       "Poster": "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
                //     },
                //     {
                //       "Title": "Dune",
                //       "Year": "1984",
                //       "imdbID": "tt0087182",
                //       "Type": "movie",
                //       "Poster": "https://m.media-amazon.com/images/M/MV5BYTAzYzNlMDMtMGRjYS00M2UxLTk0MmEtYmE4YWZiYmEwOTIwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"
                //     },
                //     {
                //       "Title": "Jodorowsky's Dune",
                //       "Year": "2013",
                //       "imdbID": "tt1935156",
                //       "Type": "movie",
                //       "Poster": "https://m.media-amazon.com/images/M/MV5BMTU0MzcxMTAxMl5BMl5BanBnXkFtZTgwODMyMTIxMTE@._V1_SX300.jpg"
                //     },
                //     {
                //       "Title": "Dune",
                //       "Year": "2000",
                //       "imdbID": "tt0142032",
                //       "Type": "series",
                //       "Poster": "https://m.media-amazon.com/images/M/MV5BMTU4MjMyMTkxN15BMl5BanBnXkFtZTYwODA5OTU5._V1_SX300.jpg"
                //     },
                //     {
                //       "Title": "Children of Dune",
                //       "Year": "2003",
                //       "imdbID": "tt0287839",
                //       "Type": "series",
                //       "Poster": "https://m.media-amazon.com/images/M/MV5BMTI3ODIwMTQ5OF5BMl5BanBnXkFtZTYwNTkwNDk5._V1_SX300.jpg"
                //     },
                //     {
                //       "Title": "Dune Drifter",
                //       "Year": "2020",
                //       "imdbID": "tt11835714",
                //       "Type": "movie",
                //       "Poster": "https://m.media-amazon.com/images/M/MV5BMjc4ODFiNzItZWY5OS00YzZkLWE0ZmYtMDYwODZlMDY0NjhhXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"
                //     },
                //     {
                //       "Title": "Planet Dune",
                //       "Year": "2021",
                //       "imdbID": "tt15331462",
                //       "Type": "movie",
                //       "Poster": "https://m.media-amazon.com/images/M/MV5BYzVkNjZlMDctODEzMy00MWE1LWI4YTUtZjdmNDZhYmZhODI0XkEyXkFqcGdeQXVyNTkzMzg3NDM@._V1_SX300.jpg"
                //     },
                //     {
                //       "Title": "Dune Warriors",
                //       "Year": "1991",
                //       "imdbID": "tt0099474",
                //       "Type": "movie",
                //       "Poster": "https://m.media-amazon.com/images/M/MV5BNjU4NDc4ZTQtZGI1Ny00NTc4LTk4ODctOTIyZTliZmM0MmJjXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
                //     },
                //     {
                //       "Title": "Dune World",
                //       "Year": "2021",
                //       "imdbID": "tt14450978",
                //       "Type": "movie",
                //       "Poster": "https://m.media-amazon.com/images/M/MV5BMzMxMzQ4MTMtYTk4MC00Njc3LTllN2MtOThjMzg4OTgwNDNhXkEyXkFqcGdeQXVyMjc0Nzk1Mg@@._V1_SX300.jpg"
                //     }
                //   ]
                await setMovies(response.data.Search)
                await setexpanded(false)
                navigate("search")

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else {
            const options = {
                method: 'GET',
                url: 'https://google-search74.p.rapidapi.com/',
                params: {
                    query: 'Nike',
                    limit: '10',
                    related_keywords: 'false'
                },
                headers: {
                    'X-RapidAPI-Key': '4cc2304fb3msh28544a85c39f266p17c92bjsnd635c2ee140a',
                    'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
                }
            };
            try {
                const response = await axios.request(options);
             console.log(response)

            } catch (error) {
                console.log("Error")
            }
        }


    }



    return (
        <>
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

                <input
                    value={searchTerm}
                    onChange={passSearchTerm}
                    className='border-2 border-black px-4 py-2 w-[90%] rounded-xl'
                    type="text"
                    placeholder={searchType == 'movies' ? 'Search movies' : 'Search google'}
                    autoFocus />

            </div>


            <div className='flex w-full grow md:w-fit items-center justify-center'>
                <button onClick={fetchAndNav} className='btn-primary'>
                    search
                </button>
            </div>
        </>
    )
}


function MobileBar() {
    const [expanded, setexpanded] = useState(true)
    function collapse() {
        setexpanded(!expanded)
    }
    return (
        <div className={`flex flex-col md:flex-row items-center justify-center w-screen z-20 fixed bottom-0 md:top-0 left-0  p-4 rounded-t-xl border-2 border-black bg-white  ${expanded ? "h-[50vh] md:h-11" : ""} `} >
            <BarLeft>
                <button onClick={collapse} className='btn-primary md:hidden'>
                    {expanded ? "Close" : "Search"}
                </button>
            </BarLeft>

            <ExpandedContext.Provider value={{ expanded, setexpanded }}>
                {expanded ?
                    <>
                        <BarCombined />
                    </> :
                    <></>}
            </ExpandedContext.Provider>
        </div>
    )
}


export default function Home() {

    const [movies, setMovies] = useState(null)


    return (
        <>
            <SearchContext.Provider value={{ movies, setMovies }}>
                <Outlet context={movies} />
                <button onClick={() => {

                }}>setContext</button>
                <MobileBar />
            </SearchContext.Provider>
        </>

    )
}
