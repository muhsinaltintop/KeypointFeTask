import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import MockData from "../../MockData/MockData.json";
import SearchResult from "../SearchResult/SearchResult";

function HomePage() {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <button onClick={handleClick}>Logout</button>
      <h1>Home Page</h1>
      <SearchBar placeholder="Please enter a film name" data={MockData} />
    </>
  );
}
export default HomePage;
