import MovieCard from "./MovieCard";

function MovieList({ movies, favorites, toggleFav }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFav={favorites.includes(movie.id)}
          toggleFav={toggleFav}
        />
      ))}
    </div>
  );
}

export default MovieList;