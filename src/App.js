import { useEffect, useState } from 'react';
import './App.css';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import flagset from './flags.json'

function App() {

  const [playing, setPlaying] = useState('playing')
  const [correctAnswers, setCorrectAnswers] = useState([])
  const [flags, setFlags] = useState([...flagset])

  function giveUp() {
    setPlaying('results')
    let score = Math.round(((correctAnswers.length / 195) * 100))
    let highscore = localStorage.getItem('high-score')
    if (highscore) {
      score = Math.max(score, parseInt(highscore))
    }
    localStorage.setItem('high-score', score)
  }

  function playAgain() {
    setCorrectAnswers([])
    setFlags([...flagset])
    shuffleFlags()
    setPlaying('playing')
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


  if (playing === 'playing') {
    return (
        <div className='App'>

          <Quiz 
            correctAnswers={correctAnswers}
            setCorrectAnswers={setCorrectAnswers}
            flags={flags}
            setFlags={setFlags}
          />
          <button className='Button' onClick={giveUp}>Give up</button>
        </div>
      )
  } else if (playing === 'results') {
    return ( 
        <div className='App'>
          <div>
            <button className='Button' onClick={playAgain}>Play again</button>
          </div>
          <div>
            High Score: {localStorage.getItem('high-score') + '%'}
          </div>
          <h2>
            {Math.round(((correctAnswers.length / 195) * 100)) + '%'}
          </h2>
          <Results correct={[...correctAnswers]} incorrect={flags}/>
        </div>
      )
  }
}

export default App;
