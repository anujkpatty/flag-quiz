import './App.css';
import flags from './flags.json'
import { useEffect, useState } from 'react';

function App() {

  const [countryInput, setCountryInput] = useState('')
  const [counter, setCounter] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [loading, setLoading] = useState(true)

  function textChange(e) {
    setCountryInput(e.target.value)
    if (flags[counter].keys.includes(e.target.value.toLowerCase())  ) {
      setCounter(counter + 1)
      setCountryInput('')
      setCorrect(correct + 1)
    }
  }

  function moveBack() {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  function moveForward() {
    if (counter < flags.length - 1) {
      setCounter(counter + 1)
    }
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    setLoading(false)
  }

  useEffect(() => {
    shuffle(flags)
  }, [])

  if (loading) {
    return (
    <div className='Splash'/>
    )
  }

  return (  
    <div className="App">
      <h2>
        <button className="Button" onClick={moveBack} >&lt;</button>  
        {counter}/{flags.length}
        <button className="Button" onClick={moveForward} >&gt;</button>
      </h2>  
      <img src={flags[counter].image} alt={flags[counter].keys[0]} height='250'/>
      <input 
        className='Text-entry'
        type="text"
        value={countryInput}
        onChange={(event) => textChange(event)}
      />
    
    </div>
  );
}

export default App;
