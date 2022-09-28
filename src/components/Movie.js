import React from 'react';

const Movie = ({ image, title, id, toggleAddToWatchlist, isInWatchlist }) => {
 
  return (
    <div className="movie-card">
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
      <button onClick={() => toggleAddToWatchlist({ id, title, image }, isInWatchlist)} className='add-remove-btn'>
        {isInWatchlist ? '- Remove from watchlist': '+ Add to watchlist'}
      </button>
    
    </div>
  );
}

export default Movie;