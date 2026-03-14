import { useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import FavoriteMovies from "./components/FavoriteMovies";
import moviesData from "./data/movies";

const GENRES = ["All", "Sci-Fi", "Action", "Thriller", "Drama", "Animation"];

function App() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [dark, setDark] = useState(false);
  const [genre, setGenre] = useState("All");
  const [sort, setSort] = useState("default");

  const toggleFav = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  let filtered = moviesData.filter((movie) => {
    const matchSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchGenre = genre === "All" || movie.genre === genre;
    return matchSearch && matchGenre;
  });

  if (sort === "rating-desc") {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  } else if (sort === "rating-asc") {
    filtered = [...filtered].sort((a, b) => a.rating - b.rating);
  } else if (sort === "year-desc") {
    filtered = [...filtered].sort((a, b) => b.year - a.year);
  } else if (sort === "year-asc") {
    filtered = [...filtered].sort((a, b) => a.year - b.year);
  }

  const favoriteMovies = moviesData.filter((m) => favorites.includes(m.id));

  return (
    <div className={dark ? "app dark" : "app"}>
      <div className="app-container">
        {/* HEADER */}
        <header className="app-header">
          <div>
            <h1>🎬 Portfolio & Movies</h1>
            <p className="subtitle">React Assignment — Enhanced UI</p>
          </div>
          <button className="theme-btn" onClick={() => setDark(!dark)}>
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        {/* PART A — Profile Card */}
        <div className="section-divider">
          <h2>👤 Profile</h2>
        </div>
        <ProfileCard />

        {/* PART B — Movie Explorer */}
        <div className="section-divider">
          <h2>🎥 Movie Explorer</h2>
        </div>

        <div className="movie-explorer">
          {/* Search */}
          <SearchBar search={search} setSearch={setSearch} />

          {/* Genre Filter */}
          <div className="filter-bar">
            {GENRES.map((g) => (
              <button
                key={g}
                className={`filter-chip ${genre === g ? "active" : ""}`}
                onClick={() => setGenre(g)}
              >
                {g}
              </button>
            ))}
            <select
              className="sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Sort: Default</option>
              <option value="rating-desc">⭐ Rating: High–Low</option>
              <option value="rating-asc">⭐ Rating: Low–High</option>
              <option value="year-desc">📅 Newest First</option>
              <option value="year-asc">📅 Oldest First</option>
            </select>
          </div>

          {/* Results count */}
          {search !== "" && (
            <p className="results-count">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "
              {search}"
            </p>
          )}

          {/* Status messages */}
          {search === "" && genre === "All" && (
            <p className="status-msg">
              <span className="status-icon">🍿</span>
              Search or filter to explore movies
            </p>
          )}

          {(search !== "" || genre !== "All") && filtered.length === 0 && (
            <p className="status-msg">
              <span className="status-icon">🔍</span>
              No movies found. Try a different search or filter.
            </p>
          )}

          {/* Movie List */}
          {filtered.length > 0 && (
            <MovieList
              movies={filtered}
              favorites={favorites}
              toggleFav={toggleFav}
            />
          )}

          {/* Favorites */}
          <FavoriteMovies movies={favoriteMovies} />
        </div>
      </div>
    </div>
  );
}

export default App;