import React  from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [people, setPeople] = React.useState(data)

  
  const handleClear =()=>{
    setPeople([])
  }
  
  const handleRemove=(id)=>{
    let newPeople = people.filter((person)=> person.id !== id )
    setPeople(newPeople)
  }

  return  (
    <>
      {people.map((person, index)=>{
        const {id, name} = person
      return <div key={id} className='item'> <h4> {name }</h4>
                          <button onClick={()=>handleRemove(id)}>remove</button>
             </div> 
      })}
  
    <button className="btn" onClick={handleClear}> Clear Item</button>
    </>
    )


};

export default UseStateArray;
