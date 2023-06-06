import React, {useEffect} from 'react';
import TheWindow from '../Body/TheWindow/TheWindow';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import getRandomDog from '../../apiCalls';
import './App.css';

function App() {

  useEffect(()=> {
    console.log(getRandomDog())
  })

  return (
    <div className="App">
      <Header/>
      <TheWindow/>
      <Footer/>
    </div>
  );
}

export default App;