import '../App.css';
import {  useEffect, useState } from 'react';

function Quiz(props) {

  const [countryInput, setCountryInput] = useState('')
  const [counter, setCounter] = useState(0)

  function textChange(e) {
    setCountryInput(e.target.value)
    if (props.flags[counter].keys.map((item) => item.toLowerCase()).includes(e.target.value.toLowerCase())  ) {
      props.setCorrectAnswers([...props.correctAnswers.concat(props.flags.splice(counter, 1))])
      setCountryInput('')
      //document.getElementById("country-input").focus();
      if (counter > props.flags.length - 1) {
        setCounter(props.flags.length - 1)
      }
    }
  }

  function moveBack() {
    if (counter > 0) {
      setCounter(counter - 1)
      setCountryInput('')
    }
  }
  function moveForward() {
    if (counter < props.flags.length - 1) {
      setCounter(counter + 1)
      setCountryInput('')
    }
  }

  useEffect(() => {
    document.getElementById("country-input").focus();
  })



  return (  
    <div className='Quiz'>
      
      <h1>Flags of the World</h1>
      <h2>
        <button className="Button side" onClick={moveBack} ><i class="arrow left"></i></button>  
        {props.correctAnswers.length}/{195}
        <button className="Button side" onClick={moveForward} ><i class="arrow right"></i></button>
      </h2>  
      <img src={'/flags/' + props.flags[counter].image} alt={props.flags[counter].keys[0]} height='250' style={{marginBottom: 15}}/>
      Answer:
      <input 
        id='country-input'
        className='Text-entry'
        type="text"
        value={countryInput}
        onChange={(event) => textChange(event)}
      />
    
    </div>
  );
} 

  


export default Quiz;
