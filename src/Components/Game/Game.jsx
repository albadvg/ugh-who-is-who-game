import React, { useEffect, useState } from 'react'
import Gallery from '../Gallery/Gallery'
import persons from './persons.js'
import questionsType from './questionsType.js'
import './Game.css'
import Questions from '../Questions/Questions'
import Contador from '../Contador/Contador.jsx'


const Game = () => {
  
  //variables de estado
  const [personsb,setPersons] = useState(persons) 
  const [questions,setQuestions] = useState(questionsType) 
  const [randomPerson, setRandomPerson] = useState()
  const [numPistas, setNumPistas] = useState(0);
 

  //seleccionar una persona aleatoria al inicio del programa
  //hacer que randomPerson se le asigne valor solo 1 vez
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * persons.length);
    setRandomPerson(persons[randomIndex]);
  }, [persons])




  return (
  
    <>
      <Contador numPistas={numPistas}/>
      <Gallery persons={personsb} randomPerson={randomPerson}  />  
      <Questions questions={questions} persons={personsb} setPersons={setPersons} randomPer={randomPerson} numPistas={numPistas} setNumPistas={setNumPistas}/>
    </>
  )
}

export default Game