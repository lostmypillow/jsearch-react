import React from 'react'


function MovieCard({ movie }) {
  return (
    <div className="flex flex-row items-center justify-start gap-4 border-2 border-black min-h-24 m-2 p-2 rounded-2xl backdrop-blur-3xl grow md:max-w-96">

      <img
        className='h-11'
        src={movie.Poster != "N/A" ? movie.Poster : "{ SearchIcon }"}
        alt="poster"
      />
      <h3 className="text-sm font-light">
        {movie.Type.toUpperCase()}
      </h3>

      <div className="text-xl font-bold">
        {movie.Title} <br class="md:hidden"></br>
        <div className="text-base font-semibold">
          ({movie.Year})
        </div>

      </div>


    </div>
  );
}

export default function Results({ movieArray }) {
  return (
    <div className="flex flex-col md:pt-11 w-screen mx-4 my-2 gap-2">

      <div className='font-bold text-3xl'>    Results</div>

      {movieArray?.length > 0 ? (
        movieArray.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <h1>No Results</h1>
      )}

    </div>
  )
}
