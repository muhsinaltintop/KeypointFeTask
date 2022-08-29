import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleMoviePage() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [singleMovieData, setSingleMovieData] = useState({});
  const { movie_id } = useParams();
  var imgURL = `https://image.tmdb.org/t/p/original/${singleMovieData.poster_path}`;
  var APICallForSinglePage = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`;

  console.log(movie_id);

  useEffect(() => {
    axios
      .get(APICallForSinglePage)
      .then(function (response) {
        //Success
        setSingleMovieData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        //error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <h5>Single Movie</h5>

        <p>{singleMovieData.title}</p>

        <p>
          <img src={imgURL} alt="" width={300}></img>
        </p>
        <p>{singleMovieData.overview}</p>
      </div>
    </div>
  );
}

export default SingleMoviePage;
