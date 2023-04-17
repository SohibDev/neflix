import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SearchedMoviesCard({ searchResults }) {
  return (
    <div className="search-results">
      {searchResults?.map((movie) => (
        <div key={movie.id} className="searched-movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-info">
            <h4>{movie.title}</h4>
            <p>{movie.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


export default SearchedMoviesCard;
