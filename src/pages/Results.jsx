import React from 'react'
import { useOutletContext } from 'react-router';
import { useSearchParams } from "react-router-dom";

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

// function KnowledgeCard({knowledge_panel}) {
//   return (
//     <>
//    <div
//    className="flex flex-col items-start justify-center gap-2 border-2 border-black min-h-24  mx-4 my-8 p-4 rounded-3xl backdrop-blur-3xl grow">
//    <h3 className="text-sm font-light">KNOWLEDGE PANEL</h3>

//    <div className="flex flex-row w-full items-center justify-between">
//       <h1 className="text-2xl">
//          { knowledge_panel.name }
//       </h1>
//       <img className="max-w-10"alt="image" />
//    </div>

//    <h2 className="text-base font-light">
//          { knowledge_panel.label }
//       </h2>


//    <div className="text-base">
//       &emsp;{ knowledge_panel.description.text }
//    </div>

//    <div className="text-sm">
//       Source:
//       <Link to={knowledge_panel.description.url}>
//          { knowledge_panel.description.site }
//       </Link>
//    </div>
//    <br />
//    <button>
//       <div className=" flex flex-row" >

//          Show More Info
//       </div>
//       <div className=" flex flex-row" >
//          <MinusSVG />
//          Show Less Info
//       </div>
//    </button>

//    <div v-auto-animate>
//       <div  className="flex flex-col gap-4">
//          <div >


//             <div className="font-bold"> { inf.title }:</div>

//             <div >
//                { label }
//             </div>
//          </div>
//       </div>

//    </div>
// </div>
// </>
//   )
// }


export default function Results() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query')
  const type = searchParams.get('type')
  const results = useOutletContext()
  return (
    <div className="flex flex-col mb-20 md:pt-16 w-svw px-4 py-2 gap-2">

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
          <h1>Google</h1>
        )} 


      </div>

    </div>
  )
}
