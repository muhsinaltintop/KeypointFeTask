import React from "react";

function SearchResult({ result }) {
  return (
    <>
      <div>
        <h3>Result</h3>
        <div className="searchResult">
          {result.map((data, key) => {
            return (
              <a className="dataItem" href={data.homepage} target="_blank">
                <p>{data.title}</p>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SearchResult;
