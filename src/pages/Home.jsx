import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MovieList from "../Components/MovieList";
import { TOP_URL } from "../Components/api/MovieApi";
import { API_KEY } from "../Components/api/MovieApiKey";
import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../Components/Spinner";

const Home = () => {
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchMovie = async () => {
    const query = "John Wick";
    const URL = `${TOP_URL}?api_key=${API_KEY}&query=${query}&language=en-US&include_adult=false`;

    try {
      const response = await fetch(URL);
      const data = await response.json();
      let movies = data?.results?.slice(0, 10);
      setMovies(movies);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="">
      <Header setMovies={setMovies} setLoading={setLoading} />
      <main className="px-4 lg:px-8 my-12 relative">
        <div className="flex justify-between items-center mb-8">
          <p className="font-bold text-3xl shadow-lg">Featured Movies</p>
          <Link
            to="favorites"
            className="text-red-500 hover:text-red-600 hover:scale-125 shadow-lg transform transition-transform flex items-center gap-3 cursor-pointer"
          >
            <span>See Favorites</span>

            <FaChevronRight />
          </Link>
        </div>
        <div className="text-center font-bold text-red-600 text-3xl mb-8">
          Top Ten Movies
        </div>

        {loading ? <Spinner /> : <MovieList movies={movies} />}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
