import Navbar from "./Navbar";
import { API_URL } from "../Components/api/MovieApi";
import { API_KEY } from "../Components/api/MovieApiKey";
import { useEffect, useState } from "react";
import Poster from "../assets/Poster.svg";

const Header = () => {
  const [poster, setPoster] = useState("");

  const fetchMovie = async () => {
    const query = "John Wick";
    const URL = `${API_URL}?api_key=${API_KEY}&query=${query}&language=en-US&include_adult=false`;

    try {
      const response = await fetch(URL);
      const data = await response.json();
      let movies = data.results;
      const john = movies.filter(
        (movie) =>
          movie.genre_ids.includes(28) ||
          movie.genre_ids.includes(12) ||
          movie.genre_ids.includes(53)
      );
      setPoster(john);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  console.log(poster);

  return (
    <div
      className="px-4  bg-contain bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${Poster})` }}
    >
      <div className="max-w-6xl mx-auto">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
