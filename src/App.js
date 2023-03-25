import { useEffect, useState } from 'react';
import './App.css';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import flagset from './flags.json'

function App() {

  const [playing, setPlaying] = useState(true)
  const [correctAnswers, setCorrectAnswers] = useState([])
  const [flags, setFlags] = useState([...flagset])

  function giveUp() {
    setPlaying(false)
  }

  function playAgain() {
    setCorrectAnswers([])
    setFlags([...flagset])
    shuffleFlags()
    setPlaying(true)
  }

  function shuffleFlags() {
    let array = flagset
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
  }

  useEffect(() => {
    shuffleFlags()
    setFlags([...flagset])
    
  }, [])


  if (playing) {
    return (
        <div className='App'>
          <button className='Button' onClick={giveUp}>Give up</button>
          <Quiz 
            correctAnswers={correctAnswers}
            setCorrectAnswers={setCorrectAnswers}
            flags={flags}
            setFlags={setFlags}
          />
        </div>
      )
  } else {
    return ( 
        <div className='App'>
          <button className='Button' onClick={playAgain}>Play again</button>
          <h2>
            {Math.round(((correctAnswers.length / 195) * 100)) + '%'}
          </h2>
          <Results correct={[...correctAnswers]} incorrect={flags}/>
        </div>
      )
  }
}

export default App;
