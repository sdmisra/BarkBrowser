import React from 'react'
import './RandomDog.css'

type RandomDogProp = {
  filepath : string
  getRandomDog: () => Promise<any>
}
function RandomDog({ filepath, getRandomDog }: RandomDogProp) {
  return (
    <div className='random-dog-window'>
      <img className='random-dog-image' src={filepath}/>
      <button className='random-dog-button' onClick={() => getRandomDog()}>Click Here for a new Pooch!</button>
    </div>
  )
}

export default RandomDog;