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

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n-1) + '...' : str;
  }

  return (
    <header
      className='banner'
      style={{
        'backgroundSize' : 'cover',
        'backgroundImage': `url(${baseUrl}${movie?.backdrop_path})`,
        'backgroundPosition' : 'center center'}}
    >
      <div className='banner-content'>
        <h1 className='banner-title'>{movie?.name || movie?.original_name || movie?.title}</h1>
        <h1 className="movie-description">{truncate(movie?.overview, 150)}</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
          <buton></buton>
        </div>
      </div>
      <div className="banner-fadeBottom"/>
    </header>
  )
}

export default Banner;