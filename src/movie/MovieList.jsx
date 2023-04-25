import React from "react";
import MovieCard from "./MovieCard";

// const handleSave ()=>{}
const MovieList = ({ filterTitle, filterRating, movies }) => {
  return (
    <div className="movie-list">
      {movies
        .filter((data) =>
          data.Title.toLowerCase().includes(filterTitle.toLowerCase())
        )
        .filter((data) => (filterRating ? data.rating === filterRating : data))
        .map((contact, i) => (
          <MovieCard movieData={contact} />
        ))}
    </div>
  );
};

export default MovieList;
