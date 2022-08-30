import React from "react";
import { Link } from "react-router-dom";
import "./SearchResult.css";

function SearchResult({ data, isLoading }) {
  return (
    <>
      <div>
        <div className="search_result">
          {JSON.stringify(data) !== "{}" ? (
            <>
              <p>{isLoading}</p>
              <h3>Result</h3>
              {data.results.map((result, key) => {
                return (
                  <div key={result.id} className="search_result">
                    <Link key={result.id} to={`/movie/${result.id}`}>
                      <p>{result.title}</p>
                    </Link>
                  </div>
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
