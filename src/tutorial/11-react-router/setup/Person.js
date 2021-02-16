import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {

  let [name, setName] = useState("default name")
  let { id } = useParams()

  useEffect(()=>{
    let newPerson = data.find((person)=> person.id === Number(id))
    setName(newPerson.name)
  },[id])

  return (
    <div>
      <h2>person</h2>
      <h2>More about {name}</h2>
      <Link to="/people"><p>Back to people</p></Link>
    </div>
  );
};

export default Person;
