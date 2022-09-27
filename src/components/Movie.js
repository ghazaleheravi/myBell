import React, { useState } from 'react';
import { addToWatchlist } from "../api";
import { removeFromWatchlist } from "../api";

const Movie = ({ image, title, id, addToWatchList, removeFromWatchList, toggleButtonContext }) => {
  const [error, setError] = useState(null);
  
  const handleClick = (e) => {
    //console.log(localStorage.getItem(`${title}`))
    if (localStorage.getItem(id) !== null) {
      removeFromWatchlist({id})
        .then(
          (result) => {
            if (result.status === 200) {
              localStorage.removeItem(id);
              removeFromWatchList(id);
            }
        })
    } else {
    addToWatchlist({id})
      .then(
        (result) => { 
          if(result.status === 200) {
            localStorage.setItem(id, title);
            addToWatchList(id, title);
          } else if (value.status === 422) {
            (error) => setError(error);
          }
      })
    }
  }
 
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
          <button onClick={handleClick} className="add-remove-btn">
            {(toggleButtonContext(id)) ? '(-) Remove from watchlist' : '(+) Add to watchlist'}
          </button> 
        </li>
      </ul>
    </div>
  );
}

export default Movie;