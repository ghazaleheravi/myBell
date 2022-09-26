import './styles.css'
import React, { useState, useEffect } from 'react'
import { Header } from './modules'
import { getMedias } from './api/';
import Movie from './components/Movie';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  console.log('movies: ',movies);

  useEffect(() => {
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
  
  
  if (error) {
    return <div>Error: {error.message}</div>
  } else if(!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <Header />
        <main> 
          <section className="movie-cards">
            {movies.map(movie => (
              <Movie key={movie.id} {...movie} />
            ))}
          </section>
        </main>
      </>
    )
  }
}