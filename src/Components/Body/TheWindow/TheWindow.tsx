import React from 'react';
import SavedDogs from '../SavedDogs/SavedDogs'
import RandomDog from '../RandomDog/RandomDog'
import SearchResults from '../SearchResults/SearchResults'
import {Switch, Route} from 'react-router-dom';
import { StringArraySupportOption } from 'prettier';
// This could also be the place to import SearchResults, RandomDog,and SavedDogs and use the route to pick which one to render.

type WindowProps = {
  randDogImage : string
  getRandomDog: () => Promise<any>
}

function TheWindow({ randDogImage, getRandomDog }: WindowProps) {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path='/'>
          <RandomDog filepath={randDogImage} getRandomDog={getRandomDog}/>
        </Route>
        <Route path='/results/'>
          <SearchResults/>
        </Route>
        <Route path='/saved/'>
          <SavedDogs />
        </Route>
      </Switch>
    </div>
  )
}

export default TheWindow;