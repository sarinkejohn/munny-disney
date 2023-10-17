import axios from "axios";

const movieBaseUrl = import.meta.env.VITE_GLOBAL_URL
const api_key = import.meta.env.VITE_TMDB_API_ACCESS

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
