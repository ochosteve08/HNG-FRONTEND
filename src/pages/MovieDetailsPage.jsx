import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../Components/api/MovieApiKey";
import Spinner from "../Components/Spinner";
import MovieDetails from "../components/MovieDetails";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  console.log(id);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          ` https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        const result = await response.json();
        console.log(result);
        setMovieDetails(result);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="  p-0">
      {movieDetails ? (
        <MovieDetails
          title={movieDetails.title}
          releaseDate={movieDetails.release_date}
          runtime={movieDetails.runtime}
          overview={movieDetails.overview}
          backdropPath={movieDetails.backdrop_path}
          voteAverage={movieDetails.vote_average}
        />
      ) : (
        <div className="loader-container">
          <div className="loader">
            {" "}
            <Spinner />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
