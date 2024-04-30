import React from 'react'
import { useState } from 'react';
import { useOutletContext } from 'react-router';
import { useSearchParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="flex flex-row items-center justify-start gap-4 border-2 border-black min-h-24  px-4 py-2 rounded-2xl w-full">

      <img
        className='h-11'
        src={movie.Poster != "N/A" ? movie.Poster : "SearchIcon"}
        alt="poster"
      />
      <h3 className="text-sm font-light">
        {movie.Type.toUpperCase()}
      </h3>

      <div className="text-xl font-bold">
        {movie.Title} <br className="md:hidden"></br>
        <div className="text-base font-semibold">
          ({movie.Year})
        </div>

      </div>


    </div>
  );
}

function KnowledgeCard({ knowledge }) {
  const [infoShown, setInfoShown] = useState(false)
  function toggleShow() {
    setInfoShown(!infoShown)
  }
  return (
    <div className='flex flex-col items-start justify-center gap-4 border-2 border-black min-h-24  mx-4 my-8 px-4 py-8 rounded-2xl grow'>
      <h3 className="text-sm font-light">KNOWLEDGE PANEL</h3>

      <div className="flex flex-row w-full items-center justify-between">
        <h1 className="text-2xl">
          {knowledge.name}
        </h1>
        {/*        <img className="max-w-10"alt="image" /> */}
      </div>

      <h2 className="text-base font-light">
        {knowledge.label}
      </h2>


      <div className="text-base">
        {knowledge.description.text}
      </div>

      <Link to={knowledge.description.url}>
        Source: {knowledge.description.site}
      </Link>

      <button className='btn-primary' onClick={toggleShow}>
        <span>
          Show More Info
        </span>

      </button>
      {infoShown ?

        <>
          {knowledge.info.map((inf) => (
            <>
              <div className="font-bold"> {inf.title}:</div>

              <div >
                {inf.labels.map((info) => (
                  <div>{info}</div>
                ))}
              </div>

            </>
          ))} </> : null}

    </div>
  )
}


function GoogleResultsCard({resultslst}) {

}

{/* <h2 v-if="results != ''" class="mx-4 my-8 text-2xl font-bold">Results:</h2>
<div class="flex flex-col border-2 border-black rounded-3xl  mx-4 my-8 px-4 py-8 gap-4"  v-for="r in results">

    <NuxtLink class="flex text-2xl text-blue-600 " :to="r.url"
        :key="r.position">
        {{ r.title }}

    </NuxtLink>
    <div class="flex">{{ r.description }}</div>

</div> */}

function GoogleCard({ googleresults }) {
  const knowledge = googleresults.knowledge_panel
  const results = googleresults.results
  return (
    <>
      <KnowledgeCard knowledge={knowledge} />
      {/* <GoogleResultsCard resultslst={results} /> */}

    </>


  )

}

export default function Results() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query')
  const type = searchParams.get('type')
  const results = useOutletContext()
  return (
    <div className="flex flex-col pt-32 w-svw px-4 py-2 gap-2 border-2 border-black">

      <div className='font-bold text-3xl'>
        Results:
      </div>

      <div className='flex flex-col md:flex-row md:flex-wrap gap-4 items-center justify-center w-full'>
        {/* <div>search query is {query}</div>
        <div>search type is {type}</div> */}
        {type == 'movies' && results?.length > 0 ?
          (
            results.map((movie) => (

              <MovieCard key={movie.imdbID} movie={movie} />
            ))
          ) : (
            <GoogleCard googleresults={results} />
          )}


      </div>

    </div>
  )
}
