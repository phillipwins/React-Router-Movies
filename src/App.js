import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'; // Make sure this import points to the correct file
import SavedList from './Movies/SavedList';

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = id => {
    // Stretch: Prevent the same movie from being "saved" more than once
    if (!saved.includes(id)) {
      setSaved([...saved, id]);
    }
  };

  return (
    <div>
      <SavedList list={saved} />

      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="movies/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}
