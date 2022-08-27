import React, { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";
import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  const handleSearch = (event) => {
    const searchWord = event.target.value;
    const newSearch = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSubmit={handleSearch}
          autoFocus
        ></input>
        <button type="submit">Search</button>
      </form>

      <SearchResult result={result} />
    </>
  );
}

export default SearchBar;
