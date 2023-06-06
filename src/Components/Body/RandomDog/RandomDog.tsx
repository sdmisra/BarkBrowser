import React from 'react'
import './RandomDog.css'

type RandomDogProp = {
  filepath : string
}
function RandomDog({ filepath }: RandomDogProp) {
  return (
    <div>
      <img src={filepath}/>
    </div>
  )
}

export default RandomDog;