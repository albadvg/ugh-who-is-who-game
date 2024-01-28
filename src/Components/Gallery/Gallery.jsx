    import React from 'react'

    
    const Gallery = ({persons, randomPerson}) => {
        // console.log(persons);
    function checkPerson(click) {
      if (click.img === randomPerson.img) { 
        alert("You Win!")
        window.location.reload()
      } else {
        alert("You Lose :'(")
      }
        }
        return (
        <div className="b-board-game">
        
         {persons.map((per,i)=>(

            <img src={per.img} key={i} alt='' className={per.isDisabled && 'disabled'} onClick={()=> checkPerson(per)}></img>
         ))}   
        </div>
        
      )

    }
    
    export default Gallery
    