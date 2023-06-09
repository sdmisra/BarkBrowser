import React from 'react'
import DogCard from '../DogCard/DogCard';
import './SavedDogs.css'

type SavedDogsProps = {
  saved:string[]
}

function SavedDogs({saved}:SavedDogsProps) {
  console.log(saved)
  return (
    <div>
      <h1>These are Saved Dog Pictures</h1>
    </div>
  )
}

export default SavedDogs;