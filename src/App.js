import React, { useState, useEffect } from 'react';
import config from './config';

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard'

const API_URL = 'https:omdbapi.com?apikey=' + config.API_KEY;

const App = () => {
    const [movies] = useState([])

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        console.log(data.Search)
    }

    useEffect(() => {
        searchMovies('Mean Girls')
    }, []);

    return (
        <div className='app'>
            <h1>MovieLand</h1>
            
            {/* Search bar */}
            <div className='search'>
                <input placeholder='Search for movie' 
                value='Superman'
                onChange={() => {}}
                />
                <img 
                    src={SearchIcon}
                    alt='search'
                    onClick={() => {}}
                />
            </div>

             {/* Ternary expression to check length of movies array and pass props into MovieCard */}
            {movies?.length > 0 ? (
                <div className='container'>
                    {movies.map((movie) => 
                        <MovieCard
                            key={movie.imdbID}  // Adding a unique key for each item in the array
                            Year={movie.Year}
                            Poster={movie.Poster}
                            Type={movie.Type}
                            Title={movie.Title}
                        />
                    )} 
                </div>
            ) : (
                <div className='empty'>
                    <h2>No movies found.</h2>
                </div>
            )}
 
        </div>
    );
}

export default App;