import './styles.css'
import React, { useState, useEffect } from 'react'
import { Header } from './modules'
import { getMedias, addToWatchlist, removeFromWatchlist } from './api/';
import  Movie  from './components/Movie';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  
  const [watchlist, setWatchlist] = useState({});
  
  const toggleAddToWatchlist = async (movie, isAdded) => {
    if (!isAdded) {
      const result = await addToWatchlist({ id: movie.id })
      if (result.status === 422) {
        return setError(new Error("fail"));
      } 
      localStorage.setItem(movie.id, movie.title);
      setWatchlist({ ...watchlist, [movie.id]: movie.title })
    } 
    else {
      const result = await removeFromWatchlist({ id: movie.id })
      if (result.status !== 200) {
        return setError(new Error("fail"));
        }
      localStorage.removeItem(movie.id);
      const newWatchlist = { ...watchlist };
      delete newWatchlist[movie.id];
      setWatchlist(newWatchlist);
    } 
  }
  
  useEffect(() => {
    const retrievedWatchlist = Object.keys(localStorage).reduce((acc, cur) => {
      acc[cur] = localStorage.getItem(cur);
      return acc
    }, {});
    setWatchlist(retrievedWatchlist);

    getMedias()
      .then(
        (result) => {
          setIsLoaded(true);
          setMovies(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);
  
  return (
    <>
      <Header />
      <main> 
        {
          error ?
            <div>Error: {error.message}</div>
          :
            isLoaded ?
              <section className="movie-cards">
                {movies.map(movie => (
                  <Movie key={movie.id} 
                    {...movie} 
                    toggleAddToWatchlist={toggleAddToWatchlist}
                    isInWatchlist={!!watchlist[movie.id]}
                  />
                ))}
              </section>
            : <div className="loading">Loading...</div>
        }
      </main>
    </>
    )
  }
