function MovieCard({ movie, isFav, toggleFav }) {
  return (
    <div className="movie-card animate-in">
      {/* Poster */}
      {movie.poster ? (
        <img
          className="movie-poster"
          src={movie.poster}
          alt={movie.title}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
      ) : null}
      <div
        className="movie-poster-placeholder"
        style={{ display: movie.poster ? "none" : "flex" }}
      >
        🎬
      </div>

      {/* Info */}
      <div className="movie-info">
        <h4>{movie.title}</h4>
        <div className="movie-meta">
          <span className="movie-year">{movie.year}</span>
          {movie.director && (
            <span className="movie-director">· {movie.director}</span>
          )}
          <span className="genre-tag">{movie.genre}</span>
        </div>
        <span className="movie-rating">⭐ {movie.rating}</span>
      </div>

      {/* Actions */}
      <div className="movie-actions">
        <button
          className={`fav-btn ${isFav ? "active" : ""}`}
          onClick={() => toggleFav(movie.id)}
        >
          {isFav ? "❤️ Saved" : "🤍 Save"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;