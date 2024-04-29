import React from 'react'
import { useContext, createContext, useState, useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
const SearchContext = createContext("")

function NameBar() {
  const { searchType, setSearchType } = useContext(SearchContext)

  function toggleType(event) {
    setSearchType(event.target.id.toString())
  }

  return (
    <div className='flex flex-row items-center justify-between w-full'>

      <h1 className='flex h-11 items-center justify-center text-3xl font-bold'>
        JSearch
      </h1>

      <div className='flex flex-row items-center justify-center gap-1 border-2 border-black rounded-full'>

        <button id='movies' onClick={toggleType} className={searchType == "movies" ? "btn-primary" : "btn-notprimary"}>
          Movies
        </button>

        <button id='google' onClick={toggleType} className={searchType == "google" ? "btn-primary" : "btn-notprimary"}>
          Google
        </button>

      </div>
    </div>
  )
}


function SearchBar() {
  const navigate = useNavigate()

  const [searchTerm, setsearchTerm] = useState('')


  const { setResults } = useContext(SearchContext)

  const { searchType } = useContext(SearchContext)
  function passSearchTerm(event) {
    setsearchTerm(event.target.value)
  }
  async function fetchAndNav() {
    if (searchType == 'movies') {
      try {
        const response = await axios.get('https://www.omdbapi.com/?apikey=e9cb394' + '&s=' + searchTerm);
        // console.log(response.data.Search)
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
        await setResults(response.data.Search)
        // await setResults(mock)
        // await setexpanded(false)
        navigate("search?query=" + searchTerm.split(' ').join('_') + "&type=" + searchType)

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
        // const response = await axios.request(options);
        // response.data
        //  await setResults(response.data)
        const mockg = {
          "search_term": "Nike",
          "knowledge_panel": {
            "name": "Nike",
            "label": "Footwear company",
            "description": {
              "text": "Nike, Inc. is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its fiscal year 2022.",
              "url": "https://en.wikipedia.org/wiki/Nike,_Inc.",
              "site": "Wikipedia"
            },
            "image": {
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:m8TS_7lVuPlJlM",
              "width": 225,
              "height": 225,
              "page_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNoD9oT_VnEYNKKeOor8U4qK5T1LF4bC2iRDD75fQdveQMHTUA"
            },
            "info": [
              {
                "title": "Customer service",
                "labels": [
                  "1 (800) 806-6453"
                ]
              },
              {
                "title": "Founders",
                "labels": [
                  "Phil Knight",
                  "Bill Bowerman"
                ]
              },
              {
                "title": "Headquarters",
                "labels": [
                  "Beaverton, OR"
                ]
              },
              {
                "title": "CEO",
                "labels": [
                  "John Donahoe (Jan 13, 2020–)"
                ]
              },
              {
                "title": "Founded",
                "labels": [
                  "January 25, 1964, Eugene, OR"
                ]
              },
              {
                "title": "President",
                "labels": [
                  "John Donahoe"
                ]
              }
            ]
          },
          "results": [
            {
              "position": 1,
              "url": "https://www.nike.com/",
              "title": "Nike. Just Do It. Nike.com",
              "description": "Nike delivers innovative products, experiences and services to inspire athletes."
            },
            {
              "position": 2,
              "url": "https://www.instagram.com/nike/?hl=en",
              "title": "Nike (@nike) • Instagram photos and videos",
              "description": "307M Followers, 190 Following, 1407 Posts - See Instagram photos and videos from Nike (@nike)"
            },
            {
              "position": 3,
              "url": "https://en.wikipedia.org/wiki/Nike,_Inc.",
              "title": "Nike, Inc. - Wikipedia",
              "description": "Nike, Inc. (stylized as NIKE) is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States."
            },
            {
              "position": 4,
              "url": "https://www.linkedin.com/company/nike",
              "title": "Nike - LinkedIn",
              "description": "NIKE, Inc. is a purpose-driven organization energized by a shared commitment to move the world forward through the power of sport. We champion diversity and ..."
            },
            {
              "position": 5,
              "url": "https://twitter.com/Nike",
              "title": "Nike - X.com",
              "description": "It's time to feel the unreal. The next generation of Air technology is available now. The Nike Air Max Dn is designed to offer an all-new underfoot sensation ..."
            },
            {
              "position": 6,
              "url": "https://www.footlocker.com/category/brands/nike.html",
              "title": "Nike Shoes, Apparel, and Accessories - Foot Locker",
              "description": "From Nike training shoes to Nike clothing and Nike backpacks , Foot Locker has everything you need to dominate your next workout."
            },
            {
              "position": 7,
              "url": "https://www.nikegrind.com/",
              "title": "Nike Grind | Changing the Game From the Ground Up",
              "description": "Our innovative partners are using Nike Grind materials to make high-performance surfaces and products. Together, we're transforming waste into limitless ..."
            },
            {
              "position": 8,
              "url": "https://www.youtube.com/user/NIKE",
              "title": "Nike - YouTube",
              "description": "In the Wild · Welcome to In The Wild. A series where we discover which Nike products athletes everywhere are rocking in their natural habitat. · L.A. ..."
            },
            {
              "position": 9,
              "url": "https://www.facebook.com/nike/",
              "title": "Nike - Facebook",
              "description": "Nike · Page · Sportswear Store · +44 1642 680875 · nike.com."
            },
            {
              "position": 10,
              "url": "https://apps.apple.com/us/app/nike-shoes-apparel-stories/id1095459556",
              "title": "Nike: Shoes, Apparel, Stories 4+ - App Store - Apple",
              "description": "Exclusive access to the latest Nike products, personalized recommendations, and seamless shopping experiences - find everything you need to create your own look ..."
            }
          ]
        }


        //  console.log(response)

      } catch (error) {
        console.log("Error")
      }
    }


  }

  useEffect(() => {
    setsearchTerm('');
  }, [searchType])



  return (

      <div className='flex flex-col md:flex-row items-center justify-center w-full gap-2'>

        <div className='flex flex-row border-2 border-black rounded-full'>

          <input
            value={searchTerm}
            onChange={passSearchTerm}
            className='rounded-full px-4 py-2 w-[90%] '
            type="text"
            placeholder={searchType == 'movies' ? 'Search movies' : 'Search google'}
            autoFocus />

          <button onClick={fetchAndNav} className='btn-primary'>
            search
          </button>
        </div>
      </div>

  )
}


function Bar() {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-center w-screen z-20 fixed top-0 left-0 h-32 p-4 rounded-b-xl border-2 border-black bg-white gap-2`} >

      <NameBar />
      <SearchBar />

    </div>
  )
}


export default function Home() {
  const [results, setResults] = useState(null)

  const [searchType, setSearchType] = useState('movies')

  return (
      <SearchContext.Provider value={{ searchType, setSearchType, setResults }}>
        <Bar />
        <Outlet context={results} />
  
      </SearchContext.Provider>

  )
}
