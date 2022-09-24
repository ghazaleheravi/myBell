# Frontend Developer Challenge

Please clone the project. Once the challenge is complete, you may open a merge request.

### Project set up

> yarn install

> yarn start

## Challenge overview

**_You may use any 3rd party packages_**

There is a mock api set up to facilitate this challenge.

    import  {  getMedias  }  from  "../api/";
    getMedias().then(console.log).catch(console.error);

The response will provide you with a data set of movies and shows. Specifically an image, title and id.

    [
        {
    	     id: 1234,
    	     title: "Friends"
    	    image: "https://images2.9c9media.com/image_asset/2022_3_9_91c9ffc5-b3fa-4780-a776-de6989ca25ae_png_2000x3000.jpg"
        },
        ...
    ]

## Challenge

1. Using the response from the mock api, your objective is to generate a Grid interface

   ![Layout example](/public/assets/layout.png 'Layout')

2. Each movie or show should allow the user to add or remove from it from their watchlist. The state will be reflected to the user in the UI. We can manage the watchlist entirely in local state for this excercise.
   Adding and removing from watchlist will require you to make a request to the existing dummy methods provided.
   The response, will determine if the media has been added and UI state should refelect the response.

   A. **_ADD TO WATCHLIST_**: Clicking **_(+) Add to watchlist_** will add the item to the user watchlist in local state.

   ```
      import { addToWatchlist } from "../api/";
      addToWatchlist(id).then().catch()

   ```

   Based on the response (This response is set up to fail 5% of the time, so we must handle success and failure scenarios)

   1. Status 200 success, Update the state accordingly, add to watchlist.
   2. Adding to watchlist should set the button to read **_(-) Remove from watchlist_**.
   3. Status 422 error. The state must remain unchanged.

   B. **_REMOVE FROM WATCHLIST_**: When the movie or show is in the users watchlist, the button will now read **_(-) Remove from watchlist_**

   ```
   import { removeFromWatchlist } from "../api/";
   removeFromWatchlist(id).then().catch()

   ```

   1. Status 200 success, Update the state accordingly, remove from watchlist.
   2. Removing from watchlist should return the button to **_(+) Add to watchlist_** state.
