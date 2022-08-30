import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleMoviePage.css";
import { fetchPosterImg, fetchSingleMovie } from "../../utils/api";

function SingleMoviePage() {
  const [singleMovieData, setSingleMovieData] = useState({});
  const [error, setError] = useState(null);
  const [imgURL, setImgURL] = useState("");
  const { movie_id } = useParams();

  useEffect(() => {
    //Sents request and there is a 404 for picture but picture appears. !!! Eror can not be solves.
    singleMovieData ? (
      fetchSingleMovie(movie_id)
        .then((singleMovieFromAPI) => {
          setSingleMovieData(singleMovieFromAPI);
        })
        .catch((error) => {
          setError(error);
        })
    ) : (
      <p></p>
    );
  }, [movie_id]);

  useEffect(() => {
    fetchPosterImg(singleMovieData)
      .then((singleMovieImgFromAPI) => {
        setImgURL(singleMovieImgFromAPI);
        console.log(singleMovieImgFromAPI);
      })
      .catch((error) => {
        setError(error);
      });
  }, [singleMovieData]);

  return (
    <div>
      <div className="single_movie">
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
