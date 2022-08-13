const API_KEY = "3a05128ff62adcc3b828a77f8ae84038";
const list = {
  trending: `trending/all/day?api_key=${API_KEY}`,
  topRated: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  popular: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  newReleases: `movie/latest?api_key=${API_KEY}&language=en-US`,
  tv: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  genre: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
};
export default list;
