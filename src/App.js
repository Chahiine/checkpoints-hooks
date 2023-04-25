// App.js
import React, { useState } from "react";

import MovieList from "./movie/MovieList"; // corrected import statement
import Filter from "./movie/Filter"; // corrected import statement
import "./App.css";
import { data } from "./data";

const App = () => {
  // State variables
  const [movies, setMovies] = useState(data); // movies state
  const [filterTitle, setFilterTitle] = useState(""); // filterTitle state
  const [filterRating, setFilterRating] = useState(0); // filterRating state

  // Add a new movie
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Filter movies by title
  //const filteredMoviesByTitle = movies.filter((movie) =>
  // movie.title.toLowerCase().includes(filterTitle.toLowerCase())
  //);

  // Filter movies by rating
  //const filteredMoviesByRating = movies.filter(
  // (movie) => movie.rating >= filterRating
  //);

  return (
    <div>
      <h1>Movie List</h1>
      <Filter
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
        filterRating={filterRating}
        setMovies={setMovies}
        movies={movies}
      />
      <MovieList
        filterTitle={filterTitle}
        filterRating={filterRating}
        movies={movies}
      />
      <button
        onChange={() => {
          handleAddMovie();
        }}
      ></button>
      <div class="ui star rating" data-rating="4"></div>
      <button></button>
    </div>
  );
};

export default App;
