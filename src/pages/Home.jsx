import React from "react";
import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
const SearchContext = createContext("");

function NameBar() {


  return (
    <div className="flex w-full flex-row items-center justify-between">
      <h1 className="flex h-11 items-center justify-center text-3xl font-bold">
        JSearch
      </h1>

      
    </div>
  );
}

function SearchBar() {
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState("");
  const { setResults, searchType, setSearchType } = useContext(SearchContext);

  function toggleType(event) {
    setSearchType(event.target.id.toString());
  }
  function passSearchTerm(event) {
    setsearchTerm(event.target.value);
  }
  async function fetchAndNav() {
    if (searchType == "movies") {
      try {
        const response = await axios.get(
          "https://www.omdbapi.com/?apikey=e9cb394" + "&s=" + searchTerm,
        );
        await setResults(response.data.Search);
        navigate(
          "search?query=" +
            searchTerm.split(" ").join("_") +
            "&type=" +
            searchType,
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      const options = {
        method: "GET",
        url: "https://google-search74.p.rapidapi.com/",
        params: {
          query: searchTerm,
          limit: "10",
          related_keywords: "false",
        },
        headers: {
          "X-RapidAPI-Key":
            "4cc2304fb3msh28544a85c39f266p17c92bjsnd635c2ee140a",
          "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        await setResults(response.data);
        navigate(
          "search?query=" +
            searchTerm.split(" ").join("_") +
            "&type=" +
            searchType,
        );
      } catch (error) {
        console.log("Error");
      }
    }
  }

  useEffect(() => {
    setsearchTerm("");
  }, [searchType]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row md:justify-end">
      <div className="flex flex-row items-center justify-center gap-1 rounded-full border-2 border-black">
        <button
          id="movies"
          onClick={toggleType}
          className={searchType == "movies" ? "btn-primary" : "btn-notprimary"}
        >
          Movies
        </button>

        <button
          id="google"
          onClick={toggleType}
          className={searchType == "google" ? "btn-primary" : "btn-notprimary"}
        >
          Google
        </button>
      </div>
      <div className="flex flex-row rounded-full border-2 border-black">
        <input
          value={searchTerm}
          onChange={passSearchTerm}
          className="w-[90%] rounded-full px-4 py-2 "
          type="text"
          placeholder={
            searchType == "movies" ? "Search movies" : "Search google"
          }
          autoFocus
        />

        <button onClick={fetchAndNav} className="btn-primary">
          search
        </button>
      </div>
    </div>
  );
}

function Bar() {
  return (
    <div
      className={`fixed left-0 top-0 z-20 flex h-48 w-screen flex-col items-center justify-center gap-2 rounded-b-xl border-2 border-black bg-white p-4 md:flex-row md:justify-start md:h-fit`}
    >
      <NameBar />
      <SearchBar />
    </div>
  );
}

export default function Home() {
  const [results, setResults] = useState(null);

  const [searchType, setSearchType] = useState("movies");

  return (
    <SearchContext.Provider value={{ searchType, setSearchType, setResults }}>
      <Bar />
      <Outlet context={results} />
    </SearchContext.Provider>
  );
}
