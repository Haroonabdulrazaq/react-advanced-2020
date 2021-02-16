import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
 
  const [person, setPerson ] = useState({
   firstName:'', 
   email:'',
   age:''
  })

  const [people, setPeople ] = useState([])
 
  const handleChange=(e)=>{
    e.preventDefault();
    setPerson({
      ...person, [e.target.name]: e.target.value
    })
  }

  const handleSubmit =(e)=>{
    e.preventDefault()

    const {id, firstName, email, age} = person
    if(firstName && email && age){
      setPeople([...people, { id: new Date().getTime().toString(),...person}])
      setPerson({
        firstName: '',
        email:'',
        age:''
      })
    }else{
      console.log("Error value")
    }
    
  }

   
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Age : </label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        <h2 style={{marginTop: "2rem"}}>All Users</h2>
          {people.map((person, index) => {
            const { firstName, email, age } = person;
            return (
              <div className='item' key={person.id}>
                <h4>{firstName}</h4>
                <p>{age}</p>
                <p>{email}</p>
              </div>
            );
          })}
      </article>
    </>
  );
};

export default ControlledInputs;
