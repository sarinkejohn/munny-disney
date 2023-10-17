import axios from "axios";

const movieBaseUrl = import.meta.env.VITE_GLOBAL_URL
const api_key = import.meta.env.VITE_TMDB_API_ACCESS

// const api_key = "2ec0d66f5bdf1dd12eefa0723f1479cf";
// const movieBaseUrl = "https://api.themoviedb.org/3";

const movieByGenreBaseURL = import.meta.env.VITE_GENRE_URL

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/movie/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId
};
