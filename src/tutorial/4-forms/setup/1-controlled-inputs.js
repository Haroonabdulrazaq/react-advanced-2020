import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange


const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [person, setPerson] = useState([])
  const [id, setId] = useState(1)


  const handleSubmit = (e) => {
    e.preventDefault()
    
    setId((id)=>{
      return id + 1
    })

    if (firstName && email) {
      const newPerson = { id, firstName, email }
      
      setPerson((person) => {
        return [...person, newPerson]
      })
    }
    setFirstName('')
    setEmail('')
  }
  return <>
    <article>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>
        <button className="btn">Add Person</button>
      </form>
    </article>
    <h2 style={{ marginTop: "2rem" }}>All Users</h2>
    <article>
      {person.map((person, index) => {
        const { id, firstName, email } = person
        return (
          <div className="item" key={id}>
            <h3>{firstName}</h3>
            <p>{email}</p>
          </div>
        )
      })}
    </article>

  </>;
};

export default ControlledInputs;
