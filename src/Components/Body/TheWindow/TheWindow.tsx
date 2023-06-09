import React, {Dispatch, SetStateAction} from 'react';
import SavedDogs from '../SavedDogs/SavedDogs'
import RandomDog from '../RandomDog/RandomDog'
import SearchForm from '../SearchForm/SearchForm'
import {Switch, Route} from 'react-router-dom';
import { StringArraySupportOption } from 'prettier';
// This could also be the place to import SearchForm, RandomDog,and SavedDogs and use the route to pick which one to render.

type WindowProps = {
  displayedDogImage : string
  getRandomDog: () => Promise<any>
  getSpecificBreed: (breed : string) => Promise<any>
  savedDogs: string[]
  setSavedDogs: Dispatch<SetStateAction<never[]>>
}

function TheWindow({ displayedDogImage, getRandomDog, getSpecificBreed, savedDogs}: WindowProps) {

  return (
    <div className="main-container">
      <Switch>
        <Route exact path='/'>
          <RandomDog filepath={displayedDogImage} getRandomDog={getRandomDog}/>
          <SearchForm getSpecificBreed={getSpecificBreed}/>
        </Route>
        <Route path='/saved/'>
          <SavedDogs saved={savedDogs}/>
        </Route>
      </Switch>
    </div>
  )
}

export default TheWindow;