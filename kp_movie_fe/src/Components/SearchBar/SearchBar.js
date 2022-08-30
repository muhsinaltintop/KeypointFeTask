import React, { useEffect, useState } from "react";
import SearchResult from "../SearchResult/SearchResult";
import SingleMoviePage from "../SingleMoviePage/SingleMoviePage";
import "./SearchBar.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { searchMovies } from "../../utils/api";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [movieData, setMovieData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    //It sents request to database without searchText, this causes error. I checked here if the search text is exist or not.
    setIsLoading(true);
    setError(null);
    searchText ? (
      searchMovies(searchText)
        .then((moviesFromAPI) => {
          setMovieData(moviesFromAPI);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
        })
    ) : (
      <p></p>
    );
  }, [searchText]);

  return (
    <div>
      <form>
        <h5 className="form_header">Saerch Bar</h5>
        <input
          type="text"
          autoFocus
          onChange={(e) => {
            setSearchText(e.target.value);
            SearchBar();
          }}
        />
        <button
          className="search_button"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            SearchBar();
          }}
        >
          Search
        </button>
      </form>

      <Routes>
        <Route
          path="/"
          element={<SearchResult isLoading={isLoading} data={movieData} />}
        />
        <Route path="/movie/:movie_id" element={<SingleMoviePage />} />
      </Routes>
    </div>
  );
};

export default SearchBar;

// import axios from "axios";
// import React, { useState } from "react";
// function SearchBar() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [movieData, setMovieData] = useState({});
//   const API_KEY = process.env.REACT_APP_API_KEY;

//   const searchForMovies = (e) => {
//     var APICallString = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`;

//     axios
//       .get(APICallString)
//       .then(function (response) {
//         console.log(response);
//         //Success
//         setMovieData({ response });
//       })
//       .catch(function (error) {
//         console.log(error);
//         throw error;
//         //error
//       });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="search..."
//         onChange={(event) => {
//           setSearchTerm(event.target.value);
//         }}
//       />
//       {console.log(movieData)}
//       {movieData ? (
//         movieData.map((val, key) => {
//           return (
//             <div>
//               <p>{val.title}</p>
//             </div>
//           );
//         })
//       ) : (
//         <div></div>
//       )}
//     </div>
//   );
// }

// export default SearchBar;
