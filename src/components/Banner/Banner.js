import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import requests from '../../requests.js';
import './Banner.css';

const baseUrl = 'https://image.tmdb.org/t/p/original/';
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchRandomMovie () {
      const request = await axios.get(requests.fetchNetflixOriginals);
      let randomIndex = Math.floor(Math.random() * request.data.results.length-1);
      setMovie(request.data.results[randomIndex]);
      return request;
    }
    fetchRandomMovie();
  }, []);

  return (
    <header
      className='banner'
      style={{
        'backgroundSize' : 'cover',
        'backgroundImage': `url(${baseUrl}${movie?.backdrop_path})`,
        'backgroundPosition' : 'center center'}}
    >
      <div className='banner-content'>
        <h1>{movie?.name || movie?.original_name || movie?.title}</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
          <buton></buton>
        </div>
        <h1 className="movie-description">{movie?.overview}</h1>
      </div>
    </header>
  )
}

export default Banner;