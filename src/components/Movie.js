import React from 'react';
import WatchList  from './WatchList';

const Movie = ({ image, title }) => {
  return (
    <div className="movie-card">
      <ul className="movie-ul">
        <li className="movie-list">
          <img 
            src={image} 
            alt={title} 
            loading="lazy" 
            className="movie-image" 
             sizes="(max-width: 575px) 28vw,
               (min-width: 576px) and (max-width: 991px) 21vw,
               (min-width: 992px) and (max-width: 1499px) 15vw,
               (min-width: 1500px) 16vw"
          />
          <p className="title">{title}</p>
          <WatchList />
        </li>
      </ul>
    </div>
  );
}

export default Movie;