import React from 'react'
import './DogCard.css'

type DogCardProps = {
  id: string
  breed: string
  path: string
}

function DogCard({id, breed, path}: DogCardProps) {

  return (
    <div className='card-container' id={id}>
      <img src={path}></img>
      <span>Breed: {breed}</span>
    </div>
  )
  
}
export default DogCard