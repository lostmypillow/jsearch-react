import React from "react";
import { useState } from "react";
import { useOutletContext, useSearchParams, Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="flex min-h-24 w-full flex-row items-center justify-start gap-4 rounded-2xl  border-2 border-black px-4 py-2">
      <img
        className="h-11"
        src={movie.Poster != "N/A" ? movie.Poster : "SearchIcon"}
        alt="poster"
      />

      <h3 className="text-sm font-light">{movie.Type.toUpperCase()}</h3>

      <div className="text-xl font-bold">
        {movie.Title}
        <br className="md:hidden"></br>

        <div className="text-base font-semibold">({movie.Year})</div>
      </div>
    </div>
  );
}

function KnowledgeCard({ knowledge }) {
  const [infoShown, setInfoShown] = useState(false);
  function toggleShow() {
    setInfoShown(!infoShown);
  }
  return (
    <div className="my-8 flex min-h-24 grow flex-col items-start justify-center gap-4  rounded-2xl border-2 border-black px-4 py-8">
      <h3 className="text-sm font-light">KNOWLEDGE PANEL</h3>

      <div className="flex w-full flex-row items-center justify-between">
        <h1 className="text-2xl">{knowledge.name}</h1>
        <img
          alt="image"
          src={knowledge.image.url}
          width={44}
          height={44}
        />
      </div>

      <h2 className="text-base font-light">{knowledge.label}</h2>

      <div className="text-base">{knowledge.description.text}</div>

      <Link to={knowledge.description.url}>
        Source: {knowledge.description.site}
      </Link>

      <button className="btn-primary" onClick={toggleShow}>
        <span>Show More Info</span>
      </button>
      {infoShown ? (
        <>
          {knowledge.info.map((inf) => (
            <>
              <div className="font-bold"> {inf.title}:</div>

              <div>
                {inf.labels.map((info) => (
                  <div>{info}</div>
                ))}
              </div>
            </>
          ))}{" "}
        </>
      ) : null}
    </div>
  );
}

function GoogleResultsCard({ results }) {
  return (
    <>
      {results.map((result) => (
        <div className="flex w-full flex-col gap-4 rounded-3xl  border-2 border-black px-4 py-8">
          {" "}
          <Link
            className="flex text-2xl text-blue-600 "
            to="result.url"
            key={result.position}
          >
            {result.title}
          </Link>
          <div className="flex">{result.description}</div>
        </div>
      ))}
    </>
  );
}

function GoogleCard({ googleresults }) {
  const knowledge = googleresults.knowledge_panel;
  const results = googleresults.results;
  return (
    <>
      {knowledge ? <KnowledgeCard knowledge={knowledge} /> : null}
      <GoogleResultsCard results={results} />
    </>
  );
}

export default function Results() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const type = searchParams.get("type");
  const results = useOutletContext();
  return (
    <div className="flex w-svw flex-col gap-2 border-2 border-black px-4 py-2 pt-32">
      <div className="text-3xl font-bold">Results:</div>

      <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap">
        {/* <div>search query is {query}</div>
        <div>search type is {type}</div> */}
        {type == "movies" && results?.length > 0 ? (
          results.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <GoogleCard googleresults={results} />
        )}
      </div>
    </div>
  );
}
