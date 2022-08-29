import React from "react";
import { Link } from "react-router-dom";

function SearchResult({ data }) {
  return (
    <>
      <div>
        <div className="searchResult">
          {JSON.stringify(data) !== "{}" ? (
            <>
              <h3>Result</h3>
              {data.results.map((result, key) => {
                return (
                  <>
                    <Link key={result.id} to={`/movie/${result.id}`}>
                      <p>{result.title}</p>
                    </Link>
                  </>
                );
              })}
            </>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchResult;
