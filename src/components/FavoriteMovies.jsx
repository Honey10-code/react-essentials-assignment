function FavoriteMovies({ movies }) {
  return (
    <div className="fav-section">
      <h3>
        ❤️ Favorites
        {movies.length > 0 && (
          <span className="fav-badge-count">{movies.length}</span>
        )}
      </h3>

      {movies.length === 0 ? (
        <p className="no-favorites">
          No favorites yet — click 🤍 Save on a movie to add it here!
        </p>
      ) : (
        <div className="fav-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="fav-chip">
              <span>{movie.title}</span>
              <span className="chip-rating">⭐ {movie.rating}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteMovies;