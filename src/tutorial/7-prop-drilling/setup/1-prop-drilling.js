import React, { useState } from 'react';
import {data} from "../../../data"

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {

  let [people, setPeople] = useState(data)

  const handleRemove=(id)=>{
   let newPeople = people.filter((person)=> person.id !== id )
    setPeople(newPeople)
  }

  return <section>
    <h3>Prop drilling</h3>
    <List people = {people} handleRemove={handleRemove}/>
     </section>;
};

export default PropDrilling;


const List =({people, handleRemove})=>{
  return <div>
    {people.map((person)=>{
       const {id, name} = person
       return  <SinglePerson key={person.id} name={name} id={id} handleRemove= {handleRemove}/>
    })}
  </div>
}


const SinglePerson =({id, name, handleRemove}) =>{

  return <div className="item">
        <h3>{name}</h3>
        <button onClick={()=> handleRemove(id)}>remove</button>
  </div> 
}