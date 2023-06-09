import React, {useEffect, useState} from 'react';
import TheWindow from '../Body/TheWindow/TheWindow';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './App.css';


function App() {
  const [displayedDogImage, setDogImage] = useState('')
  const [savedDogs, setSavedDogs] = useState([])

  const getRandomDog = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      if (!response.ok) {
        throw new Error(`Error in Random Call! code: ${response.status}`)
      }
      const randomDog = await response.json()
      setDogImage(randomDog.message)
      return randomDog;
    } catch(error) {
      return error
    }
  }

  const getSpecificBreed = async (breed: string) => {
    console.log(breed)
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
      if (!response.ok) {
        throw new Error(`Error in Random Call! code: ${response.status}`)
      }
      const oneOfABreed = await response.json()
      console.log(oneOfABreed.message)
      setDogImage(oneOfABreed.message)
      return oneOfABreed;
    } catch(error) {
      return error
    }
  }

  useEffect(()=> {
    if (displayedDogImage === '') {
      getRandomDog()
    }
  },[displayedDogImage])

  return (
    <div className="App">
      <Header/>
      <TheWindow 
      displayedDogImage={displayedDogImage} 
      getRandomDog={getRandomDog}
      getSpecificBreed={getSpecificBreed}
      savedDogs={savedDogs}
      setSavedDogs={setSavedDogs}/>
      <Footer/>
    </div>
  );
}

export default App;