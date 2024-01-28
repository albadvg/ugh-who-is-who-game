import React from "react";

const Questions = ({ questions , persons, setPersons, randomPer, numPistas, setNumPistas}) => {
  console.log(randomPer);
  //comprobar 
  const checkClue = (e, key, option) => {
    //deshabilitar el botón clicado
    e.target.classList.add('disabled'); 

    //si la persona random tiene la característica clicada...
    if(randomPer[key] === option) {
      const newArr = [...persons].map((per) => per[key] !== option ? {...per, isDisabled: true} : per);
      setPersons(newArr);
    } else {
      const newArr = [...persons].map((per) => per[key] === option ? {...per, isDisabled: true} : per);
      setPersons(newArr);
    }
    //sumar 1 al contador de pistas
    setNumPistas(numPistas +1);
  }

  return (
    <div className="b-questions">

      {questions.map((que, i) => (
        <div key={i}>
          <h2> {que.title} </h2>
          {que.questions.map((ans, j)=> (
            <button key={j} onClick={(e) => checkClue(e, que.key, ans)}> {ans} </button>
          ) )}
        </div>
      ))}

    </div>
  );
};

export default Questions;
