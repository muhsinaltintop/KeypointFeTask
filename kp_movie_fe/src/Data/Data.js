import React, { useState } from "react";
import axios from "axios";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function MovieData({ placeholder }) {
  const [searchText, setSearchText] = useState("");
  const [movieData, setMovieData] = useState({});
  const API_KEY = process.env.REACT_APP_API_KEY;

  function searchForMovies(e) {
    var APICallString = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`;

    axios
      .get(APICallString)
      .then(function (response) {
        //Success
        setMovieData(response.data);
      })
      .catch(function (error) {
        //error
        console.log(error);
      });
  }

  return <div>{console.log(movieData)}</div>;
}

export default MovieData;
