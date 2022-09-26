import React, { useState, useContext } from "react";
import { addToWatchlist } from "../api";
import { removeFromWatchlist } from "../api";

const WatchList = ({ id, title }) => {
  const [isAdded, setAdded] = useState(false);
  const [isRemoved, setRemoved] = useState(true);
  const [error, setError] = useState(null);
  const [watchList, setWatchList] = useState({});
  console.log('watchList: ', watchList);

  
  const handleAddClick = (e) => {
    addToWatchlist({id})
      .then(
        (value) => { 
          if(value.status === 200) {
            setWatchList({...watchList, title});
            setAdded(true);
            setRemoved(false);
          } else if (value.status === 422) {
            (error) => setError(error);
          }
      })
  }

  const handleRemoveClick = (e) => {
    setRemoved(true);
    setAdded(false);
    removeFromWatchlist({id})
      .then(

      )
  }

  if (!isAdded) {
    return <button onClick={handleAddClick}>(+) Add to watchlist</button>;
  } else {
    return <button onClick={handleRemoveClick}>(-) Remove from watchlist</button>
  }
}

export default WatchList;