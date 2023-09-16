import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { API_URL } from "./api/MovieApi";
import { API_KEY } from "./api/MovieApiKey";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchChange = (event) => {
    setQuery(event.target.value);
  };

  const searchMovies = async () => {
    const URL = `${API_URL}?api_key=${API_KEY}&query=${query}&language=en-US&include_adult=false`;

    try {
      const response = await fetch(URL);
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query) {
      searchMovies();
      setQuery('')
    }
  };

  console.log(movies);

  return (
    <form className="flex items-center relative w-1/2 " onSubmit={handleSubmit}>
      <input
        className="bg-transparent  p-2 border rounded-md w-full outline-white "
        type="text"
        value={query}
        placeholder="what do you want to watch?"
        onChange={searchChange}
      />
      <button
        className="absolute right-0 px-3 cursor-pointer hover:scale-150 hover:shadow-lg transform transition-transform"
        type="submit"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
