/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";

const MovieList = ({ movies = [] }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavoriteToggle = (movieId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(movieId)) {
        return prevFavorites.filter((id) => id !== movieId);
      } else {
        return [...prevFavorites, movieId];
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mx-8">
      {Array.isArray(movies) &&
        movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div key={movie.id}>
              <MovieCard
                title={movie.title}
                releaseDate={movie.release_date}
                posterUrl={movie.poster_path}
                handleFavoriteToggle={handleFavoriteToggle}
                id={movie.id}
                voteAverage={movie.vote_average}
                favorites={favorites}
                backdropPath={movie.backdrop_path}
              />
            </div>
          ))}
    </div>
  );
};

export default MovieList;
