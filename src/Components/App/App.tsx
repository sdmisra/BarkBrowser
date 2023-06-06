import React, {useEffect, useState} from 'react';
import TheWindow from '../Body/TheWindow/TheWindow';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './App.css';

function App() {
  const [chosenDogImage, setDogImage] = useState('')

  const getRandomDog = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      if (!response.ok) {
        throw new Error('Error in Random Call!' + `code: ${response.status}`)
      }
      const randomDog = await response.json()
      setDogImage(randomDog.message)
      return randomDog;
    } catch(error) {
      return error
    }
  }

  useEffect(()=> {
    if (chosenDogImage === '') {
      getRandomDog()
    }
  },[])

  return (
    <div className="App">
      <Header/>
      <TheWindow ChosenDogImage={chosenDogImage}/>
      <Footer/>
    </div>
  );
}

export default App;