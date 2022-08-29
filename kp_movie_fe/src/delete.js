import React, { useState } from "react";
import axios from "axios";
// import SearchResult from "../SearchResult/SearchResult";
// import SingleMoviePage from "../SingleMoviePage/SingleMoviePage";
// import "./SearchBar.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// function SearchBar({ placeholder }) {
//   const [searchText, setSearchText] = useState("");
//   const [movieData, setMovieData] = useState({});
//   const API_KEY = process.env.REACT_APP_API_KEY;

//   function searchForMovies(e) {
//     var APICallString = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`;

//     axios
//       .get(APICallString)
//       .then(function (response) {
//         //Success
//         setMovieData(response.data);
//       })
//       .catch(function (error) {
//         //error
//         console.log(error);
//       });
//   }

//   return (
//     <div>
//       <div className="container">
//         <h5>Movie Search</h5>
//         <input
//           placeholder={placeholder}
//           type="text"
//           autoFocus
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//         <button onClick={(e) => searchForMovies(e)}>Search</button>
//       </div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<SearchResult data={movieData} />} />
//           <Route path="/movie/:movie_id" element={<SingleMoviePage />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default SearchBar;
// import React from "react";
