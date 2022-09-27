/*import React, { useState } from "react";
import { addToWatchlist } from "../api";
import { removeFromWatchlist } from "../api";

const WatchList = ({ id, title }) => {
  
  const [isAdded, setAdded] = useState(false);
  const [error, setError] = useState(null);
  const [watchList, setWatchList] = useState({});
  console.log('watchlist: ', watchList);

  const handleClick = (e) => {
    //console.log(localStorage.getItem(`${title}`))
    if (localStorage.getItem(id) !== null) {
      removeFromWatchlist({id})
        .then(
          (result) => {
            if (result.status === 200) {
              localStorage.removeItem(id);
              setAdded(false);
            }
        })
    } else {
    addToWatchlist({id})
      .then(
        (result) => { 
          if(result.status === 200) {
            localStorage.setItem(id, title);
            setAdded(true);
            setWatchList({...watchList, [id]: title});
          } else if (value.status === 422) {
            (error) => setError(error);
          }
      })
    }
  }

  return (
    <button onClick={handleClick} className="add-remove-btn">
      {watchList[id] ? '(-) Remove from watchlist' : '(+) Add to watchlist'}
    </button> 
  )
  
}

export default WatchList;*/