import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import './Row.css';

const baseUrl = 'https://image.tmdb.org/t/p/original/';
const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //we cant write async lines in useEffect, write an async function and then call it
    //whenever we use 3rd party variable, you HAVE to incluce it in the dependency.
    async function fetchData () {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); // <---- dependency

  console.log('movies', movies);
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="row-posters">
        {/* row posters */}
        {movies.map(movie => (
          <img
          key={movie.id}
          className="row-poster"
          src={baseUrl+movie.poster_path}
          alt={movie.name}/>
        ))}
      </div>
      {/* container for images/posters */}
    </div>
  )
}

export default Row;