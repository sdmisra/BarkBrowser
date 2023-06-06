import React from 'react';
import SavedDogs from '../SavedDogs/SavedDogs'
import RandomDog from '../RandomDog/RandomDog'
import SearchResults from '../SearchResults/SearchResults'
// This could also be the place to import SearchResults, RandomDog,and SavedDogs and use the route to pick which one to render.
function TheWindow() {
  return (
    <div className="main-container">
      <RandomDog/>
      <SearchResults/>
      <SavedDogs/>
    </div>
  )
}

export default TheWindow;