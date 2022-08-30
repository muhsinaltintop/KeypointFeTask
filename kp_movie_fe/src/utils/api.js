import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const movieDbAPI = axios.create({
  baseURL: "https://api.themoviedb.org",
});

export const searchMovies = async (searchText) => {
  const res = await movieDbAPI
    .get(
      `/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
    )
    .catch((err) => {
      console.log(err);
    });
  return res.data;
};

export const fetchSingleMovie = async (movie_id) => {
  const res = await movieDbAPI
    .get(`/3/movie/${movie_id}?api_key=${API_KEY}`)
    .catch((err) => {
      console.log(err);
    });
  return res.data;
};

export const fetchPosterImg = async (singleMovieData) => {
  const res = await movieDbAPI
    .get(`/t/p/original/${singleMovieData.poster_path}`)
    .catch((err) => {
      console.log(err);
    });
  return res.data;
};
