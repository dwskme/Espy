const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '222ec00c0f59e9853f121a45e58c80ac';
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const SEARCH_TV_URL = `${API_URL}search/tv?api_key=${API_KEY}&query=`;
const POPULAR_MOVIE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;
const POPULAR_SHOWS_URL = `${API_URL}tv/popular?api_key=${API_KEY}`;
const SEARCH_MULTI_URL = `${API_URL}search/multi?api_key=${API_KEY}&query=`;


export { API_URL, API_KEY, IMAGE_BASE_URL, SEARCH_BASE_URL, POPULAR_MOVIE_URL, POPULAR_SHOWS_URL, SEARCH_TV_URL , SEARCH_MULTI_URL};