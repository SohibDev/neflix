import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SearchedMoviesCard( searchResults ) {
  console.log(searchResults);
  return (
    <div className="search-results">
      {searchResults.movies?.length > 0 && searchResults.movies.map((movie) => (
        <div key={movie.id} className="searched-movie-card">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
          ) : (
            <div className="no-poster">
              <p>No poster available</p>
            </div>
          )}
          <div className="movie-info">
            <h4>{movie.title}</h4>
            <p>{movie.release_date}</p>
          </div>
        </div>
      ))}
      {searchResults?.length === 0 && (
        <div className="no-results">
          <p>No results found</p>
        </div>
      )}
    </div>
  );
}

export default SearchedMoviesCard;
