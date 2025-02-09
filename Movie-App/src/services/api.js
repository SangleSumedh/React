const API = "791ad8837a7e8dbc2e6cbd4363c9423d";
const API_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${API_URL}/movie/popular?api_key=${API}`);
  const data = await response.json();

  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${API_URL}/search/movie?api_key=${API}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();

  return data.results;
};
