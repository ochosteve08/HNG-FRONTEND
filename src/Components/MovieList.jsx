/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

const MovieList = ({ movies = [] }) => {
  console.log(movies);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-2">
      {Array.isArray(movies) && movies?.map((movie) => (
        <div key={movie.id}>
          <MovieCard
            title={movie.title}
            releaseDate={movie.release_date}
            posterUrl={movie.poster_path}
            // handleFavoriteToggle={handleFavoriteToggle}
            id={movie.id}
            voteAverage={movie.vote_average}
            // favorites={favorites}
            //  backdropPath={movie.backdrop_path}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
